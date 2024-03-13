import React from 'react'

import Hero from '../components/HeroComponent';
import { principles } from '../shared';
import '../css/homePage.css'

import {
	Card, CardBody, CardTitle, CardGroup, CardImg, CardSubtitle
} from 'reactstrap';
function HomePage({ footerRef }) {
    return (
        <div className='offset-1 col-lg-10 col-10'>
            <Hero />           

            <hr className='mb-4'/>

            <div className="row">
                <div className="col-12">
                    <div className="mb-4">
                        <h5>Personal Design Principles</h5>
                        <div>In my years as a designer, I've consciously and unconsciously developed some design principles that guide my behavior.</div>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col ">
                    <CardGroup className="d-flex flex-col flex-wrap principles">
                        {principles.map((principle, index) => {
                            return (
                                <Card className="text-center border-0">
                                    <CardImg
                                        alt={"Image for " +principle.text}
                                        src={principle.icon}
                                        top
                                        className='mx-auto img-fluid '
                                    />
                                    <CardBody>
                                        <CardTitle className="text-break text-wrap " tag="h6">
                                            {principle.text}
                                            
                                        </CardTitle>
                                        <CardSubtitle tag="small" className="text-break text-wrap">{principle.subtext} </CardSubtitle>
                                    </CardBody>
                                </Card>
                                
                            )
                        })}
                        </CardGroup>
                    </div>
            </div>
        </div>
    )
}

export default HomePage
