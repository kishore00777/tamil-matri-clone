import React from "react";
import MyAppBar from "../Components/MyAppBar";
import Top from "../Components/Home/Top";
import Interset from "../Components/Home/Interset";
import Youtube from "../Components/Home/Youtube";
import Carousels from "../Components/Home/Carousel";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";
import Search from "../Components/Home/Search";
import NavBar from "../Components/Religion/NavBar";

export default function Home() {
  return (
    <>
      {/* <MyAppBar /> */}
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
        <Search />
        <AboutMatirimony />
        <Footer />
      </>
    </>
  );
}
