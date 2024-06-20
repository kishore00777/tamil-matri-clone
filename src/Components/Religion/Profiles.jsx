import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import FilterList from "./Profile/FilterList";
import ProfileList from "./Profile/ProfileList";
import Background from "../../Assets/Religion/download-app-img.png";
import Andriod from "../../Assets/Religion/download-andriod-img.png";
import IOS from "../../Assets/Religion/download-ios-img.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Profiles = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="black"
      href="/"
      onClick={handleClick}
    >
      Matrimony
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="black"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Hindu Matrimony
    </Link>,
  ];
  return (
    <Container maxWidth="lg" sx={{marginTop: 1}}>
      <Grid container>
        <Grid xs={12} md={6}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Typography
            sx={{ fontSize: "22px", fontWeight: 700, textAlign: "start" }}
          >
            Tamil Hindu Matrimony
          </Typography>
          <Typography sx={{ textAlign: "start", marginTop: 0.5 }}>
            Lakhs of Tamil Bride & Groom Profiles
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{ textAlign: "end", position: "relative"}}>
            <img src={Background} alt="" />
            <Grid sx={{position: 'absolute', top: '4.5%' , right: '6%' , textAlign: 'center'}}>
              <Typography sx={{textWrap: 'wrap', '&:hover': {
                textDecoration: 'underline'
              }}}>
                Get instant updates about your matches!<br/> Download our app now!
              </Typography>
              <Grid sx={{display: 'flex', columnGap: 1, justifyContent: 'center'}}>
                <img src={Andriod} alt="" />
                <img src={IOS} alt="" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{marginBottom: 3, justifyContent: 'space-between', mt: 2}}>
        <Grid md={3.5}>
          <FilterList />
        </Grid>
        <Grid md={8}>
          <ProfileList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profiles;
