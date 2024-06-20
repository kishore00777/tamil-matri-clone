import React from "react";
import Dashboard from "./Dashboard";
import Profiles from "./Profiles";
import Footer from "../Footer";
import AboutMatirimony from "../AboutMatirimony";
import NavBar from "../NavBar";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Dashboard />
      <Profiles />
      <AboutMatirimony />
      <Footer />
    </>
  );
};

export default MainPage;
