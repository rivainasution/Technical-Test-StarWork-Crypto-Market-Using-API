import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

function Banner (){
    return(
        <Carousel id='home'>
            <Carousel.Item>
                <div className='bg-text1 d-flex flex-column align-items-start justify-content-end'>
                    <h2 className='container heading2 color-warning bold'>The Future Standar of</h2> 
                    <h2 className='container heading2 color-warning bold'>Cryptocurency</h2>
                    <h3 className='container heading3 light color-light py-2'>Dolor ipsum dolor sit amet</h3>
                    <div className='container pb-5 mb-5'>
                        <Button href='#register' variant='outline-warning' >Register Now</Button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-text2 d-flex flex-column align-items-start justify-content-end'>
                    <h2 className='container heading2 color-warning bold'>The Future Standar of</h2> 
                    <h2 className='container heading2 color-warning bold'>Cryptocurency</h2>
                    <h3 className='container heading3 light color-light py-2'>Dolor ipsum dolor sit amet</h3>
                    <div className='container pb-5 mb-5'>
                        <Button href='#register' variant='outline-warning' >Register Now</Button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;