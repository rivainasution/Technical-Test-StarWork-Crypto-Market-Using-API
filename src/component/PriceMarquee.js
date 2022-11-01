import React, {useState, useEffect} from 'react';
import axios from "axios";

function PriceMarquee (){
    const [marquee, setMarquee] = useState([]);
    useEffect(() => {
        getMarquee();
    }, []);
  
    const getMarquee = async () => {
        const response = await axios.get("https://fe-test-api.starworksglobal.com/price-marquee");
        setMarquee(response.data);
    };
    

    return(
        <marquee className='py-5'>
            <div className='d-flex flex-row'>
                {marquee.map((marq) => (
                        <div className='d-flex flex-row align-items-center justify-content-center px-3'>
                            <div className='d-flex flex-column align-items-center justify-content-center p-1'>
                                <h4 className='text-primary'>{marq.coinName}</h4>
                                <h6 className='text-dark'>{marq.priceUsd}</h6>
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center p-1'>
                                <h2 className='text-danger'>{marq.priceIdr}</h2>
                                <h5 className='text-success'>{marq.movement}</h5>
                            </div>
                        </div>
                ))}
            </div>
        </marquee>
    );
}

export default PriceMarquee;