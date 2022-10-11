import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import slide1Right1 from '../../asset/slide-1-right-1.png';
import slide1Right2 from '../../asset/slide-1-right-2.png';
import cocaLogo from '../../asset/coca-cola-logo.svg';
import pepsiLogo from '../../asset/pepsi-logo.svg';

const Slide2 = () => {
    return (
        <Card key={2} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
          <div className='slide divide-section'>
            
            {/* Coca Cola Section */}
            
            <div className='coca-intro'>
                  
                  <div className='img-founder-container animate__animated animate__fadeInUp'>
                      <img src={slide1Right1} className='img-founder' />
                  </div>

                  <div className='intro-content coca animate__animated animate__fadeInUp'>
                    <div className='intro-text'>
                      <img src={cocaLogo} className='logo-divide-section' />
                      <p className='body-text'>The original recipe is invented and produced by <span className='underline-text'>Dr. John Stith Pemberton</span> at Jacobs' Pharmacy.</p>
                    </div>

                    <div className='intro-small-text'>
                      <p className='small-text'>May, 1886</p>
                      <p className='small-text'>Atlanta, Georgia</p>
                    </div>
                  </div>
            </div>

            {/* Pepsi Section */}

            <div className='pepsi-intro'>

              <div className='intro-content pepsi animate__animated animate__fadeInUp'>
                <div className='intro-text'>
                  <img src={pepsiLogo} className='logo-divide-section' />
                  <p className='body-text'>The original formula is invented by <span className='underline-text'>Caleb D. Bradham</span>, first been called “Brad’s Drink ” at Bradham' Drug Store.</p>
                </div>

                <div className='intro-small-text'>
                  <p className='small-text'>May, 1893</p>
                  <p className='small-text'>New Bern, North Carolina</p>
                </div>
              </div>

              <div className='img-founder-container animate__animated animate__fadeInUp'>
                  <img src={slide1Right2} className='img-founder' />
              </div>

            </div>
          </div>
        </Card>
    )
}

export default Slide2;