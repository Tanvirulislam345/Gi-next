import React from "react";
import About from "../components/About";
import HeaderBanner from "../components/HeaderBanner";
import RoboticsFeatures from "../components/RoboticsFeatures";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import LatestBlog from "../components/LatestBlog";


const LandingPage = () => {
  return (
    <>
      {/* <HeaderBanner />
      <About />
      <RoboticsFeatures /> */}
      <Popular />
      <LatestBlog />
      <Footer />

    </>
  );
};

export default LandingPage;
