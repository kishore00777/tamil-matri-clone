import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  // Pagination,
  // Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CallIcon from "../../../Assets/Religion/call-icon.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profiles } from "../../../Data/Profiles";
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const AnyOne = location.search;

  const Gender = params.get("gender");
  const AgeFrom = params.get("ageFrom");
  const AgeTo = params.get("ageTo");
  const HeightFrom = params.get("fromHeight");
  const HeightTo = params.get("toHeight");
  const religion = params.get("religion");
  const Caste = params.get("Caste");
  const City = params.get("City");
  const State = params.get("State");
  const Country = params.get("Country");
  const Occupation = params.get("Occupation");
  const Education = params.get("education");
  const MaritalStatus = params.get("maritalStatus");
  const Tounge = params.get("tongue");
  const viewMore = params.get("viewmore");

  const filtFemale = profiles.filter(
    (list) =>
      list.Gender === "Female" &&
      (list.cate === Gender ||
        list.Religion === religion ||
        list.caste === Caste ||
        list.City === City ||
        list.State === State ||
        list.country === Country ||
        list.Education === Education ||
        list.occupation === Occupation)
  );

  const filtMale = profiles.filter(
    (list) =>
      list.Gender === "Male" &&
      (list.cate === Gender ||
        list.Religion === religion ||
        list.caste === Caste ||
        list.City === City ||
        list.State === State ||
        list.country === Country ||
        list.Education === Education ||
        list.occupation === Occupation)
  );

  const SearchFilter = profiles.filter(
    (list) =>
      list.Gender === Gender &&
      (AgeFrom !== "any" ? list.Age >= AgeFrom : true) &&
      (AgeTo !== "any" ? list.Age <= AgeTo : true) &&
      (religion !== "any" ? list.Religion === religion : true) &&
      (Caste !== "any" ? list.caste === Caste : true)
  );

  const SearchAll = profiles.filter(
    (list) =>
      list.Gender === Gender &&
      (AgeFrom !== "any" ? list.Age >= AgeFrom : true) &&
      (AgeTo !== "any" ? list.Age <= AgeTo : true) &&
      (HeightFrom !== "any" ? list.Height >= HeightFrom : true) &&
      (HeightTo !== "any" ? list.Height <= HeightTo : true) &&
      (MaritalStatus !== "any" ? list.MaritalStatus === MaritalStatus : true) &&
      (religion !== "any" ? list.Religion === religion : true) &&
      (Tounge !== "any" ? list.Language === Tounge : true) &&
      (Caste !== "any" ? list.caste === Caste : true) &&
      (Country !== "any" ? list.country === Country : true) &&
      (State !== "any" ? list.State === State : true) &&
      (City !== "any" ? list.City === City : true) &&
      (Education !== "any" ? list.Education === Education : true)
  );

  console.log(SearchAll);

  const handleView = (e) => {
    navigate(`/matrimony${AnyOne}&viewmore=${e}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  console.log(
    Gender,
    AgeFrom,
    AgeTo,
    HeightFrom,
    HeightTo,
    MaritalStatus,
    Tounge,
    religion,
    Caste,
    City,
    State,
    Country,
    Education
  );

  return (
    <>
      {Gender !== null &&
      AgeFrom !== null &&
      AgeTo !== null &&
      HeightFrom !== null &&
      HeightTo !== null &&
      MaritalStatus !== null &&
      Tounge !== null &&
      religion !== null &&
      Caste !== null &&
      State !== null &&
      Country !== null &&
      City !== null &&
      Education !== null ? (
        <>
          <Grid>
            <Typography
              align="center"
              sx={{
                paddingY: 1.8,
                backgroundColor: "#f6f6f6",
                fontSize: "28px",
                border: "1px solid #e1dbdb",
              }}
            >
              {Gender === "Female" ? "Tamil Brides" : "Tamil Grooms"}
            </Typography>
          </Grid>
<<<<<<< Updated upstream
          <Grid sx={{ mt: 4 }}>
            {SearchFilter.length === 0 ? (
              <Typography
                align="center"
                variant="h4"
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                No Profile Found!!
              </Typography>
            ) : (
              SearchFilter?.map((list) => (
                <Card
                  key={list.id}
                  sx={{
                    mb: 3,
                    minWidth: 275,
                    boxShadow: "0px 2px 5px 0px rgba(144,143,143,1)",
                    WebkitBoxShadow: "0px 2px 5px 0px rgba(144,143,143,1)",
                    MozBoxShadow: "0px 2px 5px 0px rgba(144,143,143,1)",
                  }}
                >
                  <CardContent>
                    <Grid container sx={{ justifyContent: "space-around" }}>
                      <Grid xs={12} md={3}>
                        <Grid
                          sx={{
                            position: "relative",
                            width: 150,
                            height: 150,
                            // overflow: "hidden",
                          }}
                        >
                          <img
                            style={{
                              borderRadius: "13px 12px 13px 13px",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            src={list.ProfileImage}
                            alt="imag"
                          />
                          <Box
                            style={{
                              display: "block",
                              position: "absolute",
                              left: "70%",
                              top: "70%",
                              zIndex: 2,
                              cursor: "pointer",
                            }}
                            onClick={() => navigate("/registerform")}
                          >
                            <img src={CallIcon} alt="call icon" />
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid xs={12} md={8} sx={{ textAlign: "left" }}>
                        <Typography sx={{ fontWeight: "600" }}>
                          {list?.Age}yrs, {list?.Height}, {list?.Language}
                        </Typography>
                        {/* <Typography>{list?.FatherName}</Typography> */}
                        <Typography sx={{ fontWeight: "600" }}>
                          {list?.caste},&nbsp;{list?.Religion}
                        </Typography>
                        <Typography sx={{ marginBottom: 1, fontWeight: "600" }}>
                          {list?.Education}&nbsp;/&nbsp;
                          {list?.occupation}
                          &nbsp;{list?.Address}
                        </Typography>
                        <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "#f48420",
                                    fontSize: "18px",
                                    fontWeight: "bolder",
                                  }}
                                  to={"/viewprofile"}
                                >
                                  View Full Profile
                                </Link>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        mt: 3,
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Grid xs={12} md={4}>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: 0.3,
                            color: "#666666",
                            fontWeight: "bolder",
                          }}
                        >
                          <FiberManualRecordIcon fontSize="1px" />
                          Last Login : 3 months ago
                        </Typography>
                      </Grid>
                      <Grid xs={12} md={7}>
                        <Grid
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            border: "1px solid #e1dbdb",
                            paddingY: 2,
                            borderRadius: 2.5,
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "14px", fontWeight: 600 }}
                          >
                            To View Full Profile
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#fe9607",
                              paddingY: 1,
                              paddingX: 3,
                              fontSize: "15px",
                              borderRadius: "12px",
                              fontWeight: 600,
                              "&:hover": {
                                backgroundColor: "#fe9607",
                              },
                            }}
                            onClick={() => navigate("/registerform")}
                          >
                            REGISTER FREE
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))
            )}
=======
          <ProfileCard data={SearchAll} />
        </>
      ) : Gender !== null &&
        AgeFrom !== null &&
        AgeTo !== null &&
        religion !== null &&
        Caste !== null ? (
        <>
          <Grid>
            <Typography
              align="center"
              sx={{
                paddingY: 1.8,
                backgroundColor: "#f6f6f6",
                fontSize: "28px",
                border: "1px solid #e1dbdb",
              }}
            >
              {Gender === "Female" ? "Tamil Brides" : "Tamil Grooms"}
            </Typography>
>>>>>>> Stashed changes
          </Grid>
          <ProfileCard data={SearchFilter} />
        </>
      ) : (
        <>
          {AnyOne === "?gender=Tamil%20Grooms" ||
          viewMore === "grooms" ? null : (
            <>
              <Grid>
                <Typography
                  align="center"
                  sx={{
                    paddingY: 1.8,
                    backgroundColor: "#f6f6f6",
                    fontSize: "28px",
                    border: "1px solid #e1dbdb",
                  }}
                >
                  Tamil Brides
                </Typography>
              </Grid>
              {/* <ProfileCard data={filtFemale} /> */}
              <Grid sx={{ mt: 4 }}>
                {filtFemale.length === 0 ? (
                  <Typography
                    align="center"
                    variant="h4"
                    sx={{ fontSize: "20px", fontWeight: "700" }}
                  >
                    No Profile Found!!
                  </Typography>
                ) : (
                  filtFemale?.slice(0, viewMore === "brides" ? 11111 : 5).map(
                    (list) =>
                      list.Gender === "Female" && (
                        <Card
                          key={list.id}
                          sx={{
                            mb: 3,
                            minWidth: 275,
                            boxShadow: "0px 2px 5px 0px rgba(144,143,143,1)",
                            WebkitBoxShadow:
                              "0px 2px 5px 0px rgba(144,143,143,1)",
                            MozBoxShadow: "0px 2px 5px 0px rgba(144,143,143,1)",
                          }}
                        >
                          <CardContent>
                            <Grid
                              container
                              sx={{ justifyContent: "space-around" }}
                            >
                              <Grid xs={12} md={3}>
                                <Grid
                                  sx={{
                                    position: "relative",
                                    width: 150,
                                    height: 150,
                                    // overflow: "hidden",
                                  }}
                                >
                                  <img
                                    style={{
                                      borderRadius: "13px 12px 13px 13px",
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                    src={list.ProfileImage}
                                    alt="imag"
                                  />
                                  <Box
                                    style={{
                                      display: "block",
                                      position: "absolute",
                                      left: "70%",
                                      top: "70%",
                                      zIndex: 2,
                                      cursor: "pointer",
                                    }}
                                    onClick={() => navigate("/registerform")}
                                  >
                                    <img src={CallIcon} alt="call icon" />
                                  </Box>
                                </Grid>
                              </Grid>
                              <Grid xs={12} md={8} sx={{ textAlign: "left" }}>
                                <Typography sx={{ fontWeight: "600" }}>
                                  {list?.Age}yrs, {list?.Height},{" "}
                                  {list?.Language}
                                </Typography>
                                {/* <Typography>{list?.FatherName}</Typography> */}
                                <Typography sx={{ fontWeight: "600" }}>
                                  {list?.caste},&nbsp;{list?.Religion}
                                </Typography>
                                <Typography
                                  sx={{ marginBottom: 1, fontWeight: "600" }}
                                >
                                  {list?.Education}&nbsp;/&nbsp;
                                  {list?.occupation}
                                  &nbsp;{list?.Address}
                                </Typography>
                                <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "#f48420",
                                    fontSize: "18px",
                                    fontWeight: "bolder",
                                  }}
                                  to={"/viewprofile"}
                                >
                                  View Full Profile
                                </Link>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              sx={{
                                mt: 3,
                                alignItems: "center",
                                justifyContent: "space-around",
                              }}
                            >
                              <Grid xs={12} md={4}>
                                <Typography
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: 0.3,
                                    color: "#666666",
                                    fontWeight: "bolder",
                                  }}
                                >
                                  <FiberManualRecordIcon fontSize="1px" />
                                  Last Login : 3 months ago
                                </Typography>
                              </Grid>
                              <Grid xs={12} md={7}>
                                <Grid
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    border: "1px solid #e1dbdb",
                                    paddingY: 2,
                                    borderRadius: 2.5,
                                  }}
                                >
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 600 }}
                                  >
                                    To View Full Profile
                                  </Typography>
                                  <Button
                                    variant="contained"
                                    sx={{
                                      backgroundColor: "#fe9607",
                                      paddingY: 1,
                                      paddingX: 3,
                                      fontSize: "15px",
                                      borderRadius: "12px",
                                      fontWeight: 600,
                                      "&:hover": {
                                        backgroundColor: "#fe9607",
                                      },
                                    }}
                                    onClick={() => navigate("/registerform")}
                                  >
                                    REGISTER FREE
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      )
                  )
                )}
                {viewMore === "brides"
                  ? null
                  : filtFemale.length > 5 && (
                      <Typography
                        align="right"
                        sx={{
                          cursor: "pointer",
                          fontWeight: "600",
                          color: "orange",
                        }}
                        onClick={() => handleView("brides")}
                      >
                        View More
                        <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />{" "}
                      </Typography>
                    )}
                {/* <Stack spacing={2}>
          <Pagination
            sx={{ display: "flex", justifyContent: "end" }}
            count={ProfileDetails.length}
            variant="outlined"
            shape="rounded"
          />
        </Stack> */}
              </Grid>
            </>
          )}

          {/* ----------------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------------------------------------------- */}
          <br />
          <br />
          <br />
          {AnyOne === "?gender=Tamil%20Brides" ||
          viewMore === "brides" ? null : (
            <>
              <Grid>
                <Typography
                  align="center"
                  sx={{
                    paddingY: 1.8,
                    backgroundColor: "#f6f6f6",
                    fontSize: "28px",
                    border: "1px solid #e1dbdb",
                  }}
                >
                  Tamil Grooms
                </Typography>
              </Grid>
              <Grid sx={{ mt: 4 }}>
                {filtMale.length === 0 ? (
                  <Typography
                    align="center"
                    variant="h4"
                    sx={{ fontSize: "20px", fontWeight: "700" }}
                  >
                    No Profile Found!!
                  </Typography>
                ) : (
                  filtMale.slice(0, viewMore === "grooms" ? 111111 : 5).map(
                    (list) =>
                      list.Gender === "Male" && (
                        <Card
                          key={list.id}
                          sx={{
                            mb: 3,
                            minWidth: 275,
                            boxShadow: "0px 2px 5px 0px rgba(144,143,143,1)",
                            WebkitBoxShadow:
                              "0px 2px 5px 0px rgba(144,143,143,1)",
                            MozBoxShadow: "0px 2px 5px 0px rgba(144,143,143,1)",
                          }}
                        >
                          <CardContent>
                            <Grid
                              container
                              sx={{ justifyContent: "space-around" }}
                            >
                              <Grid xs={12} md={3}>
                                <Grid
                                  sx={{
                                    position: "relative",
                                    width: 150,
                                    height: 150,
                                    // overflow: "hidden",
                                  }}
                                >
                                  <img
                                    style={{
                                      borderRadius: "13px 12px 13px 13px",
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                    src={list.ProfileImage}
                                    alt=""
                                  />
                                  <img
                                    style={{
                                      display: "block",
                                      position: "absolute",
                                      left: "70%",
                                      top: "70%",
                                    }}
                                    src={CallIcon}
                                    alt=""
                                  />
                                </Grid>
                              </Grid>
                              <Grid xs={12} md={8} sx={{ textAlign: "left" }}>
                                <Typography sx={{ fontWeight: "600" }}>
                                  {list?.Age}yrs, {list?.Height},{" "}
                                  {list?.Language}
                                </Typography>
                                {/* <Typography sx={{fontWeight:'600'}}>{list?.FatherName}</Typography> */}
                                <Typography sx={{ fontWeight: "600" }}>
                                  {list?.caste},&nbsp;{list?.Religion}
                                </Typography>
                                <Typography
                                  sx={{ marginBottom: 1, fontWeight: "600" }}
                                >
                                  {list?.Education}&nbsp;/&nbsp;
                                  {list?.occupation}
                                  &nbsp;{list?.Address}
                                </Typography>
                                <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "#f48420",
                                    fontSize: "18px",
                                    fontWeight: "bolder",
                                  }}
                                  to={"/viewprofile"}
                                >
                                  View Full Profile
                                </Link>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              sx={{
                                mt: 3,
                                alignItems: "center",
                                justifyContent: "space-around",
                              }}
                            >
                              <Grid xs={12} md={4}>
                                <Typography
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: 0.3,
                                    color: "#666666",
                                    fontWeight: "bolder",
                                  }}
                                >
                                  <FiberManualRecordIcon fontSize="1px" />
                                  Last Login : 3 months ago
                                </Typography>
                              </Grid>
                              <Grid xs={12} md={7}>
                                <Grid
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    border: "1px solid #e1dbdb",
                                    paddingY: 2,
                                    borderRadius: 2.5,
                                  }}
                                >
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 600 }}
                                  >
                                    To View Full Profile
                                  </Typography>
                                  <Button
                                    variant="contained"
                                    sx={{
                                      backgroundColor: "#fe9607",
                                      paddingY: 1,
                                      paddingX: 3,
                                      fontSize: "15px",
                                      borderRadius: "12px",
                                      fontWeight: 600,
                                      "&:hover": {
                                        backgroundColor: "#fe9607",
                                      },
                                    }}
                                    onClick={() => navigate("/registerform")}
                                  >
                                    REGISTER FREE
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      )
                  )
                )}
                {viewMore === "grooms"
                  ? null
                  : filtMale.length > 5 && (
                      <Typography
                        align="right"
                        sx={{
                          cursor: "pointer",
                          fontWeight: "600",
                          color: "orange",
                        }}
                        onClick={() => handleView("grooms")}
                      >
                        View More
                        <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />{" "}
                      </Typography>
                    )}
                {/* <Stack spacing={2}>
          <Pagination
            sx={{ display: "flex", justifyContent: "end" }}
            count={ProfileDetails.length}
            variant="outlined"
            shape="rounded"
          />
        </Stack> */}
              </Grid>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProfileList;
