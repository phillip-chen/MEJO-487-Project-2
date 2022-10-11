import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import cocaFunfactCover from '../../asset/fun-fact-coca-cover.jpeg';
import cocaFunfactCover2 from '../../asset/fun-fact-coca-cover-2.jpeg';

const Slide9 = () => {
    return(
        <Card key={5} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
             <aside className='slide no-divide-section product-intro coca'>
                <div className='text-group animate__animated animate__fadeInLeft'>
                    <h1 className='title'>Fun Facts...</h1>
                    <ul className='fun-fact-list'>
                        <li className='small-text'>The name "Coca Cola" derived from the its original ingredients - “Coca plant”, which contains caffeine, and “Kola nuts” which contains cocaine (had been removed in 1903).</li>
                        <li className='small-text'>First brand in US to adopt the concept of coupon in 1887.</li>
                        <li className='small-text'>There are only 2 places on this planet, Cuba & North Korea, where you cannot buy Coca Cola.</li>
                        <li className='small-text'>Coca Cola did not invent Santa, but its winter advertising in 1931 helped populate the jolly image of the modern Santa.</li>
                    </ul>
                </div>
                <div className='product-img-group animate__animated animate__fadeInLeft'>
                    <img src={cocaFunfactCover} className='product-img' />
                    <img src={cocaFunfactCover2} className='product-img coupon' />
                </div>
            </aside>
        </Card>
    )
}

export default Slide9;