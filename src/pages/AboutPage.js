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
                        <h2 className='about__heading mb-5'>More About Me</h2>
                        <p className='mb-3 about__text__p'>My name is Akhilesh Saurabh, I love creating new things. I'm constantly learning and trying to improve my skills and grow as a better human being.</p>
                        <p className="about__text__p">I am a self-taught UX designer and have learned a lot about UX/UI through books, blogs, critically studying other case studies, and applying these learnings to my projects.</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="offset-1 col-lg-10 col-10 mb-5">
                        <p className="about__text__p">I am a self-taught UX designer and have learned a lot about UX/UI through books, blogs, critically studying other case studies, and applying these learnings to my projects.</p>
                    </div>
                    <div className="offset-1 col-lg-10 col-10 about__section">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
