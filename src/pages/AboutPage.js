import React from 'react'
import Skills from '../components/SkillsComponent';

import '../css/aboutPage.css'

function AboutPage() {
    return (
        <div className="container about-container ">
            <div className="row">
                <div className="about__img offset-1 offset-lg-0 col-lg-5 col-10 order-lg-last p-5">
                    <img className="img-fluid p-5" src={process.env.PUBLIC_URL + '/images/about-img.svg'} alt="about-img" />
                </div>
                <div className="about__text offset-1 col-lg-5 col-10 ">
                    <h2 className='about__heading mb-5'> About Me</h2>
                    <p className='mb-3 about__text__p'>I'm Jason. I am a full-stack Product Designer, husband, and dad based in Calgary, Alberta, Canada. </p>
                    <p className="about__text__p">I'm a full stack User Experience Designer with over two decades of hands-on experience helping companies, from Fortune 500 to small start-ups, design amazing products that their customers love.</p>
                </div>
            </div>
            <div className="row ">
                
                <div className="offset-1 col-lg-10 col-10 about__section">
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default AboutPage
