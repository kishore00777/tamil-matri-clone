import { Box, Card, Divider, Typography } from "@mui/material";
import React from "react";
import long from "../../Assets/Home/bg-home-grop-img-tamil.jpg";
import i2 from "../../Assets/Home/records-new-2.svg";
import i3 from "../../Assets/Home/records-new-3.svg";
import i1 from "../../Assets/Home/records-new-1.svg";
import lim from "../../Assets/Home/limca-records-img-new.avif";

export default function Top() {
  const pic = [
    { icon: i1, h: "100%", t: "Mobile-verified profiles" },
    { icon: i2, h: "4 Crores+", t: "Customers served" },
    { icon: i3, h: "23 Years", t: "of successful matchmaking" },
  ];
  return (
    <>
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "31px",
            color: "black",
            width: 500,
            height: 68,
            fontWeight: "700",
          }}
        >
          The biggest and most trusted matrimony service for Tamils!
        </Typography>
        <Typography
          sx={{ fontSize: "19px", color: "black", width: 500, mt: 3 }}
        >
          Now find matches based on your hobbies & interests
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <img src={long} alt="pic" width={"100%"} style={{ marginTop: 25 }} />
        <Box sx={{ bgcolor: "#F7F8FB", width: "100%", height: "45vh" }}>
          {" "}
          <Card
            sx={{
              boxShadow: "0px 0px 5px 0px rgb(0,0,0,0.5)",
              position: "absolute",
              left: "25%",
              top: "50%",
              p: 5,
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              {" "}
              {pic.map((i, index) => (
                <>
                  <Box
                    key={index}
                    sx={{
                      p: 7,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={i.icon} alt="" />
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "40px",
                        color: "black",
                        fontWeight: "700",
                        mt: 2,
                      }}
                    >
                      {i.h}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "100",
                      }}
                    >
                      {i.t}
                    </Typography>
                  </Box>
                  {index === pic.length - 1 ? null : (
                    <Divider
                      orientation="vertical"
                      sx={{ width: 10, height: 100, color: "black", mt: 5 }}
                    />
                  )}
                </>
              ))}
            </Box>
            <Card
              sx={{
                boxShadow: "0px 0px 5px 0px rgb(0,0,0,0.5)",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                p: 2,
                width: "80%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <img src={lim} alt="" />{" "}
              <Divider
                orientation="vertical"
                sx={{ width: 10, height: 100, color: "black" }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "black",
                  fontWeight: "100",
                  width: 350,
                }}
              >
                Featured in the Limca Book of Records for highest number of
                documented marriages online
              </Typography>
            </Card>
          </Card>
        </Box>
      </Box>
    </>
  );
}
