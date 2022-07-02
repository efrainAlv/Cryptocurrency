import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRoutes from '../routes/users.js'
import bitcoinRoutes from '../routes/bitcoin.js'
import ethereumRoutes from '../routes/ethereum.js'


// INITIALIZE =====================================

const app = express();
dotenv.config();
//=================================================


// SET PORT =======================================

app.set('port', process.env.PORT || 4000);

//=================================================



//MIDDLEWARES =====================================

app.use(express.urlencoded({ extended: false }))
app.use(morgan(':method :url :status: :res[content-length] - :response-time ms'));
app.use(express.json({ limit: '50mb' }));
app.use(cors());

//=================================================



// ROUTES =========================================

//app.use(userRoutes)

app.use(userRoutes);
app.use(bitcoinRoutes);
app.use(ethereumRoutes);

app.use((req, res, next) => {
    res.status(404).send('404 not found');
})

//=================================================

export default app;