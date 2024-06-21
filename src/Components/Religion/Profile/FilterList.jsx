import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FilterCards from "./FilterCards";
import { RelationShip } from "../../../Data/Data";

const FilterList = () => {
  const [relationShip, setRelationShip] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setRelationShip(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setRelationShip(event.target.value);
  };
  return (
    <>
      <Card variant="outlined" sx={{ minWidth: 275, marginBottom: 3 }}>
        <CardContent>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            Free Membership
          </Typography>

          <FormControl sx={{ m: 1, minWidth: "90%" }} size="small">
            <InputLabel id="demo-select-small-label">RelationShip</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={relationShip}
              label="RelationShip"
              onChange={handleChange}
            >
              {RelationShip.map((items) => (
                <MenuItem value="">{items}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ minWidth: "90%" }}
            label="Name"
            id="outlined-size-small"
            size="small"
          />

          <FormControl sx={{ m: 1, minWidth: "90%" }} size="small">
            <InputLabel id="demo-select-small-label">Country</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={country}
              label="RelationShip"
              onChange={handleChangeCountry}
            >
              {RelationShip.map((items) => (
                <MenuItem value="">{items}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ minWidth: "90%" }}
            label=""
            id="outlined-size-small"
            size="small"
            defaultValue="Enter Number"
          />
          <Typography sx={{ marginY: 1 }}>
            By Choosing to continue you agree to our Terms & Conditions and
            Privacy Policy
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fe9607",
              paddingX: 5,
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "#fe9607",
              },
            }}
          >
            REGISTER
          </Button>
        </CardContent>
      </Card>
      <FilterCards />
    </>
  );
};

export default FilterList;
