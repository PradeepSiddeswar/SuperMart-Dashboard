import React from "react";
import ReactApexChart from "react-apexcharts";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Income',
                type: 'column',
                data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
            }, {
                name: 'Cashflow',
                type: 'column',
                data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
            }, {
                name: 'Revenue',
                type: 'line',
                data: [20, 29, 37, 36, 44, 45, 50, 58]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1, 1, 4]
                },
                title: {
                    text: 'Super - Market - Analysis (2017 - 2023)',
                    align: 'left',
                    offsetX: 110,
                    style: {
                        color:'#7952b3'
                    }
                },
                xaxis: {
                    categories: [2017, 2018, 2011, 2019, 2020, 2021, 2022, 2023],
                },
                yaxis: [
                    {
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        labels: {
                            style: {
                                colors: '#008FFB',
                            }
                        },
                        title: {
                            text: "Income (thousand crores)",
                            style: {
                                color: '#008FFB',
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    {
                        seriesName: 'Income',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396'
                        },
                        labels: {
                            style: {
                                colors: '#00E396',
                            }
                        },
                        title: {
                            text: "Operating Cashflow (thousand crores)",
                            style: {
                                color: '#00E396',
                            }
                        },
                    },
                    {
                        seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019'
                        },
                        labels: {
                            style: {
                                colors: '#FEB019',
                            },
                        },
                        title: {
                            text: "Revenue (thousand crores)",
                            style: {
                                color: '#FEB019',
                            }
                        }
                    },
                ],
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                        offsetY: 30,
                        offsetX: 60
                    },
                },
                legend: {
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },


        };
    }



    render() {
        return (
            <Container>
            <Row>
            <Col xs={16} md={14} lg={12}>
            <div className="container text-center mt-5">

                <div id="chart" style={{ float: 'right', marginTop:'-350px'}}>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} width={600} />
                </div>
            </div>
            </Col>
            </Row>
    </Container>
        )
    }
}


export default Chart;




