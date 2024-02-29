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
            <div className="container case-container">
                <div className="row mt-3">
                    <div className="col-lg-5 offset-1 col-10 ">                        
                                <Link to="/portfolio" class="arrow-link">
                                    <div class="separator"></div>  
                                    <span class="text">Back to Portfolio</span>
                                    <div class="separator"></div>
                                </Link>
                                <h1 className='subpoint__heading mb-5'>{caseStudy.name}</h1>
                                <p>{caseStudy.tagline}</p>                        
                    </div>
                    <div className="col-lg-5 offset-1 col-10   text-center ">
                        <img className='img-fluid' src={process.env.PUBLIC_URL + caseStudy.img} alt={'image of ' + caseStudy.name} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-center ">
                    <div className="col-10 offset-1 ">
                        <table className="caseStudyTable" >
                            <thead>
                                <tr>
                                    <th width="40%">Role</th>
                                    <th width="20%">Company</th>
                                    <th width="20%">Duration</th>
                                    <th width="20%">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="40%">{caseStudy.role}</td>
                                    <td width="20%">{caseStudy.company}</td>
                                    <td width="20%">{caseStudy.duration}</td>
                                    <td width="20%"><a href={caseStudy.linkUrl} target="_blank" className="project__link" activeClassName="selected" rel="noreferrer"> {caseStudy.linkName} </a></td>
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
                            <div class="container">
                                {
                                    ((caseStudy.topics.length - 1) === index && caseStudy.prototype &&
                                    <Prototype prototype={caseStudy.prototype} /> )
                                }
                                <div class="col" style={{ background: topic.bg }}>

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
        </React.Fragment >
    )
}

export default CasePage
