import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import RouteChangeTracker from './RouteChangeTracker';

// GOOGLE ANALYTICS

import ReactGA from 'react-ga'

const TRACKING_ID = "G-P328854YYE";
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
