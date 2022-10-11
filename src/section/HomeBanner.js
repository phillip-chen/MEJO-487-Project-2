import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Home = () => {
    
    let scrollToSlides = () => {
        document.getElementById('slide-container').scrollIntoView({
            behavior: 'smooth'
        });
    }

    let scrollToQuiz = () => {
        document.getElementById('quiz-container').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <section className="home-banner animate__animated animate__fadeIn animate__slow">
            <Card id='title-card' className='animate__animated animate__fadeInDown animate__delay-1s'>
                <CardContent>
                <h1 id='home-title' className='title'>
                    The Great <span className='coca-text'>Cola</span> <span className='pepsi-text'>War</span>
                </h1>
                <p className='body-text home'>Ever wonder the history & the hidden facts of the 2 biggest soda brands? Scroll down to learn more and finish up with a trivia to test your knowledge!</p>
                </CardContent>
            </Card>
            <div className='cta-group animate__animated animate__fadeIn animate__delay-1s'>
                <Button sx = {[
                    {   
                        background: '#da70d6',
                        color: '#fff',
                        border : '2px solid #222',
                        textTransform: 'capitalize',
                        padding: '5px 22px 5px 15px',
                        fontSize: 'clamp(1.4rem,1vw,1.8rem)'
                    },
                    {
                        '&:hover' : {
                            background: '#f1f1f1',
                            color: '#222',
                            transition:'all .35s'
                        },
                        '&:hover > .arrow-down' : {
                            background: '#222',
                            transition:'background .35s'
                        }
                    }
                ]} variant="contained" className='cta-btn' onClick={scrollToSlides}>
                    <span className='arrow-down sub-title'></span>
                    Learn the Story
                </Button>
                <Button sx = {[
                    {   
                        background: '#da70d6',
                        color: '#fff',
                        border : '2px solid #222',
                        textTransform: 'capitalize',
                        padding: '5px 22px 5px 15px',
                        fontSize: 'clamp(1.4rem,1vw,1.8rem)'
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
                ]} variant="contained" className='cta-btn' onClick={scrollToQuiz}>
                    <span className='test-down'></span>
                    Trivia Challenge
                </Button>
            </div>
        </section>
    )
}

export default Home;