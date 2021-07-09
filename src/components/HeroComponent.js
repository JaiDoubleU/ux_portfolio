import React,{useRef,useEffect} from 'react'
import '../css/homePage.css'

function Hero() {

	const myRef = useRef(null);
    return (
        <div className="hero-container container">
            <div className="row offset-1">
                <div className="col-sm-12">
                    <h1>Hi, I’m Akhilesh</h1>
                </div>
                <div className="col-sm-5" >
                    <p className='hero__description'>UX  Designer, Video Editor,
                        and  fascinated about outer space.
                    </p>
                </div>
            </div>
            <div id='portfolio' ref={myRef} className="row heading offset-1 pt-3">
                <div className="col">
                    <div className="d-flex mb-5">
                        <p>Portfolio</p>
                        <span className="dash"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
