import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import DashBoard from "../../Assets/Religion/seo-tamil-header.png";

const Dashboard = () => {
  return (
    <Box>
      <Grid sx={{position: 'relative'}}>
        <img style={{ height: "58vh", width: "100%" }} src={DashBoard} alt="" />
        <Box sx={{position: 'absolute', top: '34%', left: '7%', textAlign: 'start'}}>
          <Typography variant="h3" sx={{color: '#FFFFFF',  fontWeight: 700}}>Lakhs of<br/> Happy Marriages</Typography>
          <Button variant="contained" sx={{backgroundColor: '#fe9607', paddingY: 1.8, paddingX: 3, fontSize: '20px',fontWeight: 600 , marginTop: 3.5, '&:hover': {
            backgroundColor: '#fe9607'
          }}}>REGISTER FREE</Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Dashboard;
