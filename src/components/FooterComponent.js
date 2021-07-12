/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaBehance, FaLinkedinIn, FaTwitter, FaMediumM, FaDribbble } from 'react-icons/fa';

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
                            <p>Feel free to reach out anywhere anytime </p>
                        </div>
                        <img className="d-none d-sm-block ml-2" src={process.env.PUBLIC_URL + '/images/victory.png'} alt="victory" />
                    </div>
                    <a href='mailto:biz.akhilesh@gmail.com' className="email">biz.akhilesh@gmail.com</a>
                    <div className="icons">
                        <a href='https://www.behance.net/orignalakhilesh' target='_blank' className="circle" rel="noreferrer">
                            <FaBehance />
                        </a>
                        <a href='https://www.linkedin.com/in/akhilesh-saurabh-91a7b81b3/' target='_blank' className="circle">
                            <FaLinkedinIn />
                        </a>
                        <a href='https://dribbble.com/akhileshsaurabh' className="circle" target='_blank'>
                            <FaDribbble />
                        </a>
                        <a href='https://twitter.com/akhilesh1_0' className="circle" target='_blank'>
                            <FaTwitter />
                        </a>
                        <a href='https://medium.com/@saurabhakhilesh1' className="circle" target='_blank'>
                            <FaMediumM />
                        </a>
                    </div>
                    <p>Illustration courtesy of <span className='footer__content__link'><a href="https://icons8.com/illustrations" target='_blank' >Icons 8 from Ouch! </a> and <a href="https://undraw.co/" target='_blank' className='footer__content__link'>unDraw</a></span> </p>
                    <p>Copyright © 2021 Akhilesh Saurabh </p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </div>

    )
}

export default Footer
