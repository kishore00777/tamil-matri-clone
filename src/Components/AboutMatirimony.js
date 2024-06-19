import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const AboutMatirimony = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Box sx={{ backgroundColor: "#f1f1f1", paddingBottom: 7, paddingTop : 9 }}>
      <Container maxWidth="lg">
        <Grid sx={{ textAlign: "start", marginBottom: 5 }}>
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            About TamilMatrimony
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "13px", color: '#666666' }}>
            TamilMatrimony, a part of BharatMatrimony - the pioneer in online
            matrimony, is the most trusted matrimony service for Lakhs of Tamils
            worldwide. BharatMatrimony has been recognised as the most trusted
            online matrimony service by the Brand Trust Report. We have also
            been featured in Limca Book of records for most number of documented
            marriages online. Our purpose is to build a better Bharat through
            happy marriages.
          </Typography>
        </Grid>
        <hr />
        <Grid>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              marginTop: 5,
              marginBottom: 4,
              textAlign: "start",
            }}
          >
            Other Matrimony Sites
          </Typography>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid
              xs={12}
              md={5.7}
              sx={{ display: "flex", flexFlow: "column", rowGap: 2 }}
            >
              <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={{
                  borderRadius: "4px",
                  border: 'none',
                  "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                  "& .MuiAccordionDetails-root": {
                    display: expanded ? "block" : "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography sx={{fontSize: '13px'}}>Regional Sites</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ borderRadius: "4px",border: 'none', }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography sx={{fontSize: '13px'}}>Community Matrimony</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ borderRadius: "4px",border: 'none', }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography sx={{fontSize: '13px'}}>Religious Sites</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ borderRadius: "4px",border: 'none', }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography sx={{fontSize: '13px'}}>Exclusive Sites</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              xs={12}
              md={5.7}
              sx={{ display: "flex", flexFlow: "column", rowGap: 2 }}
            >
              <Accordion sx={{ borderRadius: "4px",border: 'none', }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  <Typography sx={{fontSize: '13px'}}>Mandap</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ borderRadius: "4px",border: 'none', }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6-content"
                  id="panel6-header"
                >
                  <Typography sx={{fontSize: '13px'}}>WeddingBazaar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ borderRadius: "4px",border: 'none', }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7-content"
                  id="panel7-header"
                >
                  <Typography sx={{fontSize: '13px'}}>Community Shaadi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMatirimony;
