import React, { useState } from 'react'
import CaseSubPoint from '../components/CaseSubPointComponent';
import Prototype from '../components/PrototypeComponent';
import { caseContent } from '../shared';
import { useParams } from 'react-router-dom';
import CaseTopic from '../components/CaseTopicHeading';
import '../css/casePage.css'

function CasePage() {
    const { id } = useParams();
    const [caseStudy, setCaseStudy] = useState(caseContent.filter(item => item.id === id)[0])


    return (
        <React.Fragment>

            <div className="case__hero-container" style={{ background: caseStudy.bg }}>
                <div className="container">
                    <div className="row case__hero">
                        <div className="col-lg-5 offset-1 col-10 ">
                            <h1 className='mb-5'>{caseStudy.name}</h1>
                            <p>{caseStudy.tagline}</p>
                        </div>
                        <div className="col-lg-5 offset-1 col-10 mt-lg-0 mt-5 text-center ">
                            <img className=' img-fluid' src={process.env.PUBLIC_URL + caseStudy.img} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div >

                {caseStudy.topics.map((topic, index) => {
                    return (
                        <React.Fragment key={index} >
                            {
                                ((caseStudy.topics.length - 1) === index &&
                                    <Prototype />)
                            }
                            <div style={{ background: topic.bg }}>
                                <div className='container case__problem case__topic pb-1'>
                                    <CaseTopic heading={topic.name} />
                                </div>
                                {topic.isHalf ?
                                    <CaseSubPoint isHalf={true} caseSub={caseStudy.contents.filter((content) => content.topic === topic.name)} />
                                    :
                                    <CaseSubPoint caseSub={caseStudy.contents.filter((content) => content.topic === topic.name)} />
                                }
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>

        </React.Fragment >
    )
}

export default CasePage
