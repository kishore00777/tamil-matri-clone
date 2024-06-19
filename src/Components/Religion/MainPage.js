import React from "react";
import Dashboard from "./Dashboard";
import Profiles from "./Profiles";
import NavBar from "./NavBar";
import Footer from "../Footer";
import AboutMatirimony from "../AboutMatirimony";

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
