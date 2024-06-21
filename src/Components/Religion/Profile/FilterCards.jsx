import { Card, Typography } from "@mui/material";
import React from "react";
import { List } from "../../../Data/Data";
import { useNavigate } from "react-router-dom";

const FilterCards = () => {
  const navigate = useNavigate();

  const handleNavigate = (category, type) => {
    type === "By Gender" && navigate(`/matrimony?gender=${category}`);
    type === "By Religion" && navigate(`/matrimony?religion=${category}`);
    type === "By Caste" && navigate(`/matrimony?Caste=${category}`);
    type === "By City" && navigate(`/matrimony?City=${category}`);
    type === "By State" && navigate(`/matrimony?State=${category}`);
    type === "By Country" && navigate(`/matrimony?Country=${category}`);
    type === "By Education" && navigate(`/matrimony?education=${category}`);
    type === "By Profession" && navigate(`/matrimony?Occupation=${category}`);
  };

  return (
    <>
      {List.map((items) => (
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
              mb: 2,
            }}
          >
            {items.Title}
          </Typography>
          {items.Subtitle.map((list) => (
            <Typography
              sx={{ textAlign: "start", paddingLeft: 3, cursor: "pointer" }}
              onClick={() => handleNavigate(list, items.Title)}
            >
              {items.Title === "By Gender" ||
              items.Title === "By Education" ||
              items.Title === "By Profession"
                ? list
                : list + " Matrimony"}
            </Typography>
          ))}
        </Card>
      ))}
    </>
  );
};

export default FilterCards;
