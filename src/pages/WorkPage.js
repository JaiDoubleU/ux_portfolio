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
            <div className="container">
                <Link to="/home" class="arrow-link">
                    <div class="separator"></div>  
                    <span class="text">Back Home</span>
                    <div class="separator"></div>
                </Link>
                <div className="row singleWork align-center">
                    <div className=" singleWork__text order-lg-first order-last offset-1 col-lg-5 col-10">
                        <a href={work.redirect} target="_blank" rel="noreferrer">
                            <h1 className="singleWork__name">{work.name}</h1>
                        </a>
                        <p className="singleWork__tagline mt-3">{work.tagline}</p>
                        <p className="singleWork__details mt-5 pt-2">{work.details}</p>
                    </div>
                    <div className="offset-1 col-lg-4 mb-5 col-10">
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
