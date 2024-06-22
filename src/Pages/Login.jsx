import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../Assets/Religion/tamilmatrimony-logo.png";
import Image1 from "../Assets/Religion/contact-genuine-icon.png";
import Image2 from "../Assets/Religion/limca-book-icon.png";
import Image3 from "../Assets/Religion/most-trust-icon.png";
import MobileImage from "../Assets/Religion/mobile-download-app.png";
import AndriodImg from "../Assets/Religion/download-andriod-img.png";
import IOSImg from "../Assets/Religion/download-ios-img.png";
import RegisterBackground from "../Assets/Religion/login-bg-tamil.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import AboutMatirimony from "../Components/AboutMatirimony";
import Footer from "../Components/Footer";

const Styles = {
    color: "#000000", textWrap: "wrap", fontSize: "16px"
}

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid xs={10}>
            <Typography
              sx={{ color: "black", fontSize: "11px", textAlign: "start" }}
            >
              From Matrimony.com Group
            </Typography>
            <img src={Logo} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundImage: `URL(${RegisterBackground})`,
          backgroundSize: "cover",
          paddingTop: 5,
          paddingBottom: 3,
          height: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: "end" }}>
            <Grid xs={5}>
              <Card sx={{ borderRadius: "12px" }}>
                <CardContent sx={{ padding: "30px 30px 4px 30px" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      letterSpacing: "0.72px",
                      fontWeight: "550",
                    }}
                  >
                    Existing Member? Login
                  </Typography>
                  <TextField
                    sx={{
                      width: "100%",
                      marginTop: 5,
                      "& .MuiOutlinedInput-notchedOutline": {
                        "&:focus": {
                          backgroundColor: "transparent",
                        },
                      },
                      "& .MuiOutlinedInput-input": {
                        paddingY: "14px",
                      },
                    }}
                    id="outlined-basic"
                    placeholder="Enter Mobile No \ Email Id"
                    variant="outlined"
                  />
                  <FormControl
                    sx={{ width: "100%", marginTop: 2.5 }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-notchedOutline": {
                          "&:focus": {
                            backgroundColor: "transparent",
                          },
                        },
                        "& .MuiOutlinedInput-input": {
                          paddingY: "14px",
                        },
                      }}
                      id="outlined-adornment-password"
                      placeholder="Enter Password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControlLabel
                    sx={{ marginTop: 2.5 }}
                    value="end"
                    size="small"
                    control={<Checkbox />}
                    label="Keep me logged in"
                    labelPlacement="Keep me logged in"
                  />
                  <br />
                  <Link>
                    <Button
                      sx={{
                        backgroundColor: "#ff9800",
                        fontSize: "16px",
                        color: "#ffffff",
                        width: "60%",
                        paddingY: 1.5,
                        borderRadius: "26px",
                        marginTop: 2,
                        marginBottom: 4,
                        "&:hover": {
                          backgroundColor: "#ff9800",
                        },
                      }}
                      variant="contained"
                    >
                      LOGIN
                    </Button>
                  </Link>
                  <Typography sx={{ fontSize: "18px", color: "#000000" }}>
                    Trouble logging in?
                  </Typography>
                  <Grid sx={{ columnGap: 2, marginTop: 0.8, display: "flex" }}>
                    <Link
                      style={{
                        fontSize: "16px",
                        color: "black",
                        textDecoration: "none",
                        borderRight: "2px solid",
                        paddingRight: "15px",
                      }}
                    >
                      Login with OTP
                    </Link>
                    <Link
                      style={{
                        fontSize: "16px",
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </CardContent>
              </Card>
              <Card sx={{ borderRadius: "12px", marginY: 1 }}>
                <Grid
                  sx={{
                    padding: "18px 0px 18px 30px",
                    display: "flex",
                    alignItems: "center",
                    columnGap: 1,
                  }}
                >
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        letterSpacing: "0.72px",
                      }}
                    >
                      Not a Member?
                    </Typography>
                  </Grid>
                  <Grid>
                    <Link
                    to={'/registerform'}
                      style={{
                        fontSize: "20px",
                        color: "#ed6402",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      REGISTER FREE
                    </Link>
                  </Grid>
                </Grid>
              </Card>
              <Card sx={{ borderRadius: "12px", marginY: 1 }}>
                <Grid sx={{padding: "15px",}}>
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: 1,
                      borderRadius: '10px',
                      border: "1px solid #363636",
                      padding: "5px 15px 0px 15px",
                    }}
                  >
                    <Grid sx={{display: 'flex'}}>
                      <img src={MobileImage} alt="" />
                    </Grid>
                    <Grid>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          letterSpacing: "0.72px",
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        Get instant updates about your matches!
                        <br /> Download our app now!
                      </Typography>
                    </Grid>
                    <Grid>
                      <img
                        style={{ display: "block", marginBottom: 1 }}
                        src={AndriodImg}
                        alt=""
                      />
                      <img style={{ display: "block" }} src={IOSImg} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
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
                <Typography
                  sx={Styles}
                >
                  Contact genuine profiles with 100% verified mobile numbers
                </Typography>
              </Grid>
              <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
                <img src={Image2} alt="" />
                <Typography
                  sx={Styles}
                >
                  Highest number of documented marriages online - Limca Book of
                  Records
                </Typography>
                {/* <Typography sx={{fontSize: '12px'}}>- Limca Book of Records</Typography> */}
              </Grid>
              <Grid xs={12} md={4} sx={{ display: "flex", columnGap: 2.8 }}>
                <img src={Image3} alt="" />
                <Typography
                  sx={Styles}
                >
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

export default Login;
