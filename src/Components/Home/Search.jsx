import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { SearchData } from "../../Data/Data";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [val, setVal] = useState(0);
  const navigate = useNavigate();

  const handlePush = (category, value) => {
    value === 0 && navigate(`/matrimony?religion=${category}`);
    value === 1 && navigate(`/matrimony?Caste=${category}`);
    value === 2 && navigate(`/matrimony?City=${category}`);
    value === 3 && navigate(`/matrimony?State=${category}`);
    value === 4 && navigate(`/matrimony?Country=${category}`);
    value === 5 && navigate(`/matrimony?Occupation=${category}`);
  };
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "700", fontSize: "25px", marginTop: 10 }}
      >
        Start your search for a perfect match at Tamil Matrimony
      </Typography>
      <Grid
        container
        sx={{
          p: 5,
          mt: 15,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "700", fontSize: "25px" }}
        >
          Browse Matrimonial Profiles By
        </Typography>
        <Grid sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          {SearchData.map((i, index) => (
            <Grid>
              <Button
                variant="h5"
                align="center"
                sx={{
                  color: i.value === val ? "green" : "black",
                  fontWeight: "700",
                  fontSize: "17px",
                  position: "relative",
                  "&:hover": {
                    color: "green",
                    textDecoration: "none",
                    fontWeight: "bold",
                    "&::after": {
                      width: "100%",
                      left: "0",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: i.value === val ? "100%" : "0",
                    height: "2px",
                    bottom: "-2px",
                    left: i.value === val ? "0%" : "50%",
                    backgroundColor: "red",
                    transition: "width 0.3s ease, left 0.3s ease",
                  },
                  margin: "0 30px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setVal(i.value);
                }}
              >
                {i.name}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
            maxWidth: "50%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          {SearchData[val].items.map((i) => (
            <Button
              variant="outlined"
              sx={{
                borderRadius: "55px",
                borderColor: "black",
                color: "black",
                m: "0 20px",
                minWidth: "auto",
                p: "2px 25px",
                margin: "15px",
              }}
              onClick={() => {
                handlePush(i, val);
              }}
            >
              {i}
            </Button>
          ))}
        </Grid>
        <Grid
          sx={{ width: "52%", marginRight: "auto", marginLeft: "auto", mt: 8 }}
        >
          <Typography>
            Welcome to TamilMatrimony, the biggest matrimony service for Tamils!
            Tamil Matrimony has helped lakhs of Tamils in India and worldwide
            find their life partners over the last 23 years. TamilMatrimony is
            the most trusted & No.1 choice for lakhs of Tamil brides and Tamil
            grooms looking for a suitable tamil life partner.
          </Typography>
          <br />
          <br />
          <Typography>
            தமிழ் மேட்ரிமோனி - தமிழர்களுக்கான மிகப்பெரிய திருமண சேவை.
            இலட்சக்கணக்கான வரன்களிலிருந்து உங்களுக்கு பொருத்தமான வாழ்க்கைத்
            துணையைக் கண்டறியவும். டவுன்லோட் தமிழ் மேட்ரிமோனி ஆப்.
          </Typography>{" "}
          <br />
          <br />
          <Typography>
            As the largest matchmaking service for Tamils, TamilMatrimony has
            helped lakhs of Tamil brides and grooms find their perfect match
            based on filters like interests, location, occupation, age and
            horoscope.
          </Typography>{" "}
          <br />
          <Typography sx={{ fontWeight: "700" }}>
            Find Tamil bride and groom profiles from India & worldwide
          </Typography>{" "}
          <br />
          <Typography>
            Find Tamil brides & grooms from NRI communities spread over US, UK,
            Malaysia, Singapore, UAE, Saudi Arabia, Canada and Australia and
            cities like New York, London, Dubai and more.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
