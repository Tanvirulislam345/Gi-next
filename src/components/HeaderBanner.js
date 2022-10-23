import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, CardContainer, ContainerSelf, DivContainer, HeaderName, UpDownAnimation } from '../style/ComponentStyles';
import phone1 from "../assets/phone1.png"
import phone2 from "../assets/phone2.png"
import icon1 from "../assets/icon1.png"
import background from "../assets/Backgroun1.png"

const HeaderBanner = () => {
    return (
        <DivContainer BgImage={`url(${background})`}>
            <Container>
                <CardContainer Height="100vh">
                    <Row
                        xs={1} md={2}
                        className="g-3"
                    >

                        <Col>
                            <CardContainer FlexDirection="column">
                                <HeaderName FontWeight="700" FontSize="40px" Color="#ffffff">
                                    The world’s fastest
                                </HeaderName>
                                <HeaderName FontWeight="700" FontSize="40px" Color="#ffffff">
                                    growing Crypto App
                                </HeaderName>
                                <HeaderName FontWeight="300" FontSize="14px" Color="#ffffff" MarginTop="20px">
                                    Track your performance to get your best crypto profit
                                </HeaderName>
                                <Button MarginTop="30px">Get Started</Button>
                            </CardContainer>

                        </Col>
                        <Col>
                            <CardContainer>
                                <UpDownAnimation src={phone1} alt="image" Animation="mover1" Index="1" MarginRight="-40px"
                                />
                                <UpDownAnimation src={phone2} alt="image" Animation="mover2" MarginLeft="-50px" Height="420px" />
                                <UpDownAnimation src={icon1} alt="image" Animation="mover1" Index="1" MarginLeft="-80px" Height="60px" />
                            </CardContainer>

                        </Col>
                    </Row ></CardContainer >
            </Container >

        </DivContainer >



    );
};

export default HeaderBanner;