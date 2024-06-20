import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Container, Grid, Typography } from "@mui/material";
import { SliderImg, carouselData } from "../../Data";

export default function Carousels() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {dots}
        </ul>
      </Grid>
    ),
    customPaging: (i) => (
      <div
        style={{
          marginTop: 50,
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          borderLeft: focusedIndex === i ? "3px solid orange" : "none",
          borderTop: focusedIndex === i ? "3px solid orange" : "none",
          borderBottom: focusedIndex === i ? "3px solid orange" : "none",
          borderRight: focusedIndex === i ? "3px solid #fff" : "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={SliderImg[i]}
          alt={`hello`}
          style={{
            width: "50px",
            height: "50px",
          }}
          onFocus={() => setFocusedIndex(i)}
          onBlur={() => setFocusedIndex(null)}
          tabIndex={0}
        />
      </div>
    ),
  };
  return (
    <Box sx={{ backgroundColor: "#f4f8f7", paddingBottom: 8 }}>
      <Container maxWidth="lg" sx={{ pt: 8, pb: 10 }}>
        <Grid>
          <Typography sx={{ fontSize: 36, fontWeight: 900, marginBottom: 6 }}>
            Millions have found their life partner at TamilMatrimony!
          </Typography>
        </Grid>
        <Box sx={{ backgroundColor: "white", borderRadius: 4 }}>
          <Slider {...settings}>
            {carouselData.map((datas) => (
              <Box sx={{ p: 4 }}>
                <Grid container sx={{ justifyContent: "space-between" }}>
                  <Grid xs={6}>
                    <Typography>"{datas.review}"</Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", marginTop: 4 }}
                    >
                      {datas.name}
                    </Typography>
                    <Typography variant="h5">TamilMatrimony</Typography>
                  </Grid>
                  <Grid xs={5}>
                    <img
                      style={{ width: "80%", borderRadius: "18px" }}
                      src={datas.img}
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
