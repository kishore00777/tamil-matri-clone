import React from "react";
import NavBar from "../Components/NavBar";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import {
  AgeFrom,
  AgeTo,
  Caste,
  Citys,
  Countrys,
  Education,
  Heights,
  Regional,
  Religion,
  State,
} from "../Data/Data";

const Search = () => {
  const LableStyle = {
    fontSize: "18px",
    fontWeight: 600,
    color: "#666666",
  };
  const [gender, setGender] = React.useState("female");
  const [fromAge, setFromAge] = React.useState("");
  const [toAge, setToAge] = React.useState("");
  const [fromHeight, setFromHeight] = React.useState("");
  const [toHeight, setToHeight] = React.useState("");
  const [maritalStatus, setMaritalStatus] = React.useState("neverMarried");
  const [religion, setReligion] = React.useState("");
  const [tongue, setTongue] = React.useState("");
  const [caste, setCaste] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [education, setEducation] = React.useState("");

  console.log(
    gender,
    fromAge,
    toAge,
    fromHeight,
    toHeight,
    maritalStatus,
    religion,
    tongue,
    caste,
    country,
    state,
    city,
    education
  );

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeFromAge = (event) => {
    setFromAge(event.target.value);
  };
  const handleChangeToAge = (event) => {
    setToAge(event.target.value);
  };
  const handleChangeFromHeight = (event) => {
    setFromHeight(event.target.value);
  };
  const handleChangeToHeight = (event) => {
    setToHeight(event.target.value);
  };
  const handleMaritalStatus = (event) => {
    setMaritalStatus(event.target.value);
  };

  const handleChangeReligion = (event) => {
    const {
      target: { value },
    } = event;
    setReligion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeTonge = (event) => {
    const {
      target: { value },
    } = event;
    setTongue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeCaste = (event) => {
    const {
      target: { value },
    } = event;
    setCaste(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeCountry = (event) => {
    const {
      target: { value },
    } = event;
    setCountry(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeState = (event) => {
    const {
      target: { value },
    } = event;
    setState(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeCity = (event) => {
    const {
      target: { value },
    } = event;
    setCity(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeEducation = (event) => {
    const {
      target: { value },
    } = event;
    setEducation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: 10, marginBottom: 10 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid xs={12} md={8} sx={{ border: "1px solid #363636" }}>
            <Container maxWidth="xl">
              <Grid container>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Gender</Typography>
                </Grid>
                <Grid xs={12} md={9}>
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      sx={{ display: "flex", flexDirection: "row" }}
                      value={gender}
                      onChange={handleChangeGender}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Age</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl fullWidth sx={{ width: "12%" }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      FromAge
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={fromAge}
                      label=""
                      onChange={handleChangeFromAge}
                      input={<OutlinedInput label="FromAge" />}
                    >
                      {AgeFrom.map((list) => (
                        <MenuItem value={list}>{list}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography>To</Typography>
                  <FormControl fullWidth sx={{ width: "12%" }} size="small">
                    <InputLabel id="demo-multiple-name-label">ToAge</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={toAge}
                      label=""
                      onChange={handleChangeToAge}
                      input={<OutlinedInput label="ToAge" />}
                    >
                      {AgeTo.map((list) => (
                        <MenuItem value={list}>{list}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography>years</Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Height</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl fullWidth sx={{ width: "25%" }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      FromHeight
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={fromHeight}
                      label=""
                      onChange={handleChangeFromHeight}
                      input={<OutlinedInput label="FromHeight" />}
                    >
                      {Heights.map((list, i) => (
                        <MenuItem key={i} value={list}>
                          {list}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Typography>To</Typography>
                  <FormControl fullWidth sx={{ width: "25%" }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      ToHeight
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={toHeight}
                      label=""
                      onChange={handleChangeToHeight}
                      input={<OutlinedInput label="ToHeight" />}
                    >
                      {Heights.map((list, i) => (
                        <MenuItem key={i} value={list}>
                          {list}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Marital status</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                    </FormLabel> */}
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      sx={{ display: "flex", flexDirection: "row" }}
                      value={maritalStatus}
                      onChange={handleMaritalStatus}
                    >
                      <FormControlLabel
                        value="any"
                        control={<Radio />}
                        label="Any"
                      />
                      <FormControlLabel
                        value="neverMarried"
                        control={<Radio />}
                        label="Never Married"
                      />
                      <FormControlLabel
                        value="Widowed"
                        control={<Radio />}
                        label="Widowed"
                      />
                      <FormControlLabel
                        value="Divorced"
                        control={<Radio />}
                        label="Divorced"
                      />
                      <FormControlLabel
                        value="Awaiting divorce"
                        control={<Radio />}
                        label="Awaiting divorce"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Religion</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      Religion
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={religion}
                      onChange={handleChangeReligion}
                      input={<OutlinedInput label="Religion" />}
                      //   MenuProps={MenuProps}
                    >
                      {Religion.map((i, j) => (
                        <MenuItem
                          key={j}
                          value={i.name}
                          //   style={getStyles(name, personName, theme)}
                        >
                          {i.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Mother tongue</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      Mother tongue
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={tongue}
                      onChange={handleChangeTonge}
                      input={<OutlinedInput label="Mother tongue" />}
                      //   MenuProps={MenuProps}
                    >
                      <MenuItem
                        value={"Tamil"}
                        //   style={getStyles(name, personName, theme)}
                      >
                        Tamil
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Caste</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <InputLabel id="demo-multiple-name-label">Caste</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={caste}
                      onChange={handleChangeCaste}
                      input={<OutlinedInput label="Caste" />}
                      //   MenuProps={MenuProps}
                    >
                      {Caste.map((Regional) => (
                        <MenuItem
                          key={Regional}
                          value={Regional}
                          //   style={getStyles(name, personName, theme)}
                        >
                          {Regional.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Country</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={country}
                      onChange={handleChangeCountry}
                      input={<OutlinedInput label="Country" />}
                      //   MenuProps={MenuProps}
                    >
                      {Countrys.map((List, i) => (
                        <MenuItem
                          key={i}
                          value={List.value}
                          //   style={getStyles(name, personName, theme)}
                        >
                          {List.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>State</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <InputLabel id="demo-multiple-name-label">State</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={state}
                      onChange={handleChangeState}
                      input={<OutlinedInput label="State" />}
                      //   MenuProps={MenuProps}
                    >
                      {State.map((state, i) => (
                        <MenuItem
                          key={i}
                          value={state.name}
                          //   style={getStyles(name, personName, theme)}
                        >
                          {state.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>City</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <InputLabel id="demo-multiple-name-label">City</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={city}
                      onChange={handleChangeCity}
                      input={<OutlinedInput label="City" />}
                      //   MenuProps={MenuProps}
                    >
                      {Citys.map((list, i) => (
                        <MenuItem
                          key={i}
                          value={list}
                          //   style={getStyles(name, personName, theme)}
                        >
                          {list}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 1.5 }}>
                <Grid
                  xs={12}
                  md={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <Typography sx={LableStyle}>Education</Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={9}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      Education
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={education}
                      onChange={handleChangeEducation}
                      input={<OutlinedInput label="Education" />}
                      //   MenuProps={MenuProps}
                    >
                      {Education.map((list, i) => (
                        <MenuItem
                          key={i}
                          value={list}
                          //   style={getStyles(name, personName, theme)}
                        >
                          {list}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#ff7805",
                    "&:hover": { backgroundColor: "#ff7805" },
                  }}
                >
                  Search
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Search;
