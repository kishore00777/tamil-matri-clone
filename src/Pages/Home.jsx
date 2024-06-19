import React from "react";
import MyAppBar from "../Components/MyAppBar";
import Top from "../Components/Home/Top";
import Interset from "../Components/Home/Interset";
import Youtube from "../Components/Home/Youtube";
import Carousels from "../Components/Home/Carousel";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <MyAppBar />
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
        <AboutMatirimony />
        <Footer />
      </>
    </>
  );
}
