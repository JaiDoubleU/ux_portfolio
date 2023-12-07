/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaLinkedinIn, FaMediumM, FaEnvelope } from 'react-icons/fa';

import '../css/footerComponent.css'

function Footer({ forwardRef }) {
    return (
        <div id='contact' >
            <div ref={forwardRef} className="footer-container" >
                <div className="footer__content ">
                    <div className="footer__content__top">
                        <div className="footer__content__top__text">
                            <p>Let’s Connect</p>
                            <p>Feel free to reach out anywhere, anytime </p>
                        </div>
                    </div>
                    <div className="icons mt-1">
                        <a href='mailto:&#106;&#119;&#115;&#104;&#97;&#110;&#110;&#111;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;' target='_blank' className="circle">
                            <FaEnvelope />
                        </a>
                        <a href='https://www.linkedin.com/in/jwshannon/' target='_blank' className="circle">
                            <FaLinkedinIn />
                        </a>
                        <a href='https://medium.com/@jaidoubleu' className="circle" target='_blank'>
                            <FaMediumM />
                        </a>
                    </div>
                    <p>Designed and developed by <span className='footer__content__link'><a href="https://www.linkedin.com/in/jwshannon/" target='_blank' >Jason Shannon</a></span></p>                    
                </div>
            </div>
        </div>

    )
}

export default Footer
