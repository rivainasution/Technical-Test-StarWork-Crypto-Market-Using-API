import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo1 from "../assets/icon-1.png";
import logo2 from "../assets/icon-2.png";
import logo3 from "../assets/icon-3.png";
import logo4 from "../assets/icon-4.png";

function Featured (){
    return(
        <div className='container py-5'>
            <h1 className='text-warning text-center py-3'>Why Starx?</h1>
            <Row>
                <Col md className='py-3'>
                    <Row>
                        <Col md={4} lg={3}>
                            <img src={logo1} 
                                alt='secure'
                                width="90" 
                            />
                        </Col>
                        <Col md>
                            <div className='feature p-2 my-2'>
                                <h2 className='text-warning'>Secure</h2>
                                <h6 className='text-light'>Starmex platform is convenience to use even for the first time user</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md className='py-3'>
                    <Row>
                        <Col md={4} lg={3}>
                            <img src={logo2} 
                                alt='secure'
                                width="90" 
                            />
                        </Col>
                        <Col md>
                            <div className='feature p-2 my-2'>
                                <h2 className='text-warning'>Professional</h2>
                                <h6 className='text-light'>Starmex platform is convenience to use even for the first time user</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md className='py-3'>
                    <Row>
                        <Col md={4} lg={3}>
                            <img src={logo3} 
                                alt='secure'
                                width="90" 
                            />
                        </Col>
                        <Col md>
                            <div className='feature p-2 my-2'>
                                <h2 className='text-warning'>convenience</h2>
                                <h6 className='text-light'>Starmex platform is convenience to use even for the first time user</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md className='py-3'>
                    <Row>
                        <Col md={4} lg={3}>
                            <img src={logo4} 
                                alt='secure'
                                width="90" 
                            />
                        </Col>
                        <Col md>
                            <div className='feature p-2 my-2'>
                                <h2 className='text-warning'>Global</h2>
                                <h6 className='text-light'>Starmex platform is convenience to use even for the first time user</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Featured;