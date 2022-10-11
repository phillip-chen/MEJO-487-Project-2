import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import cocaCover from '../../asset/coca-cola-timeline-cover.jpeg';

const Slide5 = () => {
    return(
        <Card key={5} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section timeline-intro'>
                <div className='text-group animate__animated animate__fadeInDown'>
                    <h1 className='title'>Coca Cola's Timeline</h1>
                    <p className='body-text'>In 1888, Pemberton sold Coca-Cola's ownership rights to <span className='underline-text'>Asa Griggs Candler</span>, who applied effective marketing strategies to make Coca-Cola become the current leading brand in the Soda industry.</p>
                </div>
                <div className='timeline-img-group animate__animated animate__fadeInDown'>
                    <img src={cocaCover} className='timeline-img' />
                </div>
            </aside>
        </Card>
    )
}

export default Slide5;