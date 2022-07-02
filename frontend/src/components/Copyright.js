import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Fragment } from "react"

export const CopyRight = () => {

    return (
        <Fragment>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Fragment>
    )
}