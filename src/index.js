import React from 'react';
import ReactDOM from 'react-dom/client';
import Slide from './section/Slide';
import HomeBanner from './section/HomeBanner'
import Quiz from './section/Quiz';
// style
import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HomeBanner />
    <Slide />
    <Quiz />
  </>
);

