import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const Slide12 = () => {
    
    let scrollToQuiz = () => {
        document.getElementById('quiz-container').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return(
        <Card key={12} sx={{ minWidth: 275, height: '90vh', borderRadius: '0' }}>
            <aside className='slide no-divide-section final-page'>
                <div className='text-group animate__animated animate__fadeIn'>
                    <h1 className='title'>So...Cola or Pepsi?</h1>
                    <p className='body-text'>Food for thoughts, but before you are on your way to buy your favorite soda, scroll down and take a quiz to test the contents you learned today!</p>
                </div>
                <Button sx = {[
                    {   
                        background: '#da70d6',
                        color: '#fff',
                        border : '2px solid #222',
                        textTransform: 'capitalize',
                        padding: '5px 22px 5px 15px',
                        fontSize: 'clamp(1.4rem,1vw,1.8rem)',
                        marginTop: '30px',
                        width: '100%'
                    },
                    {
                        '&:hover' : {
                            background: '#f1f1f1',
                            color: '#222',
                            transition:'all .35s'
                        },
                        '&:hover > .test-down' : {
                            background: '#222',
                            transition:'background .35s'
                        }
                    }
                ]} variant="contained" className='cta-btn animate__animated animate__fadeIn' onClick={scrollToQuiz}>
                    <span className='test-down'></span>
                    Trivia Challenge
                </Button>
                <p className='body-text source'>Sources : <span>Statista, Business Insider, Wikipedia, Pepsi & Coca Cola Official Website, Documentary on Curiosity Streaming Platform & YouTube</span></p>
            </aside>
        </Card>
    )
}

export default Slide12;