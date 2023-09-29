import React from 'react'
import Skills from '../components/SkillsComponent';

import '../css/aboutPage.css'

function AboutPage() {
    return (
        <div>
            <div className="container  about-container">
                <div className="row">
                    <div className="about__img offset-1 offset-lg-0 col-lg-5 col-10 order-lg-last">
                        <img className="img-fluid mb-5" src={process.env.PUBLIC_URL + '/images/about-img.png'} alt="about-img" />
                    </div>
                    <div className="about__text offset-1 col-lg-5 col-10 ">
                        <h2 className='about__heading mb-5'> About Me</h2>
                    <p className='mb-3 about__text__p'>I'm Jason. I am a full stack user experience designer, husband, and Dad based in Calgary, Alberta, Canada. </p>
                     <p className="about__text__p">I have decades of hands-on real world experience in user experience, product design, user research, usability testing, and design systems. I have also worked with a wide range of companies from Fortune 500 to small start-ups.</p>
               
                    </div>
                </div>
                <div className="row ">
                 
                    <div className="offset-1 col-lg-10 col-10 about__section">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
