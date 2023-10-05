/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaLinkedinIn, FaTwitter, FaMediumM, FaEnvelope } from 'react-icons/fa';

import '../css/footerComponent.css'

function Footer({ forwardRef }) {
    var a = 'FaLinkedinIn';
    return (
        <div id='contact' >
            <div ref={forwardRef} className="footer-container pb-3" >
                <div className="footer__content ">
                    <div className="footer__content__top">
                        <div className="footer__content__top__text">
                            <h3>Let’s Connect</h3>
                            <p>Feel free to reach out anywhere, anytime </p>
                        </div>
                        <img className="d-none d-sm-block ml-2" height="50" src={process.env.PUBLIC_URL + '/images/victory.png'} alt="victory" />
                    </div>
                    <a href='mailto:&#106;&#119;&#115;&#104;&#97;&#110;&#110;&#111;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;' className="email">Email Me</a>
                    <div className="icons">
                        <a href='https://www.linkedin.com/in/jwshannon/' target='_blank' className="circle">
                            <FaEnvelope />
                        </a>
                        <a href='https://www.linkedin.com/in/jwshannon/' target='_blank' className="circle">
                            <FaLinkedinIn />
                        </a>
                        <a href='https://twitter.com/akhileshsaurabh' className="circle" target='_blank'>
                            <FaTwitter />
                        </a>
                        <a href='https://medium.com/@jaidoubleu' className="circle" target='_blank'>
                            <FaMediumM />
                        </a>
                    </div>
                    <p>Designed and developed by <span className='footer__content__link'><a href="https://www.linkedin.com/in/jwshannon/" target='_blank' >Me</a></span></p>                    
                </div>
            </div>
        </div>

    )
}

export default Footer
