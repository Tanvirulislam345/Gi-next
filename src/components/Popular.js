import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Card,
    DivContainer,
    HeaderName,
    CardContainer,
} from '../style/ComponentStyles';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import popularbg from '../assets/popularbg.png';
import parse from 'html-react-parser';
import SHIB from '../assets/logo1.png';
import DOGE from '../assets/logo2.png';
import SOL from '../assets/logo3.png';
import BNB from '../assets/logo4.png';
import BTC from '../assets/logo5.png';
import ETH from '../assets/logo6.png';
import ADA from '../assets/logo7.png';
import FTT from '../assets/logo8.png';

const Popular = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        axios
            .get('https://ginexttradingcorp.com/api/top-currency')
            .then((res) => setBlogs(res.data.data));
    }, []);

    if (!blogs) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Spinner animation='grow' />
            </div>
        );
    }
    return (
        <DivContainer BgImage={`url(${popularbg})`}>
            <Container>
                <HeaderName TextAlign='center' Padding='140px 0px 20px'>
                    Popular Supported Cryptocurrencies
                </HeaderName>
                <HeaderName TextAlign='center' FontSize='14px' FontWight='500'>
                    We integrate with 10+ of the most popular exchange including
                </HeaderName>

                <CardContainer Padding='60px 0px 150px'>
                    <Row
                        xs={1}
                        sm={2}
                        md={4}
                        className='g-3'
                        style={{ maxWidth: '800px' }}>
                        {blogs?.map((data, index) => (
                            <SimpleCard key={index} data={data} />
                        ))}
                    </Row>
                </CardContainer>
            </Container>
        </DivContainer>
    );
};

export default Popular;

function SimpleCard({ data }) {
    console.log(data.exchange_key);
    return (
        <Col>
            <Card Padding='20px 10px'>
                <div className='logoImageContainer'>
                    <img
                        src={BTC}
                        // src={parse(`${data?.exchange_key}`)}
                        alt='logo'
                        className='logoImage'
                    />
                </div>
                <HeaderName
                    FontSize='20px'
                    FontWight='600'
                    MarginTop='10px'
                    TextAlign='center'>
                    {data?.exchange_key}
                </HeaderName>

                <CardContainer
                    JustifyContent='space-between'
                    FlexDirection='row'>
                    <CardContainer FlexDirection='column'>
                        <HeaderName
                            FontSize='10px'
                            FontWight='500'
                            TextAlign='center'
                            Color='#46A16B'>
                            Previous Price
                        </HeaderName>
                        <HeaderName
                            FontSize='12px'
                            FontWight='600'
                            TextAlign='center'
                            Color='#000000'>
                            {data?.buy_amount}
                        </HeaderName>
                    </CardContainer>
                    <CardContainer FlexDirection='column'>
                        <HeaderName
                            FontSize='10px'
                            FontWight='500'
                            TextAlign='center'
                            Color='#46A16B'>
                            Last Price
                        </HeaderName>
                        <HeaderName
                            FontSize='12px'
                            FontWight='600'
                            TextAlign='center'
                            Color='#000000'>
                            {data?.sell_amount}
                        </HeaderName>
                    </CardContainer>
                </CardContainer>
            </Card>
        </Col>
    );
}
