import React from 'react';
import { Container } from 'react-bootstrap';
import { DivContainer, HeaderName, HrRule } from '../style/ComponentStyles';
import { Header } from './shareComponents/Shared';
import AskedQuestion from './AskedQuestion';
import { NavLink } from 'react-router-dom';
import SliderComponent from './shareComponents/SliderComponent';

const LatestBlog = () => {
    return (
        <DivContainer Backgroung='#F5F5F5' id='blog'>
            <Container>
                <Header title='Our Latest Blogs' Margin='100px 0px 20px'>
                    <HrRule Width='200px' />
                </Header>
                <div className='responseHeader'>
                    <HeaderName FontSize='16px' FontWeight='500' Width='660px'>
                        We constantly review our tools and popular trading
                        strategies. Follow out blog to keep up-to-date with the
                        latest news
                    </HeaderName>
                    <HeaderName
                        FontSize='18px'
                        FontWeight='600'
                        Width='100%'
                        TextAlign='end'>
                        <NavLink
                            to='/blogs'
                            style={{
                                textDecoration: 'none',
                                color: '#43A06A',
                            }}>
                            View All
                        </NavLink>
                    </HeaderName>
                </div>
                <SliderComponent />
                <AskedQuestion />
            </Container>
        </DivContainer>
    );
};

export default LatestBlog;
