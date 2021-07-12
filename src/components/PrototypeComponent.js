import React from 'react'

function Prototype() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className="row">
                    <div className="offset-1 col-10 text-center">
                        <div className="alignfull" style={{ background: 'red', marginTop: '-48px' }}>
                            <a href="">
                                <img className='img-fluid hover_img ' src={process.env.PUBLIC_URL + '/images/Snap.png'} alt="" />
                            </a>
                            <div className='d-flex align-items-center justify-content-center mt-4'>
                                <img src={process.env.PUBLIC_URL + '/images/fingerPoint.png'} alt="" />
                                <p className='prototype__text '>Click To see the full Prototype</p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Prototype
