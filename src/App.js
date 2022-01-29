import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import RouteChangeTracker from './RouteChangeTracker';

// GOOGLE ANALYTICS

import ReactGA from 'react-ga'

const TRACKING_ID = "UA-12341234-1";
ReactGA.initialize(TRACKING_ID);


function App() {
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
