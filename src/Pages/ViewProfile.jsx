import React from "react";
import NavBar from "../Components/NavBar";
import { Box, Container, Grid, Typography } from "@mui/material";
import BackgroundImg from "../Assets/Religion/login-banner-bg.png";
import ViewProfileImg from "../Assets/Religion/ViewProfileIMG.png";
import Image1 from "../Assets/Religion/contact-genuine-icon.png";
import Image2 from "../Assets/Religion/limca-book-icon.png";
import Image3 from "../Assets/Religion/most-trust-icon.png";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";

const Styles = {
  color: "#000000",
  textWrap: "wrap",
  fontSize: "16px",
};
const detailstyle = {
  fontSize: "16px",
  fontWeight: 600,
};

const valuestyle = {
  fontSize: "16px",
  fontWeight: 500,
};

const ViewProfile = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `URL(${BackgroundImg})`,
          backgroundSize: "cover",
          height: "Auto",
          marginTop: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ paddingY: 8 }}>
          <Grid container sx={{ justifyContent: "center", columnGap: 4 }}>
            <Grid
              xs={12}
              md={4}
              sx={{
                backgroundColor: "white",
                borderRadius: "18px",
                height: "auto",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <img
                  style={{ width: "90%", borderRadius: "18px 18px 0px 0px" }}
                  src={ViewProfileImg}
                  alt=""
                />
                <Grid
                  sx={{ textAlign: "start", marginLeft: 2.5, marginY: 2.5 }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    M9537868
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    23 yrs, 5'1", Never married
                    <br />
                    Tamil, Muslim , Lebbai,
                    <br />
                    B.Sc., Not working,
                    <br />
                    Chennai, Tamil Nadu
                  </Typography>
                </Grid>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                Profile Details
              </Typography>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Name</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>Priya</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Gender</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>Female</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Age</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>30</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Height</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>5'9\"</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Language</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>Tamil</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Religion</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>Christian</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>caste</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>MBC</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Education</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>MBA</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>occupation</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>Manager</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Marital Status</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>Divorced</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>MobileNo</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>1234567891</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={3}>
                  <Typography sx={detailstyle}>Address</Typography>
                </Grid>
                <Grid xs={7}>
                  <Typography sx={valuestyle}>
                    456 Avenue, Coimbatore, Tamil Nadu, India
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#f6f6f6", marginBottom: 1 }}>
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: "space-around", paddingY: 2 }}>
            <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
              <img src={Image1} alt="" />
              <Typography sx={Styles}>
                Contact genuine profiles with 100% verified mobile numbers
              </Typography>
            </Grid>
            <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
              <img src={Image2} alt="" />
              <Typography sx={Styles}>
                Highest number of documented marriages online - Limca Book of
                Records
              </Typography>
              {/* <Typography sx={{fontSize: '12px'}}>- Limca Book of Records</Typography> */}
            </Grid>
            <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
              <img src={Image3} alt="" />
              <Typography sx={Styles}>
                The most trusted matrimony brand - The Brand Trust Report
              </Typography>
              {/* <Typography sx={{fontSize: '12px'}}>- The Brand Trust Report</Typography> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <AboutMatirimony />
      <Footer />
    </>
  );
};

export default ViewProfile;
