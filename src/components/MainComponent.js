import React, { useRef } from 'react'
import NavbarComp from './NavbarComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import WorkPage from '../pages/WorkPage';
import CasePage from '../pages/CasePage';
import ScrollToTop from '../utils/scrollToTop';
import withTracker from '../withTracker';


function Main() {
    const footerRef = useRef()
    return (
        <div>
            <NavbarComp />
            <ScrollToTop />
            <Switch>
                <Route exact path="/home" component={() => (withTracker(<HomePage footerRef={footerRef} />))}></Route>
                <Route exact path="/about" component={withTracker(AboutPage)}></Route>
                <Route exact path="/work/:id" component={withTracker(WorkPage)} ></Route>
                <Route exact path="/case/:id" component={withTracker(CasePage)} ></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
            <Footer forwardRef={footerRef} />
        </div>
    )
}


export default Main
