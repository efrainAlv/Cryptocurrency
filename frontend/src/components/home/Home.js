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
import { dark } from '../../themes';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
//import { userReducer } from '../../reducers/userReducer';
import { useHistory } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { AreaChart } from '../charts/AreaChart';

import { API } from '../../services/users';


const coins = {
    bitcoin: {
        title: 'Bitcoin',
        price: '0',
        image: "bit.png",
        buttonVariant: 'outlined',
    },
    ethereum: {
        title: 'Ethereum',
        price: '0',
        image: "ethe.png",
        buttonVariant: 'outlined',
    },
};

export const Home = () => {

    const history = useHistory();

    const [bitcoinPrice, setBitcoinPrice] = useState({ lower: 0, higher: 0 });
    const [ethereumPrice, setEthereumPrice] = useState({ lower: 0, higher: 0 });

    const [logged, setLogged] = useState(false);




    useEffect(() => {

        const getPrice = (coin) => {

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

                        if (coin === 'bitcoin') setBitcoinPrice({ lower: parseFloat(res.data.response[0][3]).toFixed(2), higher: parseFloat(res.data.response[0][2]).toFixed(2) })
                        else setEthereumPrice({ lower: parseFloat(res.data.response[0][3]).toFixed(2), higher: parseFloat(res.data.response[0][2]).toFixed(2) })
                        setLogged(true)
                    }
                    else history.push('/sign-in')
                })
                .catch((err) => {
                    history.push('/sign-in')
                })
        }

        getPrice('bitcoin')
        getPrice('ethereum')

    }, [history])

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
                                        component="h3"
                                        variant="h3"
                                        align="center"
                                        color="text.primary"
                                        gutterBottom
                                    >
                                        Pricing History
                                    </Typography>

                                    <AreaChart
                                        bitcoinInit={[{ x: (new Date()).getTime(), y: bitcoinPrice.higher }]}
                                        ethereumInit={[{ x: (new Date()).getTime(), y: ethereumPrice.higher }]}
                                        onBitCoinUpdate={(value) => setBitcoinPrice(value)}
                                        onEthereumUpdate={(value) => { setEthereumPrice(value) }}
                                    />
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

        </Fragment >
    );
}