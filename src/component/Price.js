import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Container, Tab, Table, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Price (){
    const [starx, setStarX] = useState([]);
    const [usdt, setUSDT] = useState([]);
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`https://fe-test-api.starworksglobal.com/price/search?q=${query}`);
        setData(res.data);
      };
      if (query.length === 0 || query.length > 0) fetchData();
    }, [query]);


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

    return(
        <Tabs
            justify
            defaultActiveKey="starx"
            id="fill-tab-example"
            className="my-3 myClass"
            fill
            >
            <Tab eventKey="starx" title="STARX Markets" className='mb-5'>
                <div className='container'>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                                <th></th>
                                <th><h5 className='heading5 bold color-warning'>PAIR</h5></th>
                                <th><h5 className='heading5 bold color-warning'>LAST PRICE</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H HIGH</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H LOW</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H CHANGE</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H VOLUME</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                        {starx.map((starX) => (
                            <tr className='text-center'>
                                <td>
                                    <FontAwesomeIcon icon={faStar} size="1x"></FontAwesomeIcon>
                                </td>
                                <td><h5 className='heading6 light color-info'>{starX.pair}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.lastPrice}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.high24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.low24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.change24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.volume24}</h5></td>
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
                                <th><h5 className='heading5 bold color-warning'>PAIR</h5></th>
                                <th><h5 className='heading5 bold color-warning'>LAST PRICE</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H HIGH</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H LOW</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H CHANGE</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H VOLUME</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                        {usdt.map((starX) => (
                            <tr  className='text-center'>
                                <FontAwesomeIcon icon={faStar} size="1x"></FontAwesomeIcon>
                                <td><h5 className='heading6 light color-info'>{starX.pair}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.lastPrice}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.high24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.low24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.change24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.volume24}</h5></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Tab>
            <Tab eventKey="favorites" title="Favorites" disabled>
                <h1>test 2</h1>
            </Tab>
            <Tab eventKey="search" title="Search" >
                <Container className='py-5 text-center' >
                    <input
                        className="search"
                        placeholder="USDT"
                        onChange={(e) => setQuery(e.target.value.toUpperCase())}
                        className='mb-5'
                    />
                    
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                                <th></th>
                                <th><h5 className='heading5 bold color-warning'>PAIR</h5></th>
                                <th><h5 className='heading5 bold color-warning'>LAST PRICE</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H HIGH</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H LOW</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H CHANGE</h5></th>
                                <th><h5 className='heading5 bold color-warning'>24H VOLUME</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((starX) => (
                            <tr  className='text-center'>
                                <FontAwesomeIcon icon={faStar} size="1x"></FontAwesomeIcon>
                                <td><h5 className='heading6 light color-info'>{starX.pair}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.lastPrice}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.high24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.low24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.change24}</h5></td>
                                <td><h5 className='heading6 light color-info'>{starX.volume24}</h5></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </Tab>
        </Tabs>
    );
}

export default Price;