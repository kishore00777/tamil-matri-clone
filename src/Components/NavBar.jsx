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
  Tooltip,
  Menu,
  MenuItem,
  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import logo from "../Assets/Religion/tamilmatrimony-logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { Link, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "REGISTER", to: "/registerform" },
  { name: "SEARCH", to: "/registerform" },
  { name: "SERVICES", to: "/registerform" },
  { name: "UPGRADE", to: "/registerform" },
];

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="" />
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding onClick={() => navigate(item.to)}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
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
                <img
                  style={{ width: location.pathname === "/" ? "90%" : "100%" }}
                  src={logo}
                  alt=""
                />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" }, columnGap: 3 }}>
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    style={{
                      cursor:'pointer',
                      textDecoration: 'none',
                      color: "#212529",
                      fontSize: "16PX",
                      visibility: location.pathname === "/" ? "hidden" : "none",
                    }}
                  >
                    <Typography>{item.name}</Typography>
                  </Link>
                ))}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#212529",
                    fontSize: "15PX",
                    display: location.pathname === "/" ? "none" : "block",
                  }}
                >
                  Browse Profiles By
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#212529",
                    display: location.pathname === "/" ? "none" : "block",
                  }}
                />
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "15PX",
                    display: location.pathname === "/" ? "block" : "none",
                  }}
                >
                  Already a member?
                </Typography>
                <Box sx={{ marginLeft: 1 }}>
                  <Link to={'/login'}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#ff9902",
                      fontWeight: 500,
                      borderColor: "#ff9902",
                      paddingX: 3.5,
                      borderRadius: "11px",
                      "&:hover": {
                        borderColor: "#ff9902",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Login
                  </Button>
                  </Link>
                  
                  <IconButton>
                    <HelpOutlineIcon sx={{ color: "#7c7c7c" }} />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ color: "black", margin: "auto" }}>
                    Help
                  </Typography>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 0 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <KeyboardArrowDownIcon />
                      {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        backgroundColor: "#f1f1f1",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <PhoneCallbackIcon sx={{ mr: 1 }} />
                      24x7 HELP :<br />
                      INDIA : 0-8144-99-88-77
                    </MenuItem>
                  </Menu>
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
