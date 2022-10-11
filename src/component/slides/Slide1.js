import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import slide1Left1 from '../../asset/slide-1-left-1.png';
import slide1Left2 from '../../asset/slide-1-left-2.png';

const Slide1 = () => {
    return (
        <Card key={1} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <div className='slide no-divide-section'>
                <div className='text-group animate__animated animate__fadeInUp'>
                    <h1 className='title'>How It Begins...</h1>
                    <p className='body-text'>The top 2 global leaders in the soda industry began their dynasties all at the east coast in the late 19th century.</p>
                </div>
                <div className='img-group'>
                    <img src={slide1Left1} className='img-slide-1-left-1' />
                    <img src={slide1Left2} className='img-slide-1-left-2' />
                </div>
            </div>
        </Card>
    );
}

export default Slide1;