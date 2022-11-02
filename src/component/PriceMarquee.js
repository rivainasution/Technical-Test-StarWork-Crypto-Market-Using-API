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
                                <h5 className='heading5 light color-primary'>{marq.coinName}</h5>
                                <h6 className='heading6 light color-dark'>{marq.priceUsd}</h6>
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center p-1'>
                                <h4 className='heading4 light color-danger mx-2'>{marq.priceIdr}</h4>
                                <h5 className='heading5 light color-success mx-2'>{marq.movement}</h5>
                            </div>
                        </div>
                ))}
            </div>
        </marquee>
    );
}

export default PriceMarquee;