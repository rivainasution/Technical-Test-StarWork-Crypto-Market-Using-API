import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

function Banner (){
    return(
        <Carousel id='home'>
            <Carousel.Item>
                <div className='bg-text1 d-flex flex-column align-items-start justify-content-end'>
                    <h1 className='container py-1 text-warning fw-bold'>The Future Standar of</h1> 
                    <h1 className='container py-1 text-warning fw-bold'>Cryptocurency</h1>
                    <h4 className='container pb-1 '>Dolor ipsum dolor sit amet</h4>
                    <div className='container pb-5 mb-5'>
                        <Button href='#register' variant='outline-warning' >Register Now</Button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-text2 d-flex flex-column align-items-start justify-content-end'>
                    <h1 className='container py-1 text-warning fw-bold'>The Future Standar of</h1> 
                    <h1 className='container py-1 text-warning fw-bold'>Cryptocurency</h1>
                    <h4 className='container pb-1 '>Dolor ipsum dolor sit amet</h4>
                    <div className='container pb-5 mb-5'>
                        <Button href='#register' variant='outline-warning' >Register Now</Button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;