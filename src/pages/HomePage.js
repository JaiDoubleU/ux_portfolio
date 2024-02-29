import React, { useEffect, useRef } from 'react'

import Hero from '../components/HeroComponent';
import SinglePortfolio from '../components/SinglePortfolioComponent';
import { myInfo, portfolios, works, principles } from '../shared';
import { changeFooter } from '../utils/changeFooter';
import { Link } from 'react-router-dom';
import '../css/homePage.css'


function HomePage({ footerRef }) {
    const myRef = useRef(null);

    // useEffect(() => {
    //     changeFooter(footerRef);
    //     return () => {
    //         changeFooter(footerRef)
    //     }
    // }, [footerRef])

    return (
        <div className='container'>
            <Hero />           

            <div className="row">
                <div className=" offset-1 col-lg-5 col-10  ">
                    <div class="mb-4">
                        <h4>Personal Design Principles</h4>
                        <div>In my years as a designer, I've consciously and unconsciously developed some design principles that guide my behavior.</div>
                    </div>
                </div>
                
                <div class="principles">
                    <ul class="row">
                        {principles.map((principle, index) => {
                            return (
                                <li class="col align-top p-2 m-1 radius border border-radius-lg">
                                    
                                        <img height="125" width="125" src={principle.icon} alt="principle icon"/>
                                        <p class="title">{principle.text} </p>
                                        <p class="subtitle">{principle.subtext} </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage
