// ============================================== MATERIAL IMPORTS ==============================================


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

// ============================================== IMPORTS ==============================================
import { Fragment } from "react"
import { ActionAlerts } from '../Alert';
import { CopyRight } from '../Copyright';


export const FormSignIn = ({ handleSubmit, onClose, caption, severity, showAlert }) => {

    const history = useHistory();

    return (
        <Fragment>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link sx={{ cursor: "pointer" }} variant="body2" onClick={() => history.push('sign-up')}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>

                <Box sx={{ margin: 4 }}>
                    {
                        showAlert &&
                        <ActionAlerts
                            onClose={onClose}
                            caption={caption}
                            severity={severity}
                        />
                    }
                </Box>

                <CopyRight />
            </Box>
        </Fragment>
    )


}