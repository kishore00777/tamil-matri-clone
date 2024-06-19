import {
  Button,
  Card,
  CardContent,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Profile from "../../../Assets/Religion/Profile.png";
import CallIcon from "../../../Assets/Religion/call-icon.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ProfileDetails } from "../../../Data";

const ProfileList = () => {
  return (
    <>
      <Grid>
        <Typography
          sx={{
            paddingY: 1.8,
            backgroundColor: "#f6f6f6",
            fontSize: "28px",
            border: "1px solid #e1dbdb",
          }}
        >
          Tamil Birds
        </Typography>
      </Grid>
      <Grid sx={{ mt: 4 }}>
        {ProfileDetails.map((list) => (
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
                  <Grid sx={{ position: "relative" }}>
                    <img
                      style={{ borderRadius: "13px 12px 13px 13px" }}
                      src={Profile}
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
                  <Typography>
                    {list?.Age}, {list?.Height}, {list?.Language}
                  </Typography>
                  <Typography>{list?.FatherName}</Typography>
                  <Typography sx={{ marginBottom: 1 }}>
                    {list?.Address}
                  </Typography>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#f48420",
                      fontSize: "18px",
                      fontWeight: "bolder",
                    }}
                    href=""
                  >
                    View Full Profile
                  </a>
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
                    >
                      REGISTER FREE
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
        <Stack spacing={2}>
          <Pagination
            sx={{ display: "flex", justifyContent: "end" }}
            count={ProfileDetails.length}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Grid>
    </>
  );
};

export default ProfileList;
