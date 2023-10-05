import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import RouteChangeTracker from './RouteChangeTracker';
import ReactGA from 'react-ga'
import React, { useEffect } from 'react';

const TRACKING_ID = process.env.REACT_APP_GA_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return (
        <BrowserRouter>
            <Main />
            <RouteChangeTracker />
        </BrowserRouter>
    );
}

export default App;
