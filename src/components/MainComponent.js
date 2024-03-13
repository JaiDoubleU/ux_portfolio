import React, { useRef } from 'react'
import NavbarComp from './NavbarComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import WorkPage from '../pages/WorkPage';
import CasePage from '../pages/CasePage';
import ScrollToTop from '../utils/scrollToTop';


function Main() {
    const footerRef = useRef()
    return (
        <div className="container">
            <NavbarComp />
            <ScrollToTop />
            <Switch>
                <Route exact path="/home" component={() => (<HomePage footerRef={footerRef} />)}></Route>
                 <Route exact path="/portfolio" component={PortfolioPage}></Route>
                <Route exact path="/about" component={AboutPage}></Route>
                <Route exact path="/work/:id" component={WorkPage} ></Route>
                <Route exact path="/case/:id" component={CasePage} ></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
            <Footer forwardRef={footerRef} />
        </div>
    )
}


export default Main
