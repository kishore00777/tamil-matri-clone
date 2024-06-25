import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CallIcon from "../../../Assets/Religion/call-icon.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({ data }) {
  const navigate = useNavigate();
  const handleViewProfile = (id) => {
    window.open(`/viewprofile?profileId=${id}`, "_blank");
  };
  return (
    <>
      <Grid sx={{ mt: 4 }}>
        {data.length === 0 ? (
          <Typography
            align="center"
            variant="h4"
            sx={{ fontSize: "20px", fontWeight: "700" }}
          >
            No Profile Found!!
          </Typography>
        ) : (
          data?.map((list) => (
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
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: "#f48420",
                        fontSize: "18px",
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                      onClick={() => handleViewProfile(list.id)}
                    >
                      View Full Profile
                    </Typography>
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
                      <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
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
      </Grid>
    </>
  );
}
