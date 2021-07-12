import React from 'react'

function Prototype({ prototype }) {
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className="row">
                    <div className="offset-1 col-10 text-center">
                        <div className="alignfull" style={{ background: prototype.bg, marginTop: '-48px' }}>
                            {prototype.link ?
                                <React.Fragment>
                                    <a href={prototype.link} target='_blank' rel="noreferrer">
                                        <img className='img-fluid hover_img ' src={process.env.PUBLIC_URL + prototype.img} alt="" />
                                    </a>
                                    <div className='d-flex align-items-center justify-content-center mt-4'>
                                        <img src={process.env.PUBLIC_URL + '/images/fingerPoint.png'} alt="" />
                                        <p className='prototype__text '>Click To see the full Prototype</p>
                                    </div>
                                </React.Fragment> :
                                <img className='img-fluid ' src={process.env.PUBLIC_URL + prototype.img} alt="" />
                            }



                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Prototype
