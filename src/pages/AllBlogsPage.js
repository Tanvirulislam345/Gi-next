import React from 'react';
import AppBar from '../components/AppBar';
import BlogHeader from '../components/BlogHeader';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const AllBlogsPage = () => {
    return (
        <>
            <AppBar />
            <BlogHeader />
            <Blogs />
            <Footer />
        </>
    );
};

export default AllBlogsPage;