import React from "react";
import AppBar from "../components/AppBar";
import AppBar2 from "../components/AppBar2";
import BlogHeader from "../components/BlogHeader";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

const AllBlogsPage = () => {
  return (
    <>
      <AppBar2 />
      <BlogHeader />
      <Blogs />
      <Footer />
    </>
  );
};

export default AllBlogsPage;
