import { Fragment, useState } from "react";
import Chart from "react-apexcharts";


export const Lineal = ({ ethereum, bitcoin, width = 300 }) => {

    const [options] = useState({
        chart: {
            id: "basic-bar",
            height: 'auto',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
        },
        xaxis: {
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
            max: 25000,
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
            curve: 'smooth',
        },
        markers: {
            size: 3,
        },
        legend: {
            show: true,
            position: 'right',
            horizontalAlign: 'right',
            fontSize: '15px',
            floating: false,
            showForSingleSeries: true,
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: false
            },
            labels: {
                colors: '#e8e4e3',
                useSeriesColors: false
            },
            offsetY: 150,

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

    return (
        <Fragment>
            <Chart options={options} series={[{ name: 'BitCoin', data: bitcoin }, { name: 'Ethereum', data: ethereum }]} type="line" width={width} />
        </Fragment>
    )
}