import React, { useEffect } from 'react'
import CaseTopic from '../components/CaseTopicHeading';

function CaseSubPoint({ caseSub, isColor }) {

    return (
        <React.Fragment>
            <div className={`pb-1 ${isColor ? 'topic__color' : ''} `}>
                <div className="container case__topic ">
                    <CaseTopic heading={caseSub[0].topic} />
                    {caseSub.map((subpoint, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='row subpoint-container'>
                                    <div className="offset-1 col-10">
                                        <h2 className='subpoint__heading'>{subpoint.heading}</h2>
                                    </div>
                                    <div key={index} className="offset-1 col-10">
                                        {subpoint.texts.map((text, index) => {
                                            return (
                                                <p key={index} className='subpoint__text'>{text}</p>
                                            )
                                        })}
                                    </div>
                                    <div className="col-10 offset-1">
                                        <img className='img-fluid subpoint__img' src={process.env.PUBLIC_URL + '/images/Snap.png'} alt="" />
                                    </div>
                                </div>

                            </React.Fragment>
                        )
                    })
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default CaseSubPoint
