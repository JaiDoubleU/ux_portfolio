import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import RouteChangeTracker from './RouteChangeTracker';
import ReactGA from 'react-ga'
import React,{useEffect} from 'react' ;


function App() {
    useEffect(() => {
        const TRACKING_ID = process.env.REACT_APP_GA_ID;
        ReactGA.initialize(TRACKING_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
        
    }, [])
    return (
        <BrowserRouter>
            <div >
                <Main />
                <RouteChangeTracker />
            </div>
        </BrowserRouter>
    );
}

export default App;
