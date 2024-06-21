import { Container, Grid, Typography } from "@mui/material";
import limcaImage from "../Assets/limca-book.png";
import facebook from "../Assets/fb-icon.png";
import insta from "../Assets/instagrram-icon.png";
import twitter from "../Assets/twitter-icon.png";
import React from "react";
import {
  Help,
  MatrimonyServices,
  OtherService,
  Regional,
  WeddingServices,
  information,
} from "../Data/Data";

const style = {
  fontSize: "14px",
  color: "#999999",
  textDecoration: "none",
  display: "block",
  textAlign: "start",
  textWrap: "wrap",
  paddingBottom: "8px",
};
const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Grid container sx={{ justifyContent: "space-between", marginTop: 4 }}>
        <Grid xs={12} md={6} lg={2.3} sx={{ borderRight: "1px solid" }}>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              fontWeight: 600,
              textWrap: "wrap",
              marginBottom: 1.8,
            }}
          >
            Regional Matrimony Services
          </Typography>
          <Grid>
            {Regional.map((items) => (
              <a style={style} href="hi">
                {items}
              </a>
            ))}
          </Grid>
        </Grid>
        <Grid xs={12} md={6} lg={2.3} sx={{ borderRight: "1px solid" }}>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              fontWeight: 600,
              textWrap: "wrap",
              marginBottom: 1.8,
            }}
          >
            Help & Support
          </Typography>
          <Grid>
            {Help.map((items) => (
              <a style={style} href="hi">
                {items}
              </a>
            ))}
          </Grid>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              fontWeight: 600,
              textWrap: "wrap",
              marginBottom: 1.8,
            }}
          >
            Our other Services
          </Typography>
          <Grid>
            {OtherService.map((items) => (
              <a style={style} href="hi">
                {items}
              </a>
            ))}
          </Grid>

          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              fontWeight: 600,
              textWrap: "wrap",
              marginBottom: 1.8,
            }}
          >
            Our Wedding Services
          </Typography>
          <Grid>
            {WeddingServices.map((items) => (
              <a style={style} href="hi">
                {items}
              </a>
            ))}
          </Grid>
        </Grid>
        <Grid xs={12} md={6} lg={2.3} sx={{ borderRight: "1px solid" }}>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: 1.8,
            }}
          >
            Information
          </Typography>
          <Grid>
            {information.map((items) => (
              <a style={style} href="hi">
                {items}
              </a>
            ))}
          </Grid>
        </Grid>
        <Grid xs={12} md={6} lg={2.3}>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: 1.8,
            }}
          >
            Related Matrimony Services
          </Typography>
          <Grid>
            {MatrimonyServices.map((items) => (
              <a style={style} href="hi">
                {items}
              </a>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <hr style={{ margin: 0 }} />
      <Grid container sx={{ marginY: 3 }}>
        <Grid xs={12} sm={6}>
          <Typography
            sx={{ textAlign: "start", fontSize: "13px", color: "#999999" }}
          >
            This website is strictly for matrimonial purpose only and not a
            dating website. Copyright © 2024. All rights reserved.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center", columnGap: 1 }}
        >
          <img src={limcaImage} alt="" />
          <Grid>
            <Typography
              sx={{ textAlign: "start", fontSize: "13px", color: "#999999" }}
            >
              The Limca Book <br />
              of records
            </Typography>
            <Typography
              sx={{ textAlign: "start", fontSize: "13px", color: "#999999" }}
            >
              Highest Number of Marriages
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} sm={6} md={2}>
          <Typography sx={{ color: "#999999" }}>Follow Us on:</Typography>
          <Grid
            sx={{ display: "flex", gap: 1.8, justifyContent: "center", mt: 1 }}
          >
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </Grid>
        </Grid>
      </Grid>
      <hr />
    </Container>
  );
};

export default Footer;
