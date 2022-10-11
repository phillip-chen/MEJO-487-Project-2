import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import pepsiFunfactCover2 from '../../asset/fun-fact-pepsi-cover2.png';
import pepsiFunfactCover from '../../asset/fun-fact-pepsi-cover.jpeg';

const Slide10 = () => {
    return(
        <Card key={8} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section product-intro pepsi'>
                <div className='text-group animate__animated animate__fadeInRight'>
                    <h1 className='title'>Did You Know...</h1>
                    <ul className='fun-fact-list'>
                        <li className='small-text'>Pepsi introduced the 12-ounce bottle for the same price as a 6.5-ounce one of Coca-Cola in 1936, boosting its profits during the great recession.</li>
                        <li className='small-text'>In 1932, Pepsi became the first product to be advertised using skywriting.</li>
                        <li className='small-text'>In the 1990s, the mascot - Pepsimanin was created in Japanese market, it even has its own video game.</li>
                        <li className='small-text'>The famous “Pepsi Paradox” was created in 1975 where most customers chose Pepsi in a blind taste test, while the majority picked Coca Cola when the 2 brands were showed first.</li>
                    </ul>
                </div>
                <div className='product-img-group pepsi animate__animated animate__fadeInRight'>
                <img src={pepsiFunfactCover} className='product-img' />
                    <img src={pepsiFunfactCover2} className='product-img second' />
                </div>
            </aside>
        </Card>
    )
}

export default Slide10;