import React, { useEffect } from "react";
import Top from "../Components/Home/Top";
import Interset from "../Components/Home/Interset";
import Youtube from "../Components/Home/Youtube";
import Carousels from "../Components/Home/Carousel";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Browse from "../Components/Home/Browse";
// import Search from "../Components/Home/Search";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <>
        <Top />
        <Interset />
        <Youtube />
        <Carousels />
        {/* <Search /> */}
        <Browse />
        <AboutMatirimony />
        <Footer />
      </>
    </>
  );
}
