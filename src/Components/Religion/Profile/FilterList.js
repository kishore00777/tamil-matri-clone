import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FilterCards from "./FilterCards";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const RelationShip = [
  "Myself",
  "Daughter",
  "Son",
  "Sister",
  "Brother",
  "Relative",
  "Friend",
];

const List = [
  {
    Title: "By Gender",
    Subtitle: ["Tamil Brides", "Tamil Grooms"],
  },
  {
    Title: "By Religion",
    Subtitle: ["Hindu Matrimony", "Muslim Matrimony", "Christian Matrimony"],
  },
  {
    Title: "By Caste",
    Subtitle: [
      "Adi Dravida Matrimony",
      "Vanniyar Matrimony",
      "Nadar Matrimony",
      "Devar Matrimony",
      "Agamudayar Matrimony",
      "Vishwakarma Matrimony",
      "Nadar Matrimony",
      "Devar Matrimony",
    ],
  },
  {
    Title: "By City",
    Subtitle: [
      "Chennai Matrimony",
      "Coimbatore Matrimony",
      "Bangalore Matrimony",
      "Madurai Matrimony",
      "Salem Matrimony",
      "Tiruchirappalli Matrimony",
      "Erode Matrimony",
      "Vellore Matrimony",
      "Tiruppur Matrimony",
    ],
  },
  {
    Title: "By State",
    Subtitle: [
      "Tamil Nadu Matrimony",
      "Karnataka Matrimony",
      "Pondicherry Matrimony",
      "Kerala Matrimony",
      "Maharashtra Matrimony",
      "Andhra Pradesh Matrimony",
      "Delhi Matrimony",
      "Andaman & Nicobar Matrimony",
      "Telangana Matrimony",
    ],
  },
  {
    Title: "By Country",
    Subtitle: [
      "NRI Matrimony",
      "Malaysia NRI Matrimony",
      "UAE NRI Matrimony",
      "Singapore NRI Matrimony",
      "USA NRI Matrimony",
      "Sri Lanka NRI Matrimony",
      "Saudi Arabia NRI Matrimony",
      "Kuwait NRI Matrimony",
      "Qatar NRI Matrimony",
    ],
  },
  {
    Title: "By Education",
    Subtitle: [
      "B.E",
      "Diploma",
      "B.Com",
      "B.Tech",
      "MBA",
      "B.Sc",
      "B.A",
      "BCA",
    ],
  },
  {
    Title: "By Profession",
    Subtitle: [
      "Business Owner",
      "Supervisor",
      "Software Professional",
      "Executive",
      "Manager",
      "Officer",
      "Technician",
      "Engineer-Non IT",
      "Teaching",
      "Agriculture",
    ],
  },
];


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
          <Typography sx={{fontSize: '20px', fontWeight: 700}}>Free Membership</Typography>

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
              borderRadius: '12px',
              "&:hover": {
                backgroundColor: "#fe9607",
              },
            }}
          >
            REGISTER
          </Button>
        </CardContent>
      </Card >
      <FilterCards ListData={List}/>
    </>
  );
};

export default FilterList;
