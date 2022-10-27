import React from "react";
import { useParams } from "react-router-dom";
import AppBar2 from "../components/AppBar2";
import Details from "../components/Details";
import Footer from "../components/Footer";

const ViewPage = () => {
  const { blogId } = useParams();
  console.log(blogId);
  return (
    <>
      <AppBar2 />
      <Details id={blogId} />
      <Footer />
    </>
  );
};

export default ViewPage;
