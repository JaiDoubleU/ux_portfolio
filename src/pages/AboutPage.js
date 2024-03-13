import React from 'react'
import Skills from '../components/SkillsComponent';
import { myInfo } from '../shared';

import '../css/aboutPage.css'

function AboutPage() {
    return (
        <div className=" ">
            
            <div className="row">
                <div className="about__img offset-1 offset-lg-0 col-lg-5 col-10 order-lg-last p-5">
                    <img height="300"  src={process.env.PUBLIC_URL + '/images/about-img.svg'} alt="about-img" />
                </div>
                <div className="about__text offset-1 col-lg-5 col-10 ">
                    <h2 className='page__heading'>{myInfo.aboutPageTitle}</h2>
                    <p className='page__subheading'>{myInfo.aboutIntroText} </p>
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
