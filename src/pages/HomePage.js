import React, { useEffect, useRef } from 'react'

import Hero from '../components/HeroComponent';
import SinglePortfolio from '../components/SinglePortfolioComponent';
import { portfolios, works } from '../shared';
import { changeFooter } from '../utils/changeFooter';
import { Link } from 'react-router-dom';
import '../css/homePage.css'


function HomePage({ footerRef }) {
    const myRef = useRef(null);

    useEffect(() => {
        changeFooter(footerRef);
        return () => {
            changeFooter(footerRef)
        }
    }, [footerRef])

    return (
        <div className='home-container'>
            <Hero />

            <div class="container">
                <div class="row">
                    <div class="col offset-1">
                        <div class="row heading fixed-header-padding" id="portfolio" ref={myRef} >
                            <div class="col">
                                <div class="d-flex mb-4">
                                    <p>Portfolio</p>
                                    <span class="dash"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {portfolios.map((portfolio, index) => {
                return (
                    <Link to={`/case/${portfolio.id}`} key={portfolio.id}>
                        <SinglePortfolio index={index} portfolio={portfolio} key={portfolio.id} />
                    </Link>
                )
            })}

            <div class="container ">
                <div class="row">
                    <div class="col offset-1">
                        <div id="Other" class="row heading ">
                            <div class="col">
                                <div class="d-flex my-5">
                                    <p>Other Work</p>
                                    <span class="dash"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {works.map((work, index) => {
                return (
                    <Link to={`/case/${work.id}`} key={work.id}>
                        <SinglePortfolio index={index} work={work}  key={work.id} />
                    </Link>
                )
            })}

        </div>

    )
}

export default HomePage
