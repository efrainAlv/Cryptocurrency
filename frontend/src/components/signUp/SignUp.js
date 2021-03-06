
// ============================================== MATERIAL IMPORTS ==============================================
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Paper } from '@mui/material';


// ============================================== IMPORTS ==============================================
import { dark } from '../../themes';
//import { register } from '../../services/users'
//import { registerUser } from '../../reducers/userReducer';
//import { useDispatch } from 'react-redux';
import { Fragment, useState } from 'react';
import { ActionAlerts } from '../Alert';
import { CopyRight } from '../Copyright';
import axios from 'axios';
import { API } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function SignUp() {

    //const dispatch = useDispatch();
    const history = useHistory();

    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState({ caption: '', severity: 'info' })

    const handleSubmit = async (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios({
            method: 'post',
            url: `${API}/registerUser`,
            responseType: 'json',
            responseEncoding: 'utf8',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                name: data.get('name'),
                email: data.get('email'),
                password: data.get('password'),
            }
        })
            .then((res) => {

                if (res.status === 200) {
                    setAlert({
                        severity: 'success',
                        caption: 'Registered successfully!'
                    })
                    setShowAlert(true)
                    history.push('sign-in')
                }
                else {
                    setAlert({
                        severity: 'error',
                        caption: res.response
                    })
                    setShowAlert(true)
                }
            }).catch((err) => {
                setAlert({
                    severity: 'error',
                    caption: 'Emial already registered'
                })
                setShowAlert(true)
            })

    };

    return (

        <Fragment>
            <Box direction="row" sx={{ mb: 1, textAlign: "left" }} alignItems="center">
                <Typography gutterBottom component="h3" variant="h3">
                    <MonetizationOnIcon fontSize='large' color='danger' /> Cryptocurrency
                </Typography>
            </Box>

            <Paper
                sm={4}
                md={7}
                sx={{
                    //backgroundImage: `url(${Image})`,
                    backgroundImage: 'url(background.jpg)',
                    backgroundRepeat: 'no-repeat',
                    //backgroundColor: (t) =>
                    //    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: window.screen.height * 0.6
                }}
            >

                <Box sx={{ height: window.screen.height * 0.6 }}>

                    <ThemeProvider theme={dark}>
                        <Container component="main" maxWidth="xs" sx={{ paddingTop: 0.5, height: window.screen.height * 0.6, backgroundColor: "#121212" }}>
                            <CssBaseline />

                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    {/*<LockOutlinedIcon />*/}
                                </Avatar>
                                <Typography component="h1" variant="h5" color={"#fff"} >
                                    Sign up
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="name"
                                                required
                                                fullWidth
                                                id="name"
                                                label="Full Name"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <Link sx={{ cursor: "pointer" }} variant="body2" onClick={() => history.push('sign-in')}>
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>

                            <Box sx={{ margin: 4 }}>
                                {
                                    showAlert &&
                                    <ActionAlerts
                                        onClose={() => setShowAlert(false)}
                                        caption={alert.caption}
                                        severity={alert.severity}
                                    />
                                }
                            </Box>

                            <Box>
                                <CopyRight />
                            </Box>

                        </Container>
                    </ThemeProvider>

                </Box>
            </Paper>
        </Fragment >


    );
}