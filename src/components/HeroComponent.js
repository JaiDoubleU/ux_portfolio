import React from 'react'
import { currentWork, myInfo } from '../shared';

import '../css/homePage.css'

function Hero() {
    return (
        <div className="hero-container">
            <div className="row">
                <div className=" offset-1 col-lg-6 col-10  ">
                    <h2 className='page__heading'>Hi, I'm {myInfo.firstName}</h2>
                    <p className="page__subheading">
                       <p> I'm a <span className='hero__highlight'>Senior Product Designer</span>, with a passion for delighting users, one exceptional experience at a time.
                    </p>
                        {currentWork.map(work => (
                            <div key={work.arr} >
                                {work.arr.map((s, index) => (
                                    <p>{s}   </p>
                                ))}
                            </div>
                        ))}
                    </p>
                </div>
                <div className=" col-lg-5 col-10  ">
                    <div className="bg-transparent border-0 flex" >
                        <img height="300" src={process.env.PUBLIC_URL + '/images/profilePic.svg'} alt="about-img" />
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Hero
