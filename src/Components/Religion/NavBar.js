import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/Religion/tamilmatrimony-logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const drawerWidth = 240;
const navItems = ["REGISTER", "SEARCH", "SERVICES", "UPGRADE"];

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          sx={{ backgroundColor: "white", paddingY: 1.5 }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography sx={{ color: "black", fontSize: "11px" }}>
                  From Matrimony.com Group
                </Typography>
                <img src={logo} alt="" />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" }, columnGap: 3}}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{ color: "#212529", fontSize: "16PX" }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: "#212529", fontSize: "15PX" }}>
                  Browse Profiles By
                </Typography>
                <KeyboardArrowDownIcon sx={{ color: "#212529" }} />
                <Box sx={{ marginLeft: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#ff9902",
                      fontWeight: 500,
                      borderColor: "#ff9902",
                      paddingX: 3.5,
                      borderRadius: "14px",
                      "&:hover": {
                        borderColor: "#ff9902",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </>
  );
};

export default NavBar;
