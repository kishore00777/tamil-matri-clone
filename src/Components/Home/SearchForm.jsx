import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Gender = [
  { name: "none", value: "" },
  { name: "Woman", value: "Female" },
  { name: "Man", value: "Male" },
];

const AgeFrom = Array.from({ length: 53 }, (_, i) => i + 18);
const AgeTo = Array.from({ length: 50 }, (_, i) => i + 21);

const Religion = [
  { name: "Any", value: "any" },
  { name: "Hindu", value: "Hindu" },
  { name: "Muslim", value: "Muslim" },
  { name: "Christian", value: "Christian" },
];

const Caste = [
  { name: "Any", value: "any" },
  { name: "Adi Dravida", value: "Adi Dravida" },
  { name: "Vannia Kula Kshatriyar", value: "Vannia Kula Kshatriyar" },
  { name: "Nadar", value: "Nadar" },
  { name: "Devar", value: "Devar" },
  { name: "SC", value: "SC" },
  { name: "Agamudayar", value: "Agamudayar" },
  { name: "Vishwakarma", value: "Vishwakarma" },
  { name: "Yadav", value: "Yadav" },
  { name: "Mudaliyar", value: "Mudaliyar" },
];

export default function SearchForm() {
  const [gender, setGender] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleAgeFrom = (e) => {
    setAgeFrom(e.target.value);
  };
  const handleAgeTo = (e) => {
    setAgeTo(e.target.value);
  };
  const handleReligion = (e) => {
    setReligion(e.target.value);
  };
  const handleCaste = (e) => {
    setCaste(e.target.value);
  };

  console.log(gender, ageFrom, ageTo);
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
        spacing={2}
        sx={{ marginLeft: "auto", marginRight: "auto", width: "70%", mt: 5 }}
      >
        <Grid item xs={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">Gender</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="gender"
              value={gender}
              label="Gender"
              onChange={handleGender}
              color="secondary"
            >
              {Gender.map((i, j) => (
                <MenuItem key={j} value={i.value}>
                  {i.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">Age From</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="age"
              value={ageFrom}
              label="Age From"
              onChange={handleAgeFrom}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                  },
                },
                MenuListProps: {
                  style: {
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                },
              }}
            >
              <MenuItem value="any">Any</MenuItem>
              {AgeFrom.map((i, j) => (
                <MenuItem key={j} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">Age To</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="age"
              value={ageTo}
              label="Age To"
              onChange={handleAgeTo}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                  },
                },
                MenuListProps: {
                  style: {
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                },
              }}
            >
              <MenuItem value="any">Any</MenuItem>
              {AgeTo.map((i, j) => (
                <MenuItem key={j} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">Religion</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="religion"
              value={religion}
              label="Religion"
              onChange={handleReligion}
            >
              {Religion.map((i, j) => (
                <MenuItem key={j} value={i.value}>
                  {i.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">Caste</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="caste"
              value={caste}
              label="Caste"
              onChange={handleCaste}
            >
              {Caste.map((i, j) => (
                <MenuItem key={j} value={i.value}>
                  {i.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant="contained">Let's Begin</Button>
        </Grid>
      </Grid>
    </>
  );
}
