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

const tiers = [
    {
        title: 'Bitcoin',
        price: '0',
        image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Bitcoin.png",
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Ethereum',
        price: '0',
        image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
];


function PricingContent() {
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
                        Company name
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Features
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Enterprise
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Support
                        </Link>
                    </nav>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>


            {/* Hero unit */}


            <ThemeProvider theme={dark}>
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
                                key={Math.random()}
                                series={[1, 2, 3, 4, 5, 60]} height={window.screen.height * 0.6}
                                width={window.screen.width * 0.5} > </Lineal>
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
                                    Quickly build an effective pricing table for your potential customers with
                                    this layout. It&apos;s built with default MUI components with little
                                    customization.
                                </Typography>
                            </Container>
                            {/* End hero unit */}

                            <Container maxWidth="md" component="main">
                                <Grid container spacing={4} alignItems="center">
                                    {tiers.map((tier) => (
                                        // Enterprise card is full width at sm breakpoint
                                        <Coin tier={tier}>

                                        </Coin>
                                    ))}
                                </Grid>
                            </Container>

                        </Box>
                    </Grid>

                </Grid>
            </ThemeProvider>


            {/* Footer */}

            <CopyRight />

        </Fragment>
    );
}

export function Home() {
    return <PricingContent />;
}