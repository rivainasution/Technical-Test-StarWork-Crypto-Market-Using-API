import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer (){
    return(
        <div className='container py-5'>
            <Row className='pb-5'>
                <Col md>
                    <h4 className='text-warning'>About us</h4>
                    <h6 className='text-light'>About</h6>
                    <h6 className='text-light'>Terms</h6>
                    <h6 className='text-light'>Privacy</h6>
                    <h6 className='text-light'>Fees</h6>
                    <h6 className='text-light'>Careers</h6>
                    <h6 className='text-light'>Announcements</h6>
                    <h6 className='text-light'>Referral</h6>
                    <h6 className='text-light'>About Us</h6>
                </Col>
                <Col md>
                    <h4 className='text-warning'>Product</h4>
                    <h6 className='text-light'>About</h6>
                    <h6 className='text-light'>Terms</h6>
                    <h6 className='text-light'>Privacy</h6>
                    <h6 className='text-light'>Fees</h6>
                    <h6 className='text-light'>Careers</h6>
                    <h6 className='text-light'>Announcements</h6>
                    <h6 className='text-light'>Referral</h6>
                    <h6 className='text-light'>About Us</h6>
                </Col>
                <Col md>
                    <h4 className='text-warning'>Service</h4>
                    <h6 className='text-light'>About</h6>
                    <h6 className='text-light'>Terms</h6>
                    <h6 className='text-light'>Privacy</h6>
                    <h6 className='text-light'>Fees</h6>
                    <h6 className='text-light'>Careers</h6>
                    <h6 className='text-light'>Announcements</h6>
                    <h6 className='text-light'>Referral</h6>
                    <h6 className='text-light'>About Us</h6>
                </Col>
                <Col md>
                    <h4 className='text-warning'>Support</h4>
                    <h6 className='text-light'>About</h6>
                    <h6 className='text-light'>Terms</h6>
                    <h6 className='text-light'>Privacy</h6>
                    <h6 className='text-light'>Fees</h6>
                    <h6 className='text-light'>Careers</h6>
                    <h6 className='text-light'>Announcements</h6>
                    <h6 className='text-light'>Referral</h6>
                    <h6 className='text-light'>About Us</h6>
                </Col>
            </Row>
            <div className='d-flex flex-column align-items-center justify-content-center text-warning'>
                <div className='d-flex flex-row align-items-center justify-content-center pt-5 pb-3'>
                    <div className='mx-2'>
                        <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className='mx-2'>
                        <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className='mx-2'>
                        <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                    </div>
                </div>
                <div className='foot text-white p-2'>
                    <h6>&copy; 2022 Starmex.com All right reserves</h6>
                </div>
            </div>
        </div>
    );
}

export default Footer;