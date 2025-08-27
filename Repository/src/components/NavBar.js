// src/components/NavBar.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  // Menu items with paths
  const menuItems = [
    { text: "Identity", path: "/" },
    { text: "Paper", path: "/paper" },
    { text: "Lawsuit", path: "/lawsuit" },
    { text: "Smart Contract", path: "/smartcontract" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        <Toolbar>
          {/* App Name */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "#d724ff",
              fontFamily: "Ubuntu, sans-serif",
              textDecoration: "none",
            }}
            component={Link}
            to="/"
          >
            Business Page
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: "#f5f5f5",
                  fontFamily: "Ubuntu, sans-serif",
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "black", height: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    style: {
                      color: "#f5f5f5",
                      fontFamily: "Ubuntu, sans-serif",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
