import React from 'react'

import Hero from '../components/HeroComponent';
import { principles } from '../shared';
import '../css/homePage.css'


function HomePage({ footerRef }) {
    return (
        <div className='container'>
            <Hero />           

            <div className="row">
                <div className=" offset-1 col-lg-5 col-10  ">
                    <div className="mb-4">
                        <h4>Personal Design Principles</h4>
                        <div>In my years as a designer, I've consciously and unconsciously developed some design principles that guide my behavior.</div>
                    </div>
                </div>
                
                <div className="principles">
                    <ul className="row">
                        {principles.map((principle, index) => {
                            return (
                                <li className="col align-top p-2 m-1 radius border border-radius-lg">
                                    
                                        <img height="125" width="125" src={principle.icon} alt="principle icon"/>
                                        <p className="title">{principle.text} </p>
                                        <p className="subtitle">{principle.subtext} </p>
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
