import React from "react";
import Slider from "react-slick";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProfileImage from "../../Assets/Religion/Profile.png";
import Imgs from "../../Assets/Religion/call-icon.png";
import { SliderImg } from "../../Data";

export default function Carousels() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // customPaging: (i) => (
    //   <Grid container spacing={2}>
    //     {SliderImg.map((i) => (
    //       <Grid item>
    //         <img
    //           src={i}
    //           alt={`hello`}
    //           style={{ width: "50px", height: "50px" }}
    //         />
    //       </Grid>
    //     ))}
    //   </Grid>
    // ),

    appendDots: (dots) => (
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {dots}
        </ul>
      </Grid>
    ),
    customPaging: (i) => (
      <div style={{marginTop: 55}}>
        <img
          src={SliderImg[i]}
          alt={`dot-${i}`}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "2px solid orange",
          }}
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
            <Box sx={{ p: 4 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid xs={6}>
                  <Typography>
                    "Bhuvana is a Tamil architect who settled down in Mumbai.
                    She was searching for her soulmate to complete her life.She
                    knew that love was out there waiting for her, and she was
                    determined to find it even though the wait was long. After
                    seeing the advertisements for Tamil Matrimony, she created
                    her profile on the portal. One day, she stumbled upon...
                  </Typography>
                  
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Bhuvana & Jeganrajan
                  </Typography>
                  <Typography variant="h5">TamilMatrimony</Typography>
                </Grid>
                <Grid xs={5}>
                  <img
                    style={{ width: "80%", borderRadius: "18px" }}
                    src={ProfileImage}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid xs={6}>
                  <Typography>
                    "Bhuvana is a Tamil architect who settled down in Mumbai.
                    She was searching for her soulmate to complete her life.She
                    knew that love was out there waiting for her, and she was
                    determined to find it even though the wait was long. After
                    seeing the advertisements for Tamil Matrimony, she created
                    her profile on the portal. One day, she stumbled upon...
                  </Typography>
                  <Button size="large" sx={{ color: "#ed6402" }}>
                    Read More
                  </Button>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Kowsi & Aravind
                  </Typography>
                  <Typography variant="h5">TamilMatrimony</Typography>
                </Grid>
                <Grid xs={5}>
                  <img
                    style={{ width: "80%", borderRadius: "18px" }}
                    src={ProfileImage}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid xs={6}>
                  <Typography>
                    "Kumaresh, a former member of TamilMatrimony who found his
                    life partner on the portal, feels the same. For Kumaresh,
                    his life completely changed after he met the love of his
                    life - Tamilarasi. When asked about his journey before
                    meeting Tamilarasi, Kumaresh says, “I registered my profile
                    on TamilMatrimony and opted for a premium membership...
                  </Typography>
                  <Button size="large" sx={{ color: "#ed6402" }}>
                    Read More
                  </Button>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Kumaresh & Aravind
                  </Typography>
                  <Typography variant="h5">TamilMatrimony</Typography>
                </Grid>
                <Grid xs={5}>
                  <img
                    style={{ width: "80%", borderRadius: "18px" }}
                    src={ProfileImage}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid xs={6}>
                  <Typography>
                    "Bhuvana is a Tamil architect who settled down in Mumbai.
                    She was searching for her soulmate to complete her life.She
                    knew that love was out there waiting for her, and she was
                    determined to find it even though the wait was long. After
                    seeing the advertisements for Tamil Matrimony, she created
                    her profile on the portal. One day, she stumbled upon...
                  </Typography>
                  <Button size="large" sx={{ color: "#ed6402" }}>
                    Read More
                  </Button>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Kowsi & Aravind
                  </Typography>
                  <Typography variant="h5">TamilMatrimony</Typography>
                </Grid>
                <Grid xs={5}>
                  <img
                    style={{ width: "80%", borderRadius: "18px" }}
                    src={ProfileImage}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 4 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid xs={6}>
                  <Typography>
                    "Bhuvana is a Tamil architect who settled down in Mumbai.
                    She was searching for her soulmate to complete her life.She
                    knew that love was out there waiting for her, and she was
                    determined to find it even though the wait was long. After
                    seeing the advertisements for Tamil Matrimony, she created
                    her profile on the portal. One day, she stumbled upon...
                  </Typography>
                  <Button size="large" sx={{ color: "#ed6402" }}>
                    Read More
                  </Button>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Kowsi & Aravind
                  </Typography>
                  <Typography variant="h5">TamilMatrimony</Typography>
                </Grid>
                <Grid xs={5}>
                  <img
                    style={{ width: "80%", borderRadius: "18px" }}
                    src={ProfileImage}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Box>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
