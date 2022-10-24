import React from "react";
import About from "../components/About";
import HeaderBanner from "../components/HeaderBanner";
import RoboticsFeatures from "../components/RoboticsFeatures";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import LatestBlog from "../components/LatestBlog";
import AppBar from "../components/AppBar";
import TryGroup from "../components/TryGroup";

const LandingPage = () => {
  return (
    <>
      <AppBar />
      <HeaderBanner />
      <About />
      {/*  <RoboticsFeatures /> */}
      <Popular />
      <LatestBlog />
      <TryGroup />
      <Footer />
    </>
  );
};

export default LandingPage;
