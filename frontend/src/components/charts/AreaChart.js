import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


import { Fragment, useState } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';
import Cookies from 'js-cookie';
//import { userReducer } from '../../reducers/userReducer';
import { useHistory } from 'react-router-dom';
import { API } from '../../services/users';
import ReactInterval from 'react-interval';


export const AreaChart = ({ bitcoinInit = [], ethereumInit = [], width = 300, coin }) => {


    const [options] = useState({
        chart: {
            toolbar: {
                show: true
            },
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                rotateAlways: false,
                hideOverlappingLabels: true,
                showDuplicates: false,
                trim: true,
                minHeight: undefined,
                maxHeight: 120,
                style: {
                    colors: "#e8e4e3",
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    cssClass: 'apexcharts-xaxis-label',
                }
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#e8e4e3",
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    cssClass: 'apexcharts-xaxis-label',
                }
            }
        },

        stroke: {
            curve: 'straight'
        },
        markers: {
            size: 3,
        },
        tooltip: {
            enabled: true,
            theme: "dark"
        },
        dataLabels: {
            enabled: false,
        },
        colors: [
            "#f5b942", "#429ef5"
        ],

    })

    const [bitcoin, setBitcoin] = useState(bitcoinInit);
    const [ethereum, setEthereum] = useState(ethereumInit);

    const [rate, setRate] = useState(3);

    const history = useHistory();

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

                    let date = (new Date()).getTime();

                    if (coin === 'bitcoin') {

                        if (bitcoin.length > 20) { bitcoin.shift(); bitcoin.shift(); }
                        setBitcoin([...[...bitcoin, { x: date, y: parseFloat(res.data.response[0][2]) }], { x: date, y: parseFloat(res.data.response[0][3]) }])
                    }
                    else {

                        if (ethereum.length > 20) { ethereum.shift(); ethereum.shift(); }
                        setEthereum([...[...ethereum, { x: date, y: parseFloat(res.data.response[0][2]) }], { x: date, y: parseFloat(res.data.response[0][3]) }])
                    }
                }
                else history.push('/sign-in')
            })
            .catch((err) => {
                history.push('/sign-in')
            })
    }

    return (
        <Fragment>

            <ReactInterval
                timeout={rate * 1000}
                enabled={true}
                callback={() => { insertHistory('bitcoin'); insertHistory('ethereum') }} />

            <Chart
                options={options}

                series={[{
                    type: 'area',
                    name: 'BitCoin',
                    data: bitcoin
                }, {
                    type: 'area',
                    name: 'Ethereum',
                    data: ethereum
                }]}

                height={window.screen.height * 0.5}
                width={window.screen.width * 0.50} />

            <Box>
                <Typography gutterBottom> Adjust the refresh rate - SECONDS </Typography>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Slider
                        aria-label="Temperature"
                        value={rate}
                        onChange={(e, value) => { setRate(value) }}
                        defaultValue={3}
                        getAriaValueText={() => `${rate} seconds`}
                        valueLabelDisplay="auto"
                        step={3}
                        marks
                        min={0}
                        max={60}
                    />
                </Stack>
            </Box>

        </Fragment>
    )
}