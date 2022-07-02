import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
config();

export const verifyToken = async (req, res, next) => {

    try {

        //console.log(req.headers)
        const token = req.headers["authorization"];

        if (!token) return res.status(403).send({ response: 'Missing token' })
        const decode = jwt.verify(token, process.env.SECRET)

        req.body.email = decode.email;
        //console.log(decode)
        next()

    } catch (error) {
        return res.status(500).send({ response: 'Unauthorized or token has expired' })
    }

}