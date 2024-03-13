/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaLinkedinIn, FaMediumM, FaEnvelope } from 'react-icons/fa';

import '../css/footerComponent.css'

function Footer({ forwardRef }) {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-white border-top p-0" id="contact">
            <div ref={forwardRef} className="container-fluid" >
                <div className="navbar-brand">
                    Designed and developed by <span className='footer__content__link'>
                        <a href="https://www.linkedin.com/in/jwshannon/" target='_blank' >Jason Shannon</a></span>
                </div>

                <ul className="icons list-inline">
                    <li class="list-inline-item circle">
                        <a href='mailto:&#106;&#119;&#115;&#104;&#97;&#110;&#110;&#111;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;' target='_blank' className="circle">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li class="list-inline-item circle">
                        <a href='https://www.linkedin.com/in/jwshannon/' target='_blank' className="circle">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li class="list-inline-item circle">
                        <a href='https://medium.com/@jaidoubleu' className="circle" target='_blank'>
                            <FaMediumM />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Footer
