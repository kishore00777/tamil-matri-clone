import React from "react";
import Top from "../Components/Home/Top";
import Interset from "../Components/Home/Interset";
import Youtube from "../Components/Home/Youtube";
import Carousels from "../Components/Home/Carousel";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";
import Search from "../Components/Home/Search";
import NavBar from "../Components/NavBar";

export default function Home() {
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
        <Search />
        <AboutMatirimony />
        <Footer />
      </>
    </>
  );
}
