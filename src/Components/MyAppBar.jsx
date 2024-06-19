import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../Assets/Home/tamilmatrimony-logo.webp";

export default function MyAppBar() {
  return (
    <AppBar sx={{ bgcolor: "white", padding: 1 }}>
      <Container>
        <Box sx={{ width: 150 }}>
          <Typography sx={{ color: "black", fontSize: "11px" }}>
            From Matrimony.com Group
          </Typography>
          <img src={logo} alt="Logo" width={150} />
        </Box>
      </Container>
    </AppBar>
  );
}
