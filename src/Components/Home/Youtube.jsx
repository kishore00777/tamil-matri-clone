import { Box, Typography } from "@mui/material";
import React from "react";
import YoutubeBg from "../../Assets/Home/Youtube-background.png";

export default function Youtube() {
  return (
    <Box
      sx={{
        bgcolor: "#FDFCE7",
        pb: 10,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundImage: `url(${YoutubeBg})`,
          backgroundRepeat: "no-repeat",
          width: "80%",
          height: "100vh",
          top: "15%",
          left: "10%",
          zIndex: 1,
        }}
      ></Box>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontSize: "45px", fontWeight: "700", p: 5 }}
      >
        Watch our latest TVC
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <iframe
          src="https://www.tamilmatrimony.com/youtube-video.html"
          title="hi"
          width={754}
          height={481}
          style={{
            border: "none",
            overflow: "hidden",
            borderRadius: "10px",
            padding: 10,
            zIndex: 2,
          }}
          scrolling="no"
        />
      </Box>
    </Box>
  );
}
