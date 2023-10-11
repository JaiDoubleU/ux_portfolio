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
            <div className="container fixed-header-padding">
                <div className="row align-center">
                    <div className="col-lg-4 offset-1 col-10 ">
                        <div className="col">
                            <Link to="/home" class="arrow-link">
                                <div class="separator"></div>  
                                <span class="text">Back Home</span>
                                <div class="separator"></div>
                            </Link>
                        </div>
                        <h1 className='subpoint__heading mb-5'>{caseStudy.name}</h1>
                        <p>{caseStudy.tagline}</p>
                    </div>
                    <div className="col-lg-6 offset-1 col-10 mt-lg-0 mt-5 text-center ">
                        <img className='img-fluid' width="100%"  src={process.env.PUBLIC_URL + caseStudy.img} alt={'image of ' + caseStudy.name} />
                    </div>
                </div>
            </div>

            <div className="container table-container">
                <div className="row align-center ">
                    <div className="col-10 offset-1 ">
                        <table className="caseStudyTable" >
                            <thead>
                                <tr>
                                    <th width="60%">Role</th>
                                    <th width="20%">Company</th>
                                    <th width="20%">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="60%">Lead User Experience Designer</td>
                                    <td width="20%">Enverus</td>
                                    <td width="20%">4 months</td>
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
                            <div>
                                {
                                    ((caseStudy.topics.length - 1) === index && caseStudy.prototype &&
                                    <Prototype prototype={caseStudy.prototype} /> )
                                }
                                <div style={{ background: topic.bg }}>

                                    <div className='container case__topic'>
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
