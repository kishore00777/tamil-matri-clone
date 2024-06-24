import React from "react";
import NavBar from "../Components/NavBar";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const Search = () => {
  const LableStyle = {
    fontSize: "18px",
    fontWeight: 600,
    color: "#666666",
  };
  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: 10 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid xs={12} md={8} sx={{ border: "1px solid #363636" }}>
            <Container maxWidth="xl">
              <Grid container>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Gender</Typography>
                </Grid>
                <Grid xs={12} md={9}>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Age</Typography>
                </Grid>
                <Grid xs={12} md={9}>
                  
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Search;
