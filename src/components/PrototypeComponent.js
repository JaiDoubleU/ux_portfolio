import React from 'react'

function Prototype() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className="row">
                    <div className="offset-1 col-10 test text-center">
                        <a href="">
                            <img className='img-fluid  hover_img ' src={process.env.PUBLIC_URL + '/images/Snap.png'} alt="" />
                        </a>
                        <p className='prototype__text '>Click To see the full Prototype</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Prototype
