import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Button,
    Card,
    CardContainer,
    HeaderName,
    HrRule,
} from '../style/ComponentStyles';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const Blogs = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        axios
            .get('http://ginexttradingcorp.com/api/seo-blog')
            .then((res) => setBlogs(res.data.seo_blogs.data));
    }, []);

    const handleRoute = (id) => {
        navigate(`/blogs/${id}`);
    };

    if (!blogs) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {' '}
                <Spinner animation='grow' />
            </div>
        );
    }
    return (
        <Container id='blogs'>
            <Nav />
            <Row xs={1} sm={2} md={3} lg={4} className='g-3 mt-3'>
                {blogs?.map((blog, index) => (
                    <Col key={index}>
                        <Card
                            Shadow='0px 0px 2px rgba(0, 0, 0, 0.25)'
                            Padding='0px'
                            Margin='5px'
                            JustifyContent='start'
                            AlignItems='start'>
                            <img
                                src={blog?.feature_image}
                                alt=''
                                width='100%'
                                height='170px'
                                style={{
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                }}
                            />
                            <div style={{ padding: '20px' }}>
                                <HeaderName FontSize='14px' Height='35px'>
                                    {blog?.title}
                                </HeaderName>
                                <HeaderName FontSize='14px' Color='gray'>
                                    {blog?.created_at}
                                </HeaderName>
                                <Button
                                    Background='rgba(67, 160, 106, 0.2)'
                                    Shadow='0px 0px 2px rgba(0, 0, 0, 0.25)'
                                    Color='#43A06A'
                                    Padding='4px 20px'
                                    Margin='10px 0px 0px'
                                    onClick={() => handleRoute(blog?.id)}>
                                    Read full article
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Blogs;

function Nav() {
    const [clicked, setClicked] = useState('All');
    const values = ['All', 'Tranding', 'Popular', 'Cripto'];
    return (
        <>
            <CardContainer JustifyContent='start' Margin='50px 0px 10px'>
                {values.map((data, index) => (
                    <HeaderName
                        FontSize='18px'
                        FontWeight='500'
                        Padding='0px 10px'
                        Color={clicked === data ? '#43A06A' : 'black'}
                        onClick={() => setClicked(data)}
                        key={index}>
                        {data}
                    </HeaderName>
                ))}
            </CardContainer>
            <HrRule />
        </>
    );
}
