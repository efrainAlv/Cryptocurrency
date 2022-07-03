// ============================================== MATERIAL IMPORTS ==============================================

import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';


// ============================================== IMPORTS ==============================================
import { dark } from '../../themes';
import { FormSignIn } from './Form';
//import { authenticate } from '../../services/users';
import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { login } from '../../reducers/userReducer';
import Cookies from 'js-cookie';
import { API } from '../../services/users';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export function SignIn() {

    //    const dispatch = useDispatch();
    const history = useHistory();

    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState({ caption: '', severity: 'info' })


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios({
            method: 'post',
            url: `${API}/login`,
            responseType: 'json',
            responseEncoding: 'utf8',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                email: data.get('email'),
                password: data.get('password'),
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    Cookies.set('token', res.data.response, { secure: true, expires: 1, sameSite: 'strict' })
                    history.push('/')
                }
            })
            .catch((err) => {

                setAlert({
                    severity: 'error',
                    caption: 'Password or Email Incorrect'
                })
                setShowAlert(true)
            })
    };


    return (
        <ThemeProvider theme={dark}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://img.freepik.com/vector-gratis/icono-financiero-establece-fondo-transparente-telon-fondo-sitio-web-financiero-o-anuncios-e-informacion-temas-economicos-signos-dinero-dolares-fondos-pantalla-vectores-o-fondo-sitio-web_570429-320.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
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
                        <FormSignIn
                            handleSubmit={(event) => handleSubmit(event)}
                            onClose={(action) => setShowAlert(action)}
                            caption={alert.caption}
                            severity={alert.severity}
                            showAlert={showAlert}
                        />
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}