import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { works } from '../shared';
import { Link } from 'react-router-dom';

import '../css/workPage.css';
function WorkPage() {

    let { id } = useParams();
    const [work] = useState(works.filter(item => item.id === id)[0])

    return (
        <React.Fragment>           
            <div className="container fixed-header-padding">
                <div className="row align-center">
                    <div className="col-lg-10 offset-1 col-10 ">
                        <div className="col">
                            <Link to="/home" class="arrow-link">
                                <div class="separator"></div>  
                                <span class="text">Back </span>
                                <div class="separator"></div>
                            </Link>
                        </div>
                        <h1 className='heading mb-3'>{work.name}</h1>

                        <p className="singleWork__tagline mt-3">{work.tagline}</p>
                           {work.detailsTexts.map((text, index) => {
                                return (
                                    <p key={index} className='singleWork__details'>{text}</p>
                                )
                            })}
                    </div>
                    <div className="offset-1 col-lg-10 mb-5 col-10">
                        {work.asset ? <a href={work.redirect} target="_blank" rel="noreferrer">
                            {work.asset}
                        </a> : ""}
                    </div>
                </div>
                {work.completed ? "" : <div className="row">
                    <div className="offset-1 col-4">
                        
                    </div>
                </div>}

            </div>
        </React.Fragment>

    )
}

export default WorkPage
