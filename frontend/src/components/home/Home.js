import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { Coin } from './Coin';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';


import { Fragment } from 'react';
import { CopyRight } from '../Copyright';
import { dark } from '../../themes';
import { Lineal } from '../charts/Lineal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
//import { userReducer } from '../../reducers/userReducer';
import { useHistory } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

import { API } from '../../services/users';

var tempBC = []
var tempTE = []

const coins = {
    bitcoin: {
        title: 'Bitcoin',
        price: '0',
        image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Bitcoin.png",
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    ethereum: {
        title: 'Ethereum',
        price: '0',
        image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
};

export const Home = () => {

    const history = useHistory();

    const [bitcoinPrice, setBitcoinPrice] = useState(0);
    const [ethereumPrice, setEthereumPrice] = useState(0);

    const [bitcoinHistory, setBitcoinHistory] = useState([]);
    const [ethereumHistory, setEthereumHistory] = useState([]);

    const [logged, setLogged] = useState(false);

    useEffect(() => {

        axios({
            method: 'get',
            url: `${API}/bitcoin`,
            responseType: 'json',
            responseEncoding: 'utf8',
            headers: {
                'Authorization': Cookies.get("token"),
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setBitcoinPrice(parseFloat(res.data.response[0][2]).toFixed(4))
                    setLogged(true)
                }
                else history.push('/sign-in')
            })
            .catch((err) => {
                history.push('/sign-in')
                //console.log(err)
            })

    }, [bitcoinPrice])


    useEffect(() => {

        axios({
            method: 'get',
            url: `${API}/ethereum`,
            responseType: 'json',
            responseEncoding: 'utf8',
            headers: {
                'Authorization': Cookies.get("token"),
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setEthereumPrice(parseFloat(res.data.response[0][2]).toFixed(4))
                    setLogged(true)
                }
                else history.push('/sign-in')
            })
            .catch((err) => {
                history.push('/sign-in')
                //console.log(err)
            })

    }, [ethereumPrice])


    const insertHistory = (coin) => {
        axios({
            method: 'get',
            url: `${API}/${coin}`,
            responseType: 'json',
            responseEncoding: 'utf8',
            headers: {
                'Authorization': Cookies.get("token"),
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((res) => {

                if (res.status === 200) {

                    if (coin === 'bitcoin') {

                        tempBC = bitcoinHistory

                        if (tempBC.length > 8) tempBC.shift(); tempBC.shift();
                        tempBC.push(parseFloat(res.data.response[0][2]).toFixed(4))
                        tempBC.push(parseFloat(res.data.response[0][3]).toFixed(4))

                        setBitcoinHistory(tempBC)
                        setBitcoinPrice(res.data.response[0][2])
                    }
                    else {

                        tempTE = ethereumHistory

                        if (tempTE.length > 8) tempTE.shift(); tempTE.shift();
                        tempTE.push(parseFloat(res.data.response[0][2]).toFixed(4))
                        tempTE.push(parseFloat(res.data.response[0][3]).toFixed(4))

                        setEthereumHistory(tempTE)
                        setEthereumPrice(res.data.response[0][2])
                    }
                }
                else history.push('/sign-in')
            })
            .catch((err) => {
                history.push('/sign-in')
                //console.log(err)
            })
    }

    useEffect(() => {
        const timerBc = setInterval(() => insertHistory('bitcoin'), 3 * 1000);
        const timerEt = setInterval(() => insertHistory('ethereum'), 3 * 1000);

        return function cleanup() {
            clearInterval(timerBc);
            clearInterval(timerEt);
        };

    }, []);


    return (

        <Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Cryptocurrency
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >

                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >

                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >

                        </Link>
                    </nav>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => { Cookies.remove('token'); history.push('/sign-in') }} >
                        Log-Out
                    </Button>
                </Toolbar>
            </AppBar>


            {/* Hero unit */}


            <ThemeProvider theme={dark}>
                {
                    logged ?
                        <Grid container component="main" sx={{ height: '100vh' }}>
                            <CssBaseline />
                            <Grid
                                item
                                xs={false}
                                sm={4}
                                md={7}
                            >
                                <Box sx={{ padding: 5, marginTop: 2 }}>
                                    <Typography
                                        component="h1"
                                        variant="h2"
                                        align="center"
                                        color="text.primary"
                                        gutterBottom
                                    >
                                        Pricing History
                                    </Typography>

                                    <Lineal
                                        //key={Math.random()}
                                        bitcoin={bitcoinHistory}
                                        ethereum={ethereumHistory}
                                        height={window.screen.height * 0.6}
                                        width={window.screen.width * 0.50} >
                                    </Lineal>

                                </Box>
                            </Grid>


                            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                                <Box
                                    sx={{
                                        my: 8,
                                        mx: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                                        <Typography
                                            component="h1"
                                            variant="h2"
                                            align="center"
                                            color="text.primary"
                                            gutterBottom
                                        >
                                            Pricing
                                        </Typography>
                                        <Typography variant="h5" align="center" color="text.secondary" component="p">
                                            A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms.
                                        </Typography>
                                    </Container>
                                    {/* End hero unit */}

                                    <Container maxWidth="md" component="main">
                                        <Grid container spacing={4} alignItems="center">
                                            <Coin tier={coins.bitcoin} price={bitcoinPrice} />
                                            <Coin tier={coins.ethereum} price={ethereumPrice} />
                                        </Grid>
                                    </Container>
                                </Box>
                            </Grid>

                        </Grid>
                        :
                        <Box sx={{ margin: 5, marginTop: 20 }}>
                            <Typography variant="h2" color="inherit" noWrap sx={{ flexGrow: 1, alignContent: "center", textAlign: "center" }} >
                                Loading ...
                            </Typography>
                            <ClipLoader color={"red"} loading={true} cssOverride={{
                                display: "block",
                                margin: "0 auto",
                                borderColor: "red",
                            }} size={150} />
                        </Box>
                }
            </ThemeProvider>


            {/* Footer */}

            <CopyRight />

        </Fragment >
    );
}