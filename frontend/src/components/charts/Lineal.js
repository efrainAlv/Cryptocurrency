import { Fragment, useState } from "react";
import Chart from "react-apexcharts";

const defaultOptions = (height, max) => {

    return ({
        options: {
            colors: ['#ffffff'],
            chart: {
                id: 'realtime',
                height: height,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 3000
                    }
                },
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 0
            },
            xaxis: {
                labels: {
                    style: {
                        colors: "#ffffff"
                    }
                }
            },
            yaxis: {
                max: max,
                labels: {
                    style: {
                        colors: ['#ffffff']
                    }
                }
            },
            legend: {
                show: false
            },
            tooltip: {
                enabled: true,
                theme: "dark"
            }
        }
    }
    )
}



export const Lineal = ({ ethereumData, bitcoinData, width = 300, height = 100, max = 50 }) => {

    return (
        <Fragment>
            <Chart options={defaultOptions(height, max)} series={[{ data: bitcoinData }, { data: ethereumData }]} type="line" width={width} />
        </Fragment>
    )
}