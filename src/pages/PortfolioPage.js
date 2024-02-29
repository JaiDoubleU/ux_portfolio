import React, { useEffect, useRef } from 'react'
import { portfolios, works, myInfo } from '../shared';
import SinglePortfolio from '../components/SinglePortfolioComponent';
import { Link } from 'react-router-dom';

import '../css/portfolioPage.css'

function PortfolioPage() {
    const myRef = useRef(null);

    return (
        <div className="container portfolio-container">
           <div className="row ">
                <div className="offset-1 col-lg-10 col-10 mb-5">
                    <div className="row heading" id="portfolio" ref={myRef} >
                        <div className="col">
                            <div className="d-flex">
                                <h2 className='page__heading'>{myInfo.portfolioPageTitle}</h2>
                            </div>
                        </div>
                    </div>
                    <p className="page__subheading" >{myInfo.portfolioIntroText}</p>
                </div>
                
                {portfolios.map((portfolio, index) => {
                    return (
                        <Link to={`/case/${portfolio.id}`} key={portfolio.id}>
                            <SinglePortfolio index={index} portfolio={portfolio} key={portfolio.id} />
                        </Link>
                    )
                })}
            </div>

             {works.map((work, index) => {
                return (
                    <Link to={`/work/${work.id}`} key={work.id}>
                        <SinglePortfolio index={index} work={work}  key={work.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default PortfolioPage
