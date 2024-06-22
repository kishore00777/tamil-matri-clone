import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../Assets/Religion/tamilmatrimony-logo.png";
import Image1 from "../Assets/Religion/contact-genuine-icon.png";
import Image2 from "../Assets/Religion/limca-book-icon.png";
import Image3 from "../Assets/Religion/most-trust-icon.png";
import RegisterBackground from "../Assets/Religion/RegisterBackground.png";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Myself",
  "Daughter",
  "April Tucker",
  "Son",
  "Sister",
  "Brother",
  "Relative",
  "Friend",
];

export const Register = () => {
  // const theme = useTheme();
  const [personName, setPersonName] = React.useState();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `URL(${RegisterBackground})`,
          backgroundSize: "cover",
          paddingY: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid xs={10} sx={{ paddingBottom: 35 }}>
              <Typography
                sx={{ color: "black", fontSize: "11px", textAlign: "start" }}
              >
                From Matrimony.com Group
              </Typography>
              <img src={Logo} alt="" />
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  letterSpacing: "2.1px",
                  marginTop: 5,
                }}
              >
                Your search for the perfect match ends here!
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  letterSpacing: "2.1px",
                }}
              >
                #BeChoosy with Biggest Matrimony Service for Tamils
              </Typography>
              <Grid
                container
                sx={{
                  backgroundColor: "white",
                  // width: "78%",
                  justifyContent: "space-between",
                  borderRadius: "14px",
                  marginTop: 3,
                }}
              >
                <Grid sx={{ margin: "18px 0px 18px 0px" }}>
                  <Typography sx={{ paddingLeft: 1.7 }}>
                    Matrimony Profile for
                  </Typography>
                  <Box sx={{ borderRight: "1px solid ", paddingRight: 1 }}>
                    <FormControl sx={{ width: 190, paddingLeft: 0.2 }}>
                      <Select
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderRadius: 0,
                          },
                          "& .MuiOutlinedInput-input": {
                            paddingY: 0.8,
                          },
                        }}
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                        //   if (selected.length === 0) {
                        //     return <em>Select Profile</em>;
                        //   }
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            //   style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid sx={{ margin: "18px 0px 18px 0px" }}>
                  <Typography sx={{ paddingLeft: 1.7 }}>Name</Typography>
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        borderRadius: 0,
                        borderRight: "1px solid ",
                      },
                      "& .MuiOutlinedInput-input": {
                        paddingY: 0.8,
                      },
                    }}
                    id="outlined-basic"
                    placeholder="Enter Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid sx={{ margin: "18px 0px 18px 0px" }}>
                  <Typography sx={{ paddingLeft: 1.7 }}>
                    Mobile Number
                  </Typography>
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        borderRadius: 0,
                      },
                      "& .MuiOutlinedInput-input": {
                        paddingY: 0.8,
                      },
                    }}
                    id="outlined-basic"
                    placeholder="Enter Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <Button
                    sx={{
                      fontSize: "16px",
                      letterSpacing: "1px",
                      "&:hover": {
                        backgroundColor: "#f88919",
                      },
                      color: "#ffff",
                      backgroundColor: "#f88919",
                      height: "100%",
                      borderRadius: 0,
                      paddingX: 4,
                      borderRadius: "0px 14px 14px 0px",
                    }}
                  >
                    REGISTER FREE
                  </Button>
                </Grid>
              </Grid>
              <Typography sx={{ fontSize: "12px", textAlign: "end", mt: 1.5 }}>
                By clicking register free, I agree to the <Link>T&C</Link> and{" "}
                <Link>Privacy Policy</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ backgroundColor: "#000000", marginBottom: 1 }}>
          <Container maxWidth="lg">
            <Grid
              container
              sx={{ justifyContent: "space-around", paddingY: 2 }}
            >
              <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
                <img src={Image1} alt="" />
                <Typography
                  sx={{ color: "white", textWrap: "wrap", fontSize: "14px" }}
                >
                  Contact genuine profiles with 100% verified mobile numbers
                </Typography>
              </Grid>
              <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
                <img src={Image2} alt="" />
                <Typography
                  sx={{ color: "white", textWrap: "wrap", fontSize: "14px" }}
                >
                  Highest number of documented marriages online - Limca Book of
                  Records
                </Typography>
              </Grid>
              <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
                <img src={Image3} alt="" />
                <Typography
                  sx={{ color: "white", textWrap: "wrap", fontSize: "14px" }}
                >
                  The most trusted matrimony brand - The Brand Trust Report
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box sx={{padding: '18px 0px 23px 0px'}}>
        <Typography sx={{fontSize: '13px', textAlign: 'center'}}>
          This website is strictly for matrimonial purpose only and not a dating
          website.
        </Typography>
        <Typography sx={{fontSize: '13px', textAlign: 'center'}}>Copyright © 2024. All rights reserved.</Typography>
      </Box>
    </>
  );
};
