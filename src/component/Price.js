import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Tab, Table, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Price (){
    const [starx, setStarX] = useState([]);
    const [usdt, setUSDT] = useState([]);
    const [select, setSelect] = useState([]);

    useEffect(() => {
        getStarX();
    }, []);
  
    const getStarX = async () => {
        const response = await axios.get("https://fe-test-api.starworksglobal.com/price/starx-markets");
        setStarX(response.data);
    };
    
    useEffect(() => {
        getUSDT();
    }, []);
  
    const getUSDT = async () => {
        const response = await axios.get("https://fe-test-api.starworksglobal.com/price/usdt-markets");
        setUSDT(response.data);
    };

    useEffect(() => {
        getSelect();
    }, []);
  
    const getSelect = async () => {
        const response = await axios.get("https://fe-test-api.starworksglobal.com/price/search?q=STARX");
        setSelect(response.data);
    };
    return(
        <Tabs
            defaultActiveKey="starx"
            id="fill-tab-example"
            className="my-3"
            fill
            >
            <Tab eventKey="starx" title="STARX Markets" className='mb-5'>
                <div className='container'>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                                <th></th>
                                <th>PAIR</th>
                                <th>LAST PRICE</th>
                                <th>24H HIGH</th>
                                <th>24H LOW</th>
                                <th>24H CHANGE</th>
                                <th>24H VOLUME</th>
                            </tr>
                        </thead>
                        <tbody>
                        {starx.map((starX) => (
                            <tr className='text-center'>
                                <td>
                                    <FontAwesomeIcon icon={faStar} size="1x"></FontAwesomeIcon>
                                </td>
                                <td>{starX.pair}</td>
                                <td>{starX.lastPrice}</td>
                                <td>{starX.high24}</td>
                                <td>{starX.low24}</td>
                                <td>{starX.change24}</td>
                                <td>{starX.volume24}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Tab>




            <Tab eventKey="usdt" title="USDT Markets" className='mb-5'>
                <div className='container'>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                                <th></th>
                                <th>PAIR</th>
                                <th>LAST PRICE</th>
                                <th>24H HIGH</th>
                                <th>24H LOW</th>
                                <th>24H CHANGE</th>
                                <th>24H VOLUME</th>
                            </tr>
                        </thead>
                        <tbody>
                        {usdt.map((starX) => (
                            <tr  className='text-center'>
                                <FontAwesomeIcon icon={faStar} size="1x"></FontAwesomeIcon>
                                <td>{starX.pair}</td>
                                <td>{starX.lastPrice}</td>
                                <td>{starX.high24}</td>
                                <td>{starX.low24}</td>
                                <td>{starX.change24}</td>
                                <td>{starX.volume24}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Tab>
            <Tab eventKey="favorites" title="Favorites" disabled>
                <h1>test 2</h1>
            </Tab>
            <Tab eventKey="search" title="search" disabled>
                <h1>test 3</h1>
            </Tab>
        </Tabs>
    );
}

export default Price;