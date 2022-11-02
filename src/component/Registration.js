import React from 'react';
import { Button } from 'react-bootstrap';

function Registration (){
    return(
        <div className='container py-5'>
            <h1 className='heading1 color-warning light py-3 text-center'>Join Starx now!</h1>
            <h5 className='heading5 light color-light pb-3 text-center'>Lorem Bitcoin, BNB, and hundreds of other cryptocurencies in minute</h5>
            <div className='d-flex flex-row justify-content-center'>
                <div className='mx-5'>
                    <Button variant='outline-warning'>Register Now</Button>
                </div>
                <div className='mx-5'>
                    <Button variant='outline-warning'>Exchange</Button>
                </div>
            </div>
        </div>
    );
}

export default Registration;