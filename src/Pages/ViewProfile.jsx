import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { Box, Container, Grid, Typography } from "@mui/material";
import BackgroundImg from "../Assets/Religion/login-banner-bg.png";
import ViewProfileImg from "../Assets/Religion/ViewProfileIMG.png";
import Image1 from "../Assets/Religion/contact-genuine-icon.png";
import Image2 from "../Assets/Religion/limca-book-icon.png";
import Image3 from "../Assets/Religion/most-trust-icon.png";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { profiles } from "../Data/Profiles";

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
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const profileId = params.get("profileId");

  const view = profiles.filter((i) => i.id === profileId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavBar />
      {view.map((i, j) => (
        <>
          {" "}
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
                      style={{
                        width: "90%",
                        borderRadius: "18px 18px 0px 0px",
                      }}
                      src={i.ProfileImage}
                      alt=""
                    />
                    <Grid
                      sx={{ textAlign: "start", marginLeft: 2.5, marginY: 2.5 }}
                    >
                      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                        {i.id}
                      </Typography>
                      <Typography sx={{ fontSize: "16px" }}>
                        {i.Age} yrs, {i.Height}, {i.MaritalStatus}
                        <br />
                        {i.Language}, {i.Religion} , {i.caste},
                        <br />
                        {i.Education}, {i.occupation},
                        <br />
                        {i.City}, {i.State}
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
                      <Typography sx={valuestyle}>{i.Name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Gender</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.Gender}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Age</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.Age}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Height</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.Height}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Language</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.Language}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Religion</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.Religion}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>caste</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.caste}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Education</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.Education}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>occupation</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.occupation}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Marital Status</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.MaritalStatus}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>MobileNo</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.MobileNo}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={3}>
                      <Typography sx={detailstyle}>Address</Typography>
                    </Grid>
                    <Grid xs={7}>
                      <Typography sx={valuestyle}>{i.Address}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box sx={{ backgroundColor: "#f6f6f6", marginBottom: 1 }}>
            <Container maxWidth="lg">
              <Grid
                container
                sx={{ justifyContent: "space-around", paddingY: 2 }}
              >
                <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
                  <img src={Image1} alt="" />
                  <Typography sx={Styles}>
                    Contact genuine profiles with 100% verified mobile numbers
                  </Typography>
                </Grid>
                <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
                  <img src={Image2} alt="" />
                  <Typography sx={Styles}>
                    Highest number of documented marriages online - Limca Book
                    of Records
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
        </>
      ))}
      <AboutMatirimony />
      <Footer />
    </>
  );
};

export default ViewProfile;
