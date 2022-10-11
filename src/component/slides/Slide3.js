import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import pepsiLogo from '../../asset/pepsi-logo.svg';
import pepsiCover from '../../asset/pepsi-timeline-cover.svg';

const Slide3 = () => {
    return(
        <Card key={3} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section timeline-intros'>
                <div className='text-group animate__animated animate__fadeInUp'>
                    <h1 className='title'>Pepsi's Timeline</h1>
                    <p className='body-text'>After changed the product name from Brad’s drink to <span className='underline-text'>“Pepsi-Cola”</span> in 1898, the corporation had went through several big moments throughout the history that evetually shaped the business you see today!</p>
                </div>
                <div className='timeline-img-group animate__animated animate__fadeInUp'>
                    <img src={pepsiCover} className='timeline-img' />
                </div>
            </aside>
        </Card>
    )
}

export default Slide3;

