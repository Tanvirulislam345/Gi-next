import React, { useEffect, useState } from 'react';
import { Button, Card, HeaderName } from '../../style/ComponentStyles';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const SliderComponent = ({ show }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: show || 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    const [blogs, setBlogs] = useState(null);
    console.log(blogs)
    useEffect(() => {
        axios
            .get('http://ginexttradingcorp.com/api/seo-blog')
            .then((res) => setBlogs(res.data.seo_blogs.data));
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
        <Slider {...settings}>
            {blogs?.map((blog, index) => (
                <SliderItem blog={blog} key={index} />
            ))}
        </Slider>
    );
};

export default SliderComponent;

function SliderItem({ blog }) {
    const navigate = useNavigate();
    const handleRoute = (id) => {
        navigate(`/blogs/${id}`);
    };
    return (
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
    );
}
