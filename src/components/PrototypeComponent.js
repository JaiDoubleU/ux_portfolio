import React from 'react'

function Prototype({ prototype }) {
    return (
        <React.Fragment>
                <div className="row py-3">
                    <div className="offset-1 col-10 text-center">
                        <div className="align-full" style={{ background: prototype.bg, marginTop: '-48px' }}>
                            {prototype.link ?
                                <React.Fragment>
                                    <a href={prototype.link} target='_blank' rel="noreferrer">
                                        <img className='hover_img project__img' src={process.env.PUBLIC_URL +"/" + prototype.img} alt="" />
                                    </a>
                                    <div className='d-flex align-items-center justify-content-center mt-4'>
                                        <img src={process.env.PUBLIC_URL + '/images/fingerPoint.png'} alt="" />
                                        <p className='prototype__text '>Click To see the full Prototype</p>
                                    </div>
                                </React.Fragment> :
                                <img className='hover_img project__img' src={process.env.PUBLIC_URL +"/" + prototype.img} alt="" />
                            } 
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Prototype
