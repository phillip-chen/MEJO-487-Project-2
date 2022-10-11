import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

const Slide10 = () => {
    return(
        <Card key={11} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section'>
            <div className='text-group video-intro animate__animated animate__fadeIn'>
                <h1 className='title'>This or That?</h1>
                <p className='body-text'>Now you've learned the basics of the Cola War, let's look at this fun video analyzing the two brands, then vote for your favorite soda.</p>
            </div>
            <iframe className='animate__animated animate__fadeIn' id='video' src="https://www.youtube.com/embed/7rwL1Jzab0A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </aside>
        </Card>
    )
}

export default Slide10;