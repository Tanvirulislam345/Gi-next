import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card, DivContainer, HeaderName, CardContainer } from '../style/ComponentStyles';
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import popularbg from "../assets/popularbg.png";

const dataset = [
    {
        image: logo1,
        name: "SHIB"
    },
    {
        image: logo2,
        name: "DOGE"
    },
    {
        image: logo3,
        name: "SOL"
    },
    {
        image: logo4,
        name: "BNB"
    },
    {
        image: logo5,
        name: "BTC"
    },
    {
        image: logo6,
        name: "ETH"
    },
    {
        image: logo7,
        name: "ADA"
    },
    {
        image: logo8,
        name: "FTT"
    },
]
const Popular = () => {
    return (
        <DivContainer BgImage={`url(${popularbg})`}>
            <Container>
                <HeaderName
                    TextAlign="center"
                    Padding="140px 0px 20px"
                >
                    Popular Supported Cryptocurrencies
                </HeaderName>
                <HeaderName
                    TextAlign="center"
                    FontSize="14px"
                    FontWight="500"
                >
                    We integrate with 10+ of the most popular exchange including
                </HeaderName>

                <CardContainer Padding="60px 0px 150px">
                    <Row
                        xs={1} sm={2} md={4}
                        className="g-3"
                        style={{ maxWidth: "800px" }}

                    >
                        {
                            dataset.map((data, index) => <SimpleCard key={index} data={data} />)
                        }
                    </Row>
                </CardContainer>

            </Container>
        </DivContainer >
    );
};

export default Popular;

function SimpleCard({ data }) {
    console.log(data.image)
    return <Col> <Card>
        <img src={data.image} alt="logo" width="60px" height="60px" />
        <HeaderName FontSize="20px" FontWight="600" MarginTop="10px">{data.name}</HeaderName>
    </Card></Col>
}