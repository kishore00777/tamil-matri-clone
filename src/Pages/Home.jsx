import React from "react";
import Top from "../Components/Home/Top";
import Interset from "../Components/Home/Interset";
import Youtube from "../Components/Home/Youtube";
import Carousels from "../Components/Home/Carousel";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Browse from "../Components/Home/Browse";
import Search from "../Components/Home/Search";

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
        <Browse />
        <AboutMatirimony />
        <Footer />
      </>
    </>
  );
}
