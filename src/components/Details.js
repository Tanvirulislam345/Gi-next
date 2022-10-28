import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { HeaderName } from '../style/ComponentStyles';
import { Header } from './shareComponents/Shared';
import SliderComponent from '../components/shareComponents/SliderComponent';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import parse from 'html-react-parser';

const Details = ({ id }) => {
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        axios
            .get(`http://ginexttradingcorp.com/api/seo-blog-details/${id}`)
            .then((res) => setBlog(res.data?.seo_blogs));
    }, [id]);

    if (!blog) {
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
        <Container>
            <HeaderName
                FontSize='16px'
                FontWeight='500'
                TextAlign='center'
                MarginTop='110px'>
                Posted On: {blog?.created_at}
            </HeaderName>
            <HeaderName
                FontSize='56px'
                TextAlign='center'
                Color='#439F69'
                MarginTop='30px'
                style={{
                    width: '100%',
                    maxWidth: '960px',
                    margin: 'auto',
                }}>
                {blog?.title}
            </HeaderName>
            <img
                src={blog?.feature_image}
                alt=''
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '1270px',
                    maxHeight: '600px',
                    margin: '20px auto',
                }}
            />
            <div
                style={{
                    width: '100%',
                    maxWidth: '960px',
                    margin: 'auto',
                }}>
                <div>{parse(`${blog?.body}`)}</div>
                <Header title='Related Blogs' Margin='40px 0px 10px' />
                <SliderComponent show={4} />
            </div>
        </Container>
    );
};

export default Details;
