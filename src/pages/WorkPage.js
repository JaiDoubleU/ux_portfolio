import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { changeFooter } from '../helpers/changeFooter';
import { works } from '../shared';

import '../css/workPage.css';
function WorkPage({ footerRef }) {

    let { id } = useParams();
    const [work, setwork] = useState(works.filter(item => item.id === id)[0])

    useEffect(() => {
        window.scrollTo(0, 0);
        changeFooter(footerRef);
        return () => {
            changeFooter(footerRef)
        }
    }, [footerRef])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row singleWork">
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
                    <div className="col offset-1 col-4">
                        <h2 className="text-center" >coming soon</h2>
                    </div>
                </div>}

            </div>
        </React.Fragment>

    )
}

export default WorkPage
