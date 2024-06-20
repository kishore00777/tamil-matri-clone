import { Card, Typography } from "@mui/material";
import React from "react";

const FilterCards = ({ ListData }) => {
  return (
    <>
      {ListData.map((items) => (
        <Card
          variant="outlined"
          sx={{ minWidth: 275, mb: 2, paddingBottom: 1 }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              padding: "10px 0px 10px 30px",
              textAlign: "start",
              backgroundColor: "#f6f6f6",
              borderBottom: "1px solid #e1dbdb",
            }}
          >
            {items.Title}
          </Typography>
          {items.Subtitle.map((list) => (
            <Typography
              sx={{ textAlign: "start", paddingLeft: 3, cursor: "pointer" }}
            >
              {list}
            </Typography>
          ))}
        </Card>
      ))}
    </>
  );
};

export default FilterCards;
