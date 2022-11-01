import React from 'react';
import { Button } from 'react-bootstrap';

function Registration (){
    return(
        <div className='container py-5'>
            <h1 className='text-warning text-center py-3'>Join Starx now!</h1>
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