import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
//import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Fragment } from "react"

export const Coin = ({ tier, price }) => {

    return (
        <Fragment>
            <Grid
                item
                key={tier.title}
                xs={12}
                sm={12}
                md={6}
            >
                <Card>
                    <CardHeader
                        title={tier.title}
                        subheader={tier.subheader}
                        titleTypographyProps={{ align: 'center' }}
                        action={tier.title === 'Pro' ? <div></div> : null}
                        subheaderTypographyProps={{
                            align: 'center',
                        }}
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[700],
                        }}
                    />
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                mb: 2,
                            }}
                        >
                            <Typography component="h2" variant="h3" color="text.primary">
                                ${price.higher} <KeyboardArrowUpIcon fontSize='large' color='success' />
                            </Typography>
                        </Box>
                        <ul>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                sx={{ marginBottom: 3 }}
                            >
                                <img alt="alt" src={tier.image} width={tier.title === "Ethereum" ? "32%" : "50%"} />
                            </Box>
                        </ul>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                mb: 2
                            }}
                        >
                            <Typography component="h4" variant="h4" color="text.primary">
                                <KeyboardArrowDownIcon color='error' />  ${price.lower}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button fullWidth variant={tier.buttonVariant}>
                            Consult the API
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Fragment>
    )
}