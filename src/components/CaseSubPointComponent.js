import React, { useEffect } from 'react'
import CaseTopic from '../components/CaseTopicHeading';

function CaseSubPoint({ caseSub }) {

    return (
        <React.Fragment>
            <div className={`pb-5`} >
                <div className="container">
                    {caseSub.map((subpoint, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className={`row subpoint-container ${subpoint.bg ? 'text-center' : ''}`}>
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
                                    <div className="col-10 offset-1 subpoint__img">
                                        {subpoint.bg ? <div className="alignfull" style={{ background: `${subpoint.bg}` }}>
                                            <img className='img-fluid' src={process.env.PUBLIC_URL + subpoint.img} alt="" />
                                        </div> :
                                            <img className='img-fluid ' src={process.env.PUBLIC_URL + subpoint.img} alt="" />

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
