import React, { useEffect } from 'react'
import CaseTopic from '../components/CaseTopicHeading';

function CaseSubPoint({ caseSub, isColor, isFeature }) {

    return (
        <React.Fragment>
            <div className={`pb-1 ${isColor ? 'topic__color' : ''} `}>
                <div className="container case__topic ">
                    <CaseTopic heading={caseSub[0].topic} />
                    {caseSub.map((subpoint, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className={`row subpoint-container ${isFeature ? 'text-center' : ''}`}>
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
                                    <div className="col-10 offset-1 subpoint__img  ">
                                        {isFeature ? <div class="alignfull" style={{background: `${subpoint.bg}`}}>
                                            <img className='img-fluid'  src={process.env.PUBLIC_URL + '/images/Snap.png'} alt="" />
                                        </div> :
                                            <img className='img-fluid ' src={process.env.PUBLIC_URL + '/images/Snap.png'} alt="" />

                                        }
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
