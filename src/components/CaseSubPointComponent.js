import React from 'react'

function CaseSubPoint({ caseSub, isHalf }) {

    return (
        <React.Fragment>
            {caseSub.length > 0 ?              
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
                                                        <img className="img-fluid" src={process.env.PUBLIC_URL + subpoint.img} alt="" />
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
                                                    <div key={index} className="row research align-center py-3">
                                                        <div className="offset-1 col-8">
                                                            <blockquote><span className='research__text'>{research.texts}</span></blockquote>                                                            
                                                            <a href={research.link} target='_blank' className='research__source' rel="noreferrer"> ~ {research.source}</a>
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
                :
                <div></div>
            }
        </React.Fragment>
    )
}

export default CaseSubPoint
