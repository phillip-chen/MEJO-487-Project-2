import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import {SodaData} from '../../section/sodaData.js';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


const Slide8 = () => {
    const [vizData, setData] = useState({
        labels: SodaData.map(d=>d.year),
        datasets: [
            {
                label: 'PepsiCo',
                data: SodaData.map(d => d.totalRevenue.pepsi),
                borderColor: '#09395f',
                backgroundColor: '#075C98',
                pointBorderColor: "#fff",
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBorderWidth: 1,
                borderWidth: 3
                
            },
            {
                label: 'Coca Cola',
                data: SodaData.map(d => d.totalRevenue.cola),
                borderColor: '#91171f',
                backgroundColor: '#EA4A3C',
                pointBorderColor: "#fff",
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBorderWidth: 1,
                borderWidth: 3
            }
        ]
    });

    let handleFilter = (e) => {
        console.log(e.target.value);
        setData((prevState) => {
            return({
                labels: SodaData.map(d=>d.year),
                datasets: [
                    {
                        label: 'PepsiCo',
                        data: SodaData.map(d => d[e.target.value].pepsi),
                        borderColor: '#09395f',
                        backgroundColor: '#075C98',
                        pointBorderColor: "#fff",
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBorderWidth: 1,
                        borderWidth: 3
                    },
                    {
                        label: 'Coca Cola',
                        data: SodaData.map(d => d[e.target.value].cola),
                        borderColor: '#91171f',
                        backgroundColor: '#EA4A3C',
                        pointBorderColor: "#fff",
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBorderWidth: 1,
                        borderWidth: 3
                    }
                ]
            });
        });
    }


    return(
        <Card key={10} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section chart'>
                <div className='text-group animate__animated animate__zoomIn'>
                    <p className='body-text'>As you can see, based on the trends, Pepsi has earned more profits, but for the beverage profits and market share, Coca Cola still dominates the market. Feel free to filter the data and see more details. (Source: Statista)</p>
                </div>
                <div className='line-chart-group'>
                    <select id='line-chart-filter' onChange={handleFilter}>
                        <option value={'totalRevenue'}>Total Revenue</option>
                        <option value={'drinkRevenue'}>Beverage Revenue</option>
                        <option value={'snackRevenue'}>Snack Revenue</option>
                    </select>
                    <Line data={vizData} options = {
                        {
                            scales: {
                                x : {
                                    grid: {
                                        color: '#fff',
                                        linerWidth: 3
                                    },
                                    ticks: {
                                        color: '#fff'
                                    }
                                },
                                y: {
                                    ticks: {
                                        callback: (d) => {
                                            return '$ '+ String(d) + ' bn'
                                        },
                                        color: '#fff'
                                    },
                                    grid: {
                                        color: '#fff'
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        color: '#fff'
                                    },
                                    align: 'end',
                                    position: 'top'
                                },
                                tooltip: {
                                    callbacks: {
                                        label: (d) => {
                                            if(d.dataset.label === 'PepsiCo'){
                                                return ' PepsiCo : $ '+String(d.raw) + ' bn';
                                            }else{
                                                return ' Coca Cola : $ '+String(d.raw) + ' bn';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } />
                </div>
            </aside>
        </Card>
    )
}

export default Slide8;