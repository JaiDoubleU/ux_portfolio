import React from 'react'

function CaseSubPoint({ caseSub, isHalf }) {

    return (
        <React.Fragment>
            {caseSub.length > 0 ?              
                <div>
                    {caseSub.map((subpoint, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    isHalf ?
                                        <React.Fragment>
                                            <div className="row">
                                                <div key={index} className="col-lg-5  offset-1 col-10">
                                                    <h2 className='heading'>{subpoint.heading}</h2>

                                                    {subpoint.texts.map((text, index) => {
                                                        return (
                                                            <p key={index} className='subpoint__text'>{text}</p>
                                                        )
                                                    })}
                                                </div>
                                                <div className="col-lg-5 offset-1 d-none d-sm-block mt-lg-0 mt-0 subpoint__img" >
                                                    <img className="img-fluid img-hover_img " src={subpoint.img} alt="" />
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    :
                                        <React.Fragment>
                                            <div className={`row ${subpoint.bg ? 'text-left' : ''}`}>                                     
                                                <div key={index} className="offset-1 col-10">
                                                    <p className='heading'>{subpoint.heading}</p>

                                                    {subpoint.texts.map((text, index) => {
                                                        return (
                                                            <p key={index} className='subpoint__text'>{text}</p>
                                                        )
                                                    })}

                                                    <ul>
                                                    {
                                                        subpoint.links ?
                                                            subpoint.links.map((link, index) => {
                                                                return (
                                                                    <li>
                                                                        <a href='{link.href}' className="project__link" key='{index}' > 
                                                                            {link.text}                                                                 
                                                                        </a>
                                                                    </li>
                                                                )
                                                            })
                                                            :
                                                            null
                                                    }
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className={`row ${subpoint.bg ? 'text-left' : ''}`}>    
                                                <div className="col-10 offset-1 subpoint__img">
                                                    {subpoint.img ? <div className="align-center" >
                                                        
                                                        <img width="65%"className='' src={subpoint.img} alt="" />
                                                    </div>:
                                                        ""
                                                    }
                                                </div>
                                            </div>
                                        </React.Fragment>
                                }
                                <div className="row">
                                    <div className="offset-1 col-10 pb-0">
                                        {
                                            subpoint.requirements ?
                                                subpoint.requirements.map((requirement, index) => {
                                                    return (
                                                        <p className="px-5 pb-1" key='{index}' > 
                                                            - <span className='requirement__text'>{requirement.texts}</span>                                                                   
                                                        </p>
                                                    )
                                                })
                                                :
                                                null
                                        }
                                        </div>
                                    {
                                        subpoint.researches ?
                                            subpoint.researches.map((research, index) => {
                                                return (
                                                    <div key={index} className="row research align-center py-3">
                                                        <div className="offset-1 col-10">
                                                            <blockquote><span className='research__text'>{research.texts}</span></blockquote>           
                                                                {research.source ? <div className="align-center" >
                                                                <a href={research.link} target='_blank' className='research__source' rel="noreferrer"> ~ {research.source}</a>
                                                            </div>:
                                                                ""
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            null
                                    }
                                </div>
                            </React.Fragment>
                        )
                    })
                    }
                </div>
                :
                <div></div>
            }
        </React.Fragment>
    )
}

export default CaseSubPoint
