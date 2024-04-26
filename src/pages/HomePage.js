import React from 'react'

import Hero from '../components/HeroComponent';
import { principles } from '../shared';
import '../css/homePage.css'

import {
	Card, CardBody, CardTitle, CardImg, CardSubtitle
} from 'reactstrap';
function HomePage({ footerRef }) {
    return (
        <div className='offset-1 col-lg-10 col-10'>
            <Hero />           

            <hr className='my-4'/>
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-4">
                                <h5>Personal Design Principles</h5>
                                <div>In my years as a designer, I've consciously and unconsciously developed some design principles that guide my behavior.</div>
                            </div>
                        </div>
                    </div>

              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                    {principles.map((principle, index) => {
                        return (
                             <div class="col mx-auto my-2 mx-vw-25">
                                     <Card className="text-center card h-100 p-3">
                                        <CardImg
                                            alt={"Image for " +principle.text}
                                            src={principle.icon}
                                            top
                                            className='mx-auto w-50 img-fluid card-img-top'
                                        />
                                        <CardBody>
                                            <CardTitle className="text-break text-wrap " tag="h6">
                                                {principle.text}
                                                
                                            </CardTitle>
                                            <CardSubtitle tag="small" className="text-break text-wrap">{principle.subtext} </CardSubtitle>
                                        </CardBody>
                                    </Card>
                            </div>
                        );
                           
                    })}    
                        
                 </div>
                        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                            <CardGroup className="col "> 
                                {principles.map((principle, index) => {
                                    return (
        //                                <Card className="text-center border-0 col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                <Card className="text-center card">

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
                </div> */}
        </div>
    )
}

export default HomePage
