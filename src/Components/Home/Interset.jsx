import { Box, Typography } from "@mui/material";
import React from "react";
import two from "../../Assets/Home/connect-matches-img.avif";
import three from "../../Assets/Home/ai-driven-img.avif";
import one from "../../Assets/Home/relevant-filters-img-new.avif";

export default function Interset() {
  return (
    <Box sx={{ p: 2, mt: 10 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={one} alt="" width={478} />
        <Box sx={{ padding: 1, ml: 15 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "40px",
              color: "black",
              fontWeight: "700",
              width: 500,
            }}
          >
            Choose by Interests, Location and other relevant filters
          </Typography>
          <Typography
            sx={{ fontSize: "19px", color: "black", width: 500, mt: 3 }}
          >
            Customize your partner search with filters like Hobbies, Location
            and more. Find your suitable match!
          </Typography>
        </Box>
      </Box>
      {/* -------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Box sx={{ padding: 1, mr: 15 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "40px",
              color: "black",
              fontWeight: "700",
              width: 500,
            }}
          >
            Connect with matches the way you like
          </Typography>

          <Typography
            sx={{ fontSize: "19px", color: "black", width: 500, mt: 3 }}
          >
            Customize your partner search with filters like Hobbies, Location
            and more. Find your suitable match!
          </Typography>
        </Box>{" "}
        <img src={two} alt="" width={478} />
      </Box>
      {/* -------------------------------------------------------------------------------------- */}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={three} alt="" width={478} />
        <Box sx={{ padding: 1, ml: 15 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "40px",
              color: "black",
              fontWeight: "700",
              width: 500,
            }}
          >
            AI-driven match recommendations to suit your preferences
          </Typography>
          <Typography
            sx={{ fontSize: "19px", color: "black", width: 500, mt: 3 }}
          >
            Our AI recommendation engine gives profile suggestions based on your
            preferences. Explore compatible matches from these.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
