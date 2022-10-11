import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import {marketShareData} from '../../section/marketShare.js';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const Slide7 = () => {
    const [vizData, setData] = useState({
        labels: ['Coca Cola', 'PepsiCo', 'Dr. Peper', 'Others'],
        datasets: [
            {
                label: '',
                data: marketShareData,
                color: '#fff',
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    '#711f25',
                    'rgb(255, 205, 86)'
                ],
                borderColor: '#fff',
                borderAlign: 'center',
                spacing: '0'
                
            }
        ]
    });

    return(
        <Card key={9} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section pie'>
                <div className='text-group animate__animated animate__zoomIn'>
                    <h1 className='title'>By The Numbers</h1>
                    <p className='body-text'>Let's look at the data of the two soda brands. Below is market share breakdown of the soda industry in 2020, take a look and jump to the next section and see the revenue chart for comaprison. (Source: Statista)</p>
                </div>
                <div className='chart-group'>
                    <Doughnut data={vizData} options = {
                        {
                            plugins: {
                                title : {
                                    display: false,
                                    text : '2020 Soda Industry Market Share',
                                    color: '#fff',
                                    font: {
                                        size: 16
                                    }
                                },

                                legend: {
                                    labels: {
                                        color: '#fff',
                                        boxWidth: 30,
                                    },
                                    align: 'start',
                                    position: 'right',
                                    textDirection: 'ltr',
                                    onClick: ''
                                    
                                },

                                tooltip: {
                                    callbacks: {
                                        label: (d) => {
                                            if(d.label === 'PepsiCo'){
                                                return ' PepsiCo : '+String(Math.floor(d.dataset.data[1]*1000)/10) + '%';
                                            }else if(d.label === 'Coca Cola'){
                                                return ' Coca Cola : '+String(Math.floor(d.dataset.data[0]*1000)/10) + '%';
                                            }else if(d.label === 'Dr. Peper'){
                                                return ' Dr. Peper : '+String(Math.floor(d.dataset.data[2]*1000)/10) + '%';
                                            }else{
                                                return ' Others : '+String(Math.floor(d.dataset.data[3]*1000)/10) + '%';
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

export default Slide7;