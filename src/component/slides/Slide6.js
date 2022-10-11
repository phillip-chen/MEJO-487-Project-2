import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

const Slide6 = () => {
    return(
        <Card key={6} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section timeline coca'>
                <div className="timeline-container coca animate__animated animate__fadeInUp">
                {/*  Milestone event container  */}
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1915</span> - Became the first of the two soda brands to expand the market outside the States at Philippines. The market kept growing to Australia & South Africa in the late <span className='underline-text'>1930s</span>.</p>
                        </div>
                    </div>
                    {/*  Milestone event container  */}
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1950</span> - Leveraged the power of TV at the time by broadcasted a half-hour commercial on CBS. Later in 1953, created its own radio-friendly ditty, <span className='underline-text'>“Coke Time”</span>.</p>
                        </div>
                    </div>
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1960</span> - Provided more product options for the customers. First, acquired <span className='underline-text'>The Minute Maid Corporation</span>. Later in 1961, launched its most successful spin-off product - <span className='underline-text'>Sprite</span>.</p>
                        </div>
                    </div>
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1985</span> - Introduced the <span className='underline-text'>New Coke</span> to address the market loss, but got public backlash. Eventually brought back the original formula, and helped grow the sales significantly.</p>
                        </div>
                    </div>
                    <div className="timeline-event-container">
                        <div className="timeline-content">
                            <img />
                            <p className='small-text'><span className='underline-text'>1990</span> - One of the milestone victory where Coca Cola struck a deal and became the only soda provider across the entire <span className='underline-text'>Disneyland Park</span>.</p>
                        </div>
                    </div>
                </div>
            </aside>
        </Card>
    )
}

export default Slide6;