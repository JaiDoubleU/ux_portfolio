import React, { useRef } from 'react'
import NavbarComp from './NavbarComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import WorkPage from '../pages/WorkPage';
import ScrollToTop from '../helpers/scrollToTop';

function Main() {
    const footerRef = useRef()
    return (
        <div>
            <NavbarComp />
            <ScrollToTop/>
                <Switch>
                    <Route exact path="/home" component={() => (<HomePage footerRef={footerRef} />)}></Route>
                    <Route exact path="/about" component={AboutPage}></Route>
                    <Route exact path="/work/:id" component={WorkPage} ></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
            <Footer forwardRef={footerRef} />
        </div>
    )
}


export default Main
