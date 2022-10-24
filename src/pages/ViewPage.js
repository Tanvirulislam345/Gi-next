import React from "react";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import Details from "../components/Details";
import Footer from "../components/Footer";

const ViewPage = () => {
  const { blogId } = useParams();
  console.log(blogId);
  return (
    <>
      <AppBar />
      <Details id={blogId} />
      <Footer />
    </>
  );
};

export default ViewPage;
