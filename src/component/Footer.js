import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer (){
    return(
        <div className='container py-5'>
            <Row className='pb-5'>
                <Col md className='d-flex flex-column align-items-center align-items-lg-start  justify-content-center justify-content-lg-start'>
                    <h4 className='heading4 bold color-warning'>About Us</h4>
                    <h5 className='heading6 light color-light'>About</h5>
                    <h5 className='heading6 light color-light'>Terms</h5>
                    <h5 className='heading6 light color-light'>Privacy</h5>
                    <h5 className='heading6 light color-light'>Fees</h5>
                    <h5 className='heading6 light color-light'>Careers</h5>
                    <h5 className='heading6 light color-light'>Announcements</h5>
                    <h5 className='heading6 light color-light'>Referral</h5>
                    <h5 className='heading6 light color-light'>About Us</h5>
                </Col>
                <Col md>
                    <h4 className='heading4 bold color-warning'>Product</h4>
                    <h5 className='heading6 light color-light'>About</h5>
                    <h5 className='heading6 light color-light'>Terms</h5>
                    <h5 className='heading6 light color-light'>Privacy</h5>
                    <h5 className='heading6 light color-light'>Fees</h5>
                    <h5 className='heading6 light color-light'>Careers</h5>
                    <h5 className='heading6 light color-light'>Announcements</h5>
                    <h5 className='heading6 light color-light'>Referral</h5>
                    <h5 className='heading6 light color-light'>About Us</h5>
                </Col>
                <Col md>
                    <h4 className='heading4 bold color-warning'>Servicec</h4>
                    <h5 className='heading6 light color-light'>About</h5>
                    <h5 className='heading6 light color-light'>Terms</h5>
                    <h5 className='heading6 light color-light'>Privacy</h5>
                    <h5 className='heading6 light color-light'>Fees</h5>
                    <h5 className='heading6 light color-light'>Careers</h5>
                    <h5 className='heading6 light color-light'>Announcements</h5>
                    <h5 className='heading6 light color-light'>Referral</h5>
                    <h5 className='heading6 light color-light'>About Us</h5>
                </Col>
                <Col md>
                    <h4 className='heading4 bold color-warning'>Support</h4>
                    <h5 className='heading6 light color-light'>About</h5>
                    <h5 className='heading6 light color-light'>Terms</h5>
                    <h5 className='heading6 light color-light'>Privacy</h5>
                    <h5 className='heading6 light color-light'>Fees</h5>
                    <h5 className='heading6 light color-light'>Careers</h5>
                    <h5 className='heading6 light color-light'>Announcements</h5>
                    <h5 className='heading6 light color-light'>Referral</h5>
                    <h5 className='heading6 light color-light'>About Us</h5>
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