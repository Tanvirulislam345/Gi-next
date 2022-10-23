import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, CardContainer, ContainerSelf, HeaderName, HrRule, UpDownAnimation } from '../style/ComponentStyles';
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import phone3 from "../assets/phone3.png";
import { Header } from './shareComponents/Shared';

const About = () => {
    return (
        <div>
            <Container>
                <CardContainer>
                    <Row
                        className="g-3"
                        xs={1} md={2}
                        style={{ minheight: "100vh", width: "1000px", }}
                    >
                        <Col>
                            <ContainerSelf JustifyContent="start" AlignItems="start" Margin="150px auto">
                                <Header
                                    title="About GiNext"
                                >
                                    <HrRule Width="180px" />
                                </Header>
                                <HeaderName
                                    FontWeight="400"
                                    FontSize="14px"
                                    Color="black"
                                    MarginTop="20px"
                                >
                                    We are an intelligent platform and we have a robot able to make thousands of daily operations with Bitcoin, Ethereum and alt coin of crypto market. We are eager to innovate, generate and share positive financial results in the arbitrage business of cryptocurrency and be recognized as the most responsible, trustworthy company around.
                                </HeaderName>
                                <Button MarginTop="60px">Get Started</Button>
                            </ContainerSelf>

                        </Col>
                        <Col>
                            <ContainerSelf Direction="row" >
                                <UpDownAnimation src={about1} alt="image" Animation="mover2" Height="200px" Width="200px" Index="1" MarginRight="-110px"
                                />
                                <UpDownAnimation src={about2} alt="image" Height="300px" Width="300px" />
                                <UpDownAnimation src={phone3} alt="image" Animation="mover1" Height="400px" Index="1" MarginLeft="-200px"
                                />
                            </ContainerSelf>

                        </Col>
                    </Row>
                </CardContainer>
            </Container>

        </div>



    );
};

export default About;