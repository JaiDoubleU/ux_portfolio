import React, { useState } from 'react'
import CaseSubPoint from '../components/CaseSubPointComponent';
import Prototype from '../components/PrototypeComponent';
import { caseContent } from '../shared';
import { useParams } from 'react-router-dom';
import CaseTopic from '../components/CaseTopicHeading';
import { Link } from 'react-router-dom';

import '../css/casePage.css'

function CasePage() {
    const { id } = useParams();
    const [caseStudy] = useState(caseContent.filter(item => item.id === id)[0])

    return (
        <React.Fragment>
                <div className="row mt-3">
                    <div className="col-lg-5 offset-1 col-10 ">                        
                                <Link to="/portfolio" className="arrow-link">
                                    <div className="separator"></div>  
                                    <span className="text">Back to Portfolio</span>
                                    <div className="separator"></div>
                                </Link>
                                <h3 className='subpoint__heading mb-5'>{caseStudy.name}</h3>
                                <p>{caseStudy.tagline}</p>                        
                    </div>
                    <div className="col-lg-5 offset-1 col-10   text-center ">
                        <img className='hover_img project__img' src={process.env.PUBLIC_URL  + caseStudy.img} alt={'image of ' + caseStudy.name} />
                    </div>
                </div>

                <div className="row align-center ">
                    <div className="col-10 offset-1 ">
                        <div className="table-responsive">
                            <table className="caseStudyTable" >
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Duration</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{caseStudy.company}</td>
                                        <td>{caseStudy.duration}</td>
                                        <td><a href={caseStudy.linkUrl} target="_blank" className="project__link"  rel="noreferrer"> {caseStudy.linkName} </a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


             {caseStudy.topics.map((topic, index) => {
                return (
                    <React.Fragment key={index} >
                        {caseStudy.contents.filter((content) => content.topic === topic.name).length > 0 ? 
                            <div className="row">
                                {
                                    ((caseStudy.topics.length - 1) === index && caseStudy.prototype &&
                                    <Prototype prototype={caseStudy.prototype} /> )
                                }
                                <div className="col" style={{ background: topic.bg }}>

                                    <div className='case__topic'>
                                        <CaseTopic heading={topic.name} />
                                    </div>
                                    {topic.isHalf ?
                                        <CaseSubPoint isHalf={true} caseSub={caseStudy.contents.filter((content) => content.topic === topic.name)} />
                                        :
                                        <CaseSubPoint caseSub={caseStudy.contents.filter((content) => content.topic === topic.name)} />
                                    }
                                </div>
                            </div>
                            :
                            <div></div>
                        }

                       
                    </React.Fragment>
                )
             })}
                <div className="row">
                    <div className='col-lg-5 offset-1 col-10 '>
                        <Link to="/portfolio" className="arrow-link">
                            <div className="separator"></div>  
                            <span className="text">Back to Portfolio</span>
                            <div className="separator"></div>
                        </Link>
                    </div>
                </div>
        </React.Fragment >
    )
}

export default CasePage
