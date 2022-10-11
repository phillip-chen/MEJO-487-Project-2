import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

const Slide4 = () => {
    return(
        <Card key={4} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section timeline pepsi'>
                <div className="timeline-container animate__animated animate__fadeInDown">
                {/*  Milestone event container  */}
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1908</span> - Spearheaded the delivery evolution from wagons to automobiles. (Home office Building opened in the same year at New Bern, NC)</p>
                        </div>
                    </div>
                    {/*  Milestone event container  */}
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1923</span> - 1st bankrupcy due to a failed investment in sugar after the war, facing a 2nd bankrupcy in 1931, and finally began to turn around after <span className='underline-text'>The Loft Candy Company</span> bought the business.</p>
                        </div>
                    </div>
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1939</span> - Created one of the first advertising jingle songs <span className='underline-text'>"Nicel Nickel"</span> to reflect the affordable product. Over a million copies were placed in the jukeboxes across the States. </p>
                        </div>
                    </div>
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1965</span> - Merged with <span className='underline-text'>Frito-Lay, Inc.</span>, and became PepsiCo. Later in the year, introducing <span className='underline-text'>"Doritos"</span>, the first tortilla chip to be launched nationally in the States.</p>
                        </div>
                    </div>
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1977</span> - Earned #1 cola drink in the supermarkets. Later gained its main appearance in the blockbuster <span className='underline-text'>"Back to the Future II"</span> in 1989.</p>
                        </div>
                    </div>
                </div>
            </aside>
        </Card>
    );
}

export default Slide4;