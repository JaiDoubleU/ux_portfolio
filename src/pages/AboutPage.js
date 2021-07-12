import React from 'react'
import Skills from '../components/SkillsComponent';

import '../css/aboutPage.css'

function AboutPage() {
    return (
        <div>
            <div className="container-fluid about-container">
                <div className="row">
                    <div className="about__img offset-1 offset-lg-0 col-lg-5 col-10 order-lg-last">
                        <img className="img-fluid mb-5" src={process.env.PUBLIC_URL + '/images/about-img.png'} alt="about-img" />
                    </div>
                    <div className="about__text offset-1 col-lg-5 col-10 ">
                        <h2 className='about__heading mb-5'>More About Me</h2>
                        <p className='mb-5'>My name is Akhilesh Saurabh and I love creating new things. I'm constantly learning new things and trying to improve my skills and grow as a better human being.</p>
                        <p>I am a self-taught UX designer and have learned a lot about UX/UI through books, blogs, critically studying other case studies, and applying these learnings to my projects.</p>
                    </div>
                </div>
                <div className="row about__content">
                    {/* FOR EXPERIENCE COMPONENT */}
                    <div className="offset-1 col-lg-5 col-10"></div>
                    {/* FOR EXPERIENCE COMPONENT */}
                    <div className="offset-1 col-lg-4 col-10">
                        <Skills/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
