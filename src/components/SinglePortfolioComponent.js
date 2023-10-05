import React from 'react'
import '../css/homePage.css'
import { Link } from 'react-router-dom';

function SinglePortfolio(props) {


    if (props.portfolio) {
        return (
            <div style={{ backgroundColor: `${props.portfolio.background}` }}>
                <div className="container case-container">
                    <div className="row ">
                        <div className={`col-10 col-lg-4 offset-1 ${props.index % 2 !== 0 ? '  order-lg-1' : 'order-lg-2 '}`}>
                            <img style={{ boxShadow: `${props.portfolio.shadow}` }} className="hover_img project__img" src={process.env.PUBLIC_URL + props.portfolio.image} alt="portfolio-img" />
                        </div>
                        <div className={`col-lg-5 mb-5 mt-lg-0 offset-1 ${props.index % 2 !== 0 ? 'order-lg-2 ' : '.order-lg-1 ' }`}>
                            <h2 className="project__name" style={{ color: `${props.portfolio.color}` }}>{props.portfolio.name} </h2>
                            <p className="project__desc">{props.portfolio.desc}</p>
                            <h3 className="project__link">View Case Study</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ backgroundColor: `${props.work.background}` }}>
                <div className="container  work-container">
                    <div className='row'>
                        <div className={`col-10 col-lg-4 offset-1 ${props.index % 2 !== 0 ? '  order-lg-1' : 'order-lg-2 '}`}>
                            <Link to={`/work/${props.work.id}`}>
                                <img style={{ boxShadow: `${props.work.shadow}` }} className="hover_img project__img" src={process.env.PUBLIC_URL + props.work.image} alt="work-img" />
                            </Link>
                        </div>
                        <div className={`col-lg-5 mb-5 mt-lg-0 offset-1 ${props.index % 2 !== 0 ? 'order-lg-2 ' : '.order-lg-1 ' }`}>
                            <h2 className="project__name">{props.work.name}</h2>
                            <p className="project__desc mb-5" >{props.work.desc}</p>
                            <Link to={`/work/${props.work.id}`}>
                                <h3 className="project__link">{props.work.completed ? 'View Work' : 'Coming Soon'}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SinglePortfolio
