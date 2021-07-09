import React from 'react'
import { FaBehance,FaLinkedinIn,FaTwitter,FaMediumM,FaDribbble } from 'react-icons/fa';

import '../css/footerComponent.css'

function Footer() {
    return (
        <div className="footer-container" id='contact'>
            <div className="footer__content">
                <div className="footer__content__top">
                    <div className="footer__content__top__text">
                        <h3>Let’s Connect</h3>
                        <p>Feel free to reach out anywhere anytime </p>
                        <p className="email">saurabh.akhilesh<span>1</span>@gmail.com</p>
                        <div className="icons">
                            <div className="circle">
                                <FaBehance />
                            </div>
                            <div className="circle">
                                <FaLinkedinIn/>
                            </div>
                            <div className="circle">
                                <FaDribbble/>
                            </div>
                            <div className="circle">
                                <FaTwitter/>
                            </div>
                            <div className="circle">
                                <FaMediumM/>
                            </div>
                        </div>
                    </div>
                    <img className="d-none d-sm-block" src={process.env.PUBLIC_URL + '/images/victory.png'} alt="victory" />
                </div>

                {/* <p>Copyright © 2021 Akhilesh Saurabh. All rights reserved.</p> */}
            </div>
        </div>
    )
}

export default Footer
