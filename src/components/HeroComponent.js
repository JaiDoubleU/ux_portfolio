import React, { useRef } from 'react'
import '../css/homePage.css'

function Hero() {

    const myRef = useRef(null);
    return (
        <div className="hero-container container ">
            <div className="row">
                <div className=" col-10 d-flex align-items-center justify-content-center offset-1 text-center">
                    <img width="81px" height="95px" src={process.env.PUBLIC_URL + '/images/hello.png'} className="d-lg-block d-none" alt="" />
                    <div className="ml-lg-5">
                        <h1>Hi, I’m Akhilesh</h1>
                    </div>
                </div>
                <div className="col-10 offset-1 text-center" >
                    <p className='hero__description'>I am a <span className='hero__highlight'>Ux designer</span> , passionate about solving real life problems through design and am constantly looking to learn new things everyday.
                    </p>
                </div>
            </div>
            <div id='portfolio' ref={myRef} className="row heading offset-1 pt-3">
                <div className="col">
                    <div className="d-flex mb-5">
                        <p>Portfolio</p>
                        <span className="dash"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
