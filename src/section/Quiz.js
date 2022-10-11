import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import QuizBody from '../component/QuizBody'
import quizData from './quizData.js';
import '../style/quiz.css';

// Initiate a quiz tracker
let start = false;



const Quiz = () => {
    return (
        <section id='quiz-container'>
            <CssBaseline />
            <Card id='quiz-title-card'>
                <CardContent>
                    <h1 id='quiz-title'>Test Your Soda Knowledge</h1>
                </CardContent>
            </Card>
            <Card className='quiz-card' sx={{ width: '80vw', border:'2px solid #222', height:'70vh' }}>
                <CardContent className='card-content-container'>
                    <QuizBody data = {quizData} />
                </CardContent>
            </Card>
        </section>
    );
}

export default Quiz;