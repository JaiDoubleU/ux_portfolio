import React, { useState } from 'react'
import CaseSubPoint from '../components/CaseSubPointComponent';
import { caseContent } from '../shared';
import { useParams } from 'react-router-dom';
import CaseTopic from '../components/CaseTopicHeading';
import '../css/casePage.css'

function CasePage() {
    const { id } = useParams();
    const [caseStudy, setCaseStudy] = useState(caseContent.filter(item => item.id === id)[0])


    return (
        <React.Fragment>
            
            <div className="case__hero-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-1 col-10 case__hero">
                            <h1 className='mb-5'>{caseStudy.name}</h1>
                            <p>{caseStudy.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur itaque ratione magnam explicabo debitis dolor, quas quaerat pariatur voluptates reprehenderit laboriosam odit perspiciatis optio sit sed deleniti rerum possimus fugit?

                    </div>
                </div>
            </div>
            <div className="container case__problem case__topic pb-1">
                <CaseTopic heading='problem' />
                {caseStudy.contents.filter((content) => content.topic === 'Problem')
                    .map((problem, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='row subpoint-container'>
                                    <div className="offset-1 col-10">
                                        <h2 className='subpoint__heading'>{problem.heading}</h2>
                                    </div>
                                    <div key={index} className="col-lg-6 offset-1 col-10">
                                        {problem.texts.map((text, index) => {
                                            return (
                                                <p key={index} className='subpoint__text'>{text}</p>
                                            )
                                        })}
                                    </div>
                                    <div className="col-lg-3 offset-1 d-none d-sm-block text-center mt-lg-0 mt-5" >
                                        <img className=' img-fluid' src={process.env.PUBLIC_URL + '/images/Snap.png'} alt="" />
                                    </div>
                                </div>

                                {problem.researches.map((research, index) => {
                                    return (
                                        <div key={index} className="row research">
                                            <div className="offset-1 col-lg-6 col-10">
                                                <p className='research__text'>{research.texts}</p>
                                                <a href={research.link} target='_blank' className='research__source' rel="noreferrer">{research.source}</a>
                                            </div>
                                            <div className={`col-lg-3 d-none d-sm-block offset-1 col-10 mt-lg-0 text-center mt-5 subpoint__img ${index % 2 !== 0 ? 'order-lg-last' : 'order-lg-first'} `}>
                                                <img className='  img-fluid' src={process.env.PUBLIC_URL + research.img} alt="img" />
                                            </div>
                                        </div>
                                    )
                                })}

                            </React.Fragment>
                        )
                    })
                }
            </div>
            <CaseSubPoint caseSub={caseStudy.contents.filter((content) => content.topic === 'Research')}
                isColor={true} />
            <CaseSubPoint caseSub={caseStudy.contents.filter((content) => content.topic === 'Ideation')} />
            <CaseSubPoint caseSub={caseStudy.contents.filter((content) => content.topic === 'Solution')}
                isColor={true} />
            <CaseSubPoint caseSub={caseStudy.contents.filter((content) => content.topic === 'Features')}
                isFeature={true} />
            <CaseSubPoint caseSub={caseStudy.contents.filter((content) => content.topic === 'Results and takeaways')}
                isColor={true} />
        </React.Fragment >
    )
}

export default CasePage
