import React from 'react'
import NavbarComp from './NavbarComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

function Main() {

    return (
        <div>
            <NavbarComp />
            <Switch>
                <Route path="/home" component={HomePage}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
            <Footer />
        </div>
    )
}


export default Main
