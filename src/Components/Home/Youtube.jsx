import { Box, Typography } from "@mui/material";
import React from "react";

export default function Youtube() {
  return (
    <Box sx={{ bgcolor: "#FDFCE7", height: "70vh", pb: 5 }}>
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
          }}
          scrolling="no"
        />
      </Box>
    </Box>
  );
}
