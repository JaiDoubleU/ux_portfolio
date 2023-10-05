import React from 'react'

function CaseSubPoint({ caseSub, isHalf }) {

    return (
        <React.Fragment>
            <div >
                <div className="container ">
                    {caseSub.map((subpoint, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    isHalf ?
                                        <React.Fragment>
                                            <div className="row py-4">
                                                <div key={index} className="col-lg-6 offset-1 col-10">
                                                    <h2 className='subpoint__heading'>{subpoint.heading}</h2>

                                                    {subpoint.texts.map((text, index) => {
                                                        return (
                                                            <p key={index} className='subpoint__text'>{text}</p>
                                                        )
                                                    })}
                                                </div>
                                                <div className="col-lg-3 offset-1 d-none d-sm-block mt-lg-0 mt-0 subpoint__img" >
                                                    <img className='img-fluid' src={process.env.PUBLIC_URL + subpoint.img} alt="" />
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        :

                                        <div className={`row py-3 ${subpoint.bg ? 'text-left' : ''}`}> 
                                      
                                            <div key={index} className="offset-1 col-10">
                                                <h2 className='subpoint__heading'>{subpoint.heading}</h2>

                                                {subpoint.texts.map((text, index) => {
                                                    return (
                                                        <p key={index} className='subpoint__text'>{text}</p>
                                                    )
                                                })}
                                            </div>
                                            <div className="col-10 offset-1 subpoint__img">
                                                {subpoint.img ? <div className="align-center" >
                                                    <img id="1" className='img-fluid' src={process.env.PUBLIC_URL + subpoint.img} alt="" />
                                                </div>:
                                                    ""
                                                }
                                            </div>
                                        </div>
                                }
                                {
                                    subpoint.researches ?
                                        subpoint.researches.map((research, index) => {
                                            return (
                                                <div key={index} className="row research align-center">
                                                    <div className="offset-1 col-lg-6 col-10">
                                                        <p className='research__text'>{research.texts}</p>
                                                        <a href={research.link} target='_blank' className='research__source' rel="noreferrer">{research.source}</a>
                                                    </div>
                                                    <div className={`col-lg-3 d-none d-sm-block offset-1 col-10 mt-lg-0 text-center mt-5 subpoint__img ${index % 2 !== 0 ? 'order-lg-last' : 'order-lg-first'} `}>
                                                        <img className='  img-fluid' src={process.env.PUBLIC_URL + research.img} alt="img" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        null
                                }



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
