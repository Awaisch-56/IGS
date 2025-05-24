import  { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const mainNavItems = [
  {
    label: "Partner",
    hasSubmenu: true,
    subMenu: ["Partner Programs", "Become a Partner", "Partner Login"],
  },
  {
    label: "Company",
    hasSubmenu: true,
    subMenu: ["About Us", "Leadership", "Newsroom"],
  },
  {
    label: "Managed Services",
    hasSubmenu: true,
    subMenu: ["IT Support", "Cloud Services", "Cybersecurity"],
  },
  {
    label: "Industries",
    hasSubmenu: true,
    subMenu: ["Healthcare", "Finance", "Retail"],
  },
  {
    label: "Careers",
    hasSubmenu: true,
    subMenu: ["Open Positions", "Life at IIGS", "Internships"],
  },
];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEls, setAnchorEls] = useState({});

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuOpen = (event, index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: event.currentTarget }));
  };

  const handleMenuClose = (index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: null }));
  };

  const drawerList = (
    <Box sx={{ width: 250, mt: 3 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
        <Box component="img" src="/logo1.svg" alt="IIGS Logo" sx={{ height: { xs: 25, sm: 30, md: 40 } }} />
      </Typography>
      <List>
        {mainNavItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <SearchIcon sx={{ mr: 1 }} />
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button>
          <PhoneOutlinedIcon sx={{ mr: 1 }} />
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <LanguageOutlinedIcon sx={{ mr: 1 }} />
          <ListItemText primary="Language" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
      {/* Top Blue Bar */}
      <Box
        sx={{
          backgroundColor: "#2D53A4",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
          <SearchIcon sx={{ color: "white" }} />
          <PhoneOutlinedIcon sx={{ color: "white" }} />
          <LanguageOutlinedIcon sx={{ color: "white" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}>
          <SpeakerNotesOutlinedIcon sx={{ color: "#F36434" }} />
          <PersonOutlineOutlinedIcon sx={{ color: "#F36434" }} />
        </Box>
      </Box>

      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" src="/logo.svg" alt="IIGS Logo" sx={{ height: { xs: 25, sm: 30, md: 40 } }} />
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {mainNavItems.map((item, index) => (
              <Box key={index}>
                <Button
                  color="inherit"
                  endIcon={item.hasSubmenu ? <KeyboardArrowDownIcon /> : null}
                  onClick={(e) => item.hasSubmenu && handleMenuOpen(e, index)}
                >
                  {item.label}
                </Button>

                {item.hasSubmenu && (
                  <Menu
                    anchorEl={anchorEls[index]}
                    open={Boolean(anchorEls[index])}
                    onClose={() => handleMenuClose(index)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <MenuItem key={subIndex} onClick={() => handleMenuClose(index)}>
                        {subItem}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
