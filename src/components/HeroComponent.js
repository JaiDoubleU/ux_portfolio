import React, { useRef } from 'react'
import '../css/homePage.css'

function Hero() {

    const myRef = useRef(null);
    return (
        <div className="hero-container container">
            <div className="row">
                <div className=" col-10 d-flex align-items-center justify-content-center offset-1 text-center">
                    <div className="col-5">
                        <h1>Hi, I'm Jason</h1>
                        <p className='hero__description'>
                            I'm a <span className='hero__highlight'>Senior Product Designer</span> with a passion for delighting users, one exceptional experience at a time.
                        </p>
                    </div>
                    <div className="bg-transparent border-0  flex-fill" >
                        <img className="img-fluid p-1" src={process.env.PUBLIC_URL + '/images/profilePic.png'} alt="about-img" />
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Hero
