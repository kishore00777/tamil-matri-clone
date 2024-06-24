import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Gender, AgeFrom, AgeTo, Religion, Caste } from "../../Data/Data";
// import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  // const navigate = useNavigate();

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

  const handleSearch = () => {
    window.open(
      `/matrimony?gender=${gender}&ageFrom=${ageFrom}&ageTo=${ageTo}&religion=${religion}&Caste=${caste}`,
      "_blank"
    );
  };
  // const handleSearch = () => {
  //   navigate(
  //     `/matrimony?gender=${gender}&ageFrom=${ageFrom}&ageTo=${ageTo}&religion=${religion}&Caste=${caste}`
  //   );
  // };

  useEffect(() => {
    if (ageTo < ageFrom) {
      setAgeTo("");
    }
  }, [ageTo, ageFrom]);

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
            <InputLabel id="demo-select-small-label" color="secondary">
              Gender
            </InputLabel>
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
            <InputLabel id="demo-select-small-label" color="secondary">
              Age From
            </InputLabel>
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
              color="secondary"
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
            <InputLabel id="demo-select-small-label" color="secondary">
              Age To
            </InputLabel>
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
              color="secondary"
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
            <InputLabel id="demo-select-small-label" color="secondary">
              Religion
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="religion"
              value={religion}
              label="Religion"
              onChange={handleReligion}
              color="secondary"
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
            <InputLabel id="demo-select-small-label" color="secondary">
              Caste
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="caste"
              value={caste}
              label="Caste"
              onChange={handleCaste}
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
              color="secondary"
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
          <Button
            variant="contained"
            sx={{ bgcolor: "#FF7C0B", "&:hover": { bgcolor: "#FF7C0B" } }}
            onClick={() =>
              !gender || !ageFrom || !ageTo || !religion || !caste
                ? alert("Select all the Fields")
                : handleSearch()
            }
            // disabled={!gender || !ageFrom || !ageTo || !religion || !caste}
          >
            Let's Begin
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
