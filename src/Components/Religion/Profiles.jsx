import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterList from "./Profile/FilterList";
import ProfileList from "./Profile/ProfileList";
import Background from "../../Assets/Religion/download-app-img.png";
import Andriod from "../../Assets/Religion/download-andriod-img.png";
import IOS from "../../Assets/Religion/download-ios-img.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Profiles = () => {
  const [value, setValue] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const Gender = params.get("gender");
  const religion = params.get("religion");
  const Caste = params.get("Caste");
  const City = params.get("City");
  const State = params.get("State");
  const Country = params.get("Country");
  const Occupation = params.get("Occupation");
  const Education = params.get("education");
  const handleValue = () => {
    setValue(
      (Gender !== null &&
        (Gender === "Female"
          ? "Tamil Brides"
          : Gender === "Male"
          ? "Tamil Grooms"
          : Gender)) ||
        (religion !== null && `Tamil ${religion} Matrimony`) ||
        (Caste !== null && `Tamil ${Caste} Matrimony`) ||
        (City !== null && `Tamil Matrimony in ${City}`) ||
        (State !== null && `Tamil Matrimony in ${State}`) ||
        (Country !== null && `Tamil Matrimony in ${Country}`) ||
        (Occupation !== null && `Tamil ${Occupation} Matrimony`) ||
        (Education !== null && `Tamil ${Education} Matrimony`)
    );
  };
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
  useEffect(() => {
    handleValue();
  }, [Gender, religion, Caste, City, State, Country, Occupation, Education]);
  return (
    <Container maxWidth="lg" sx={{ marginTop: 1 }}>
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
            {value}
          </Typography>
          <Typography sx={{ textAlign: "start", marginTop: 0.5 }}>
            Lakhs of Tamil Bride & Groom Profiles
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{ textAlign: "end", position: "relative" }}>
            <img src={Background} alt="" />
            <Grid
              sx={{
                position: "absolute",
                top: "4.5%",
                right: "6%",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  textWrap: "wrap",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Get instant updates about your matches!
                <br /> Download our app now!
              </Typography>
              <Grid
                sx={{ display: "flex", columnGap: 1, justifyContent: "center" }}
              >
                <img src={Andriod} alt="" />
                <img src={IOS} alt="" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ marginBottom: 3, justifyContent: "space-between", mt: 2 }}
      >
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
