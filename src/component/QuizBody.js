import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const QuizBody = (data) => {

    // Passing a callback for every state the QuizBody is tracking, so it only runs once of the initial state, 
    // and only changed when the setState function is been called
    const [init, startQuiz] = useState(()=>{
        return false;
    });
    const [ans, hasAnswered] = useState(()=>{
        return false
    });
    const [result, ansFeedback] = useState(() => {
        return ''
    });
    const [finish, quizComplete] = useState(() => {
        return false
    });
    const [q, qNumIncrement] = useState(() => {
        return 0
    });
    const [correctNum, calculateTrue] = useState(() => {
        return 0
    });
    const [animation, setAnimation] = useState(() => {
        return 'animate__fadeIn'
    });
    const [ansMotion, setAnsMotion] = useState(() => {
        return ''
    });

    // Define a shuffule function to shuffule quiz answers everytime users reset the quiz.
    let shuffle = (data) => {
        let currentIndex = data.length,  randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [data[currentIndex], data[randomIndex]] = [
            data[randomIndex], data[currentIndex]];
        }
    
        return data;
    }
    

    let render = () => {
        startQuiz(prevState => prevState = true);
    }
    // function when user click the answer button, it'll show if the result is correct or incorrect.
    let ansResult = (e) => {
        
        hasAnswered(prevState => prevState = true);

        if(result === ''){
            if(q+1 === data.data.questionArr.length){
                // If it's the last question, always return Correct Ans
                ansFeedback(prevState => prevState = true);
                calculateTrue(prevState => prevState + 1);
                e.target.classList.add('correct-ans');
                return;
            }
            // In Safari, normal text comparison won't work here, so add a .trim() to remove all line breaks & spaces to fix it
            if(e.target.innerText.trim().toLowerCase() === data.data.questionArr[q].trueAns.trim().toLowerCase()){
                // Correct Ans
                ansFeedback(prevState => prevState = true);
                calculateTrue(prevState => prevState + 1);
                e.target.classList.add('correct-ans');
            }else{
                // Wrong Ans
                ansFeedback(prevState => prevState = false);
                e.target.classList.add('incorrect-ans');
            }   
        }
    }

    // function when user click the "next question" button
    let nextQ = () => {

        // Clear the correct / incorrect settings
        if(document.getElementsByClassName('correct-ans').length>0){

            document.getElementsByClassName('correct-ans')[0].classList.remove('correct-ans');

        }else if(document.getElementsByClassName('incorrect-ans').length>0){

            document.getElementsByClassName('incorrect-ans')[0].classList.remove('incorrect-ans')
        }

        if(q+1 === data.data.questionArr.length){
            quizComplete(prevState => prevState = true);
            setAnimation(prev => prev = 'animate__fadeIn');
            setAnsMotion(prev => prev = 'animate__fadeIn');
        }else{
            hasAnswered(prevState => prevState = false);
            ansFeedback(prevState => prevState = '');
            qNumIncrement (prevState => prevState + 1);
            setAnimation(prev => prev = 'animate__fadeIn');
        }

    }
     // function when user click the "try again" button to start the quiz again
    let reset = () => {
        startQuiz(prevState => prevState = false);
        qNumIncrement(prevState => prevState = 0);
        ansFeedback(prev => prev = '');
        calculateTrue(prev => prev = 0);
        setAnsMotion(prev => prev = '');
        setAnimation(prev => prev = '');
        quizComplete(prevState => prevState = false);
        hasAnswered(prevState => prevState = false);
    }
     // function when user click "study again" button, it takes users back to the slides section
    let backUp = () => {
        document.getElementById('slide-container').scrollIntoView({
            behavior: 'smooth'
        });
    }

    if(!init){

        // Suffle the answer sequence every time users start over
        data.data.questionArr.map(q => q.answerOptions = shuffle(q.answerOptions));
        
        // Initial Quiz UI
        return (
            <>
                <h2 className='quiz-sub-title'>Cola War Trivia</h2>
                <span className='quiz-body-text init'>
                Let’s test your soda knowledge and determine your favorite summer drink
                </span>
                <Button sx={[{
                                border: '2px solid #222',
                                background: '#fff',
                                color: '#333',
                                fontSize: 'clamp(.8rem,3vw,1rem)'
                            },{
                                '&:hover' : {
                                    background: '#f1f1f1',
                                    border: '2px solid #222'
                                }
                            }]} variant="contained" className='cta-btn' onClick={render}>
                    Start
                </Button>
            </>
        );
    }else{
        // Entering the Quiz Questions

        // If user finish the quiz or not?
        if(!finish){
            return(
                <div className='quiz-content-box animate__animated animate__fadeIn'>
                    <span className='quiz-body-text underline-text'>{q+1 + ' / ' + data.data.questionArr.length + ' Questions'}</span>
                    <p className={'quiz-body-text animate__animated '}>{data.data.questionArr[q].question}</p>
                    {/* Answer Feedback */}
                    {result===''?(<span className='feedbackSection'></span>):result?(
                        <>
                            <span className='feedbackSection ansResult correct animate__animated animate__fadeIn'>
                                {data.data.questionArr[q].trueFeedback}
                            </span>
                            
                        </>):(
                        <>
                            <span className='feedbackSection ansResult incorrect animate__animated animate__fadeIn'>
                                {data.data.questionArr[q].falseFeedback}
                            </span>
                        </>)
                    }
                    {/* Quiz Answers Group */}
                    <div className={'answer-group animate__animated ' + ansMotion}>
                        {data.data.questionArr[q].answerOptions.map((ansText,index)=>{
                            return <Button key={index} sx={[{
                                border: '2px solid #222',
                                color: '#333',
                                textTransform: 'capitalize',
                                fontSize: 'clamp(.8rem,3vw,1rem)'
                            },{
                                '&:hover' : {
                                    background: '#f1f1f1',
                                    border: '2px solid #222'
                                },
                                '&:disabled' : {
                                    border: '2px solid #888',
                                    color: '#888'
                                }
                            }]} variant='outlined' className={'ans-btn'} onClick={ansResult}>{ansText}</Button>
                        })}
                    </div>

                    {/* Show Next Button or Not */}
                    <Button sx={[{
                                border: '2px solid #222',
                                color: '#333',
                                marginTop: '30px',
                                background: '#fff',
                                textTransform: 'capitalize',
                                fontSize: 'clamp(.8rem,3vw,1rem)'
                            },{
                                '&:hover' : {
                                    background: '#f1f1f1',
                                    border: '2px solid #222'
                                },
                                '&:disabled' : {
                                    border: '2px solid #888',
                                    color: '#888'
                                }
                            }]} variant='contained' className='next-q-btn' onClick={nextQ} disabled = {!ans}>{q+1 === data.data.questionArr.length?'View Result':'Next Question'}</Button>
                </div>
            );
        }else{
            return (
                <div className={'animate__animated final-result animate__fadeInUp'}>
                    <h2 className='quiz-sub-title'>Your Final Score is : <span className='underline-text'>{String(Math.floor(correctNum/data.data.questionArr.length*100))+"%"}</span></h2>
                    <p className='body-text result'>{correctNum/data.data.questionArr.length>0.3 ? correctNum/data.data.questionArr.length>0.5? correctNum/data.data.questionArr.length>0.7? 'You Rock!' : 'Great Work!' : 'Nice! You are so closed!' : 'Try again! practice makes perfect!'}</p>
                    <div className='quiz-result-btn-group'>
                    <Button sx={[{
                                border: '2px solid #222',
                                color: '#333',
                                marginTop: '15px',
                                background: '#fff',
                                textTransform: 'capitalize',
                                fontSize: 'clamp(.8rem,3vw,1rem)',
                                marginRight: '20px'
                            },{
                                '&:hover' : {
                                    background: '#f1f1f1',
                                    border: '2px solid #222'
                                },
                                '&:disabled' : {
                                    border: '2px solid #888',
                                    color: '#888'
                                }
                            }]} variant='contained' className='reset-btn' onClick={reset}>Try Again</Button>
                            <Button sx={[{
                                border: '2px solid #222',
                                color: '#333',
                                marginTop: '15px',
                                background: '#fff',
                                textTransform: 'capitalize',
                                fontSize: 'clamp(.8rem,3vw,1rem)'
                            },{
                                '&:hover' : {
                                    background: '#f1f1f1',
                                    border: '2px solid #222'
                                },
                                '&:disabled' : {
                                    border: '2px solid #888',
                                    color: '#888'
                                }
                            }]} variant='contained' className='back-to-lesseon--btn' onClick={backUp} >Study Again</Button>
                    </div>
                    <p className='body-text'>Here are some more additional resources if you are interested to learn more...</p>
                    <div className='link-group'>
                        <a className='small-text' href='https://www.youtube.com/watch?v=whpEulMPtLk' target='_blank'>Video: How Pepsi Built It's Empire</a>
                        <a className='small-text' href='https://www.youtube.com/watch?v=ELu8y6eK-0g' target='_blank'>Video: The Disturbing History of Coca-Cola</a>
                        <a className='small-text' href='https://contentwriters.com/blog/coke-vs-pepsi-the-story-behind-the-biggest-rivalry-in-history/' target='_blank'>Coke vs. Pepsi: The Story Behind the Biggest Marketing Rivalry in History</a>
                    </div>                    
                </div>
            );
        }
    }
}

export default QuizBody;