import React, { useState } from "react";
import {
    Box,
    Button,
    Stack,
    Menu,
    MenuItem,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const secondaryNavItems = [
    {
        label: "IIGS STRATEGY",
        subMenu: ["Consulting", "Digital Strategy", "Transformation"],
    },
    {
        label: "IIGS IPROCURE",
        subMenu: ["E-Procurement", "Vendor Management", "Spend Analytics"],
    },
    {
        label: "IIGS ISUPPLY",
        subMenu: ["Supply Chain Visibility", "Inventory Management", "Collaboration Tools"],
    },
    {
        label: "IIGS IFREIGHT",
        subMenu: ["Freight Booking", "Tracking", "Freight Analytics"],
    },
    {
        label: "IIGS MANAGEDSERVICES",
        subMenu: ["End-to-End Management", "24/7 Support", "Performance Reports"],
    },
];

const SecondaryNavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setActiveIndex(index);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setActiveIndex(null);
    };

    const splitLabel = (label) => {
        const [first, ...rest] = label.split(" ");
        return { prefix: first, suffix: rest.join(" ") };
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: { xs: 0, sm: 2 } }}>
            <Stack
            px={2}
                direction={{ xs: "column", sm: "row", md: "row" }}
                sx={{ width: { xs: "90%", sm: "60%" }, margin: { xs: "auto", sm: "0", md: "0" }, }}
                alignItems={{ xs: "flex-start", md: "center" }}
            >
                {secondaryNavItems.map((item, index) => {
                    const { prefix, suffix } = splitLabel(item.label);

                    return (
                        <Box key={index} sx={{ position: "relative", width: "100%" }}>
                            <Button
                                fullWidth={isSmallScreen}
                                onClick={(e) => handleClick(e, index)}
                                endIcon={<ArrowDropDownIcon />}
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography component="span" sx={{ color: "#ff5722", fontSize: { xs: "10px", sm: "12px", md: "16px" } }}>
                                    {prefix}&nbsp;
                                </Typography>
                                <Typography component="span" sx={{ color: "#1e88e5", fontSize: { xs: "10px", sm: "12px", md: "16px" }, }}>
                                    {suffix}
                                </Typography>
                            </Button>

                            <Menu
                                anchorEl={anchorEl}
                                open={activeIndex === index}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                keepMounted
                            >
                                {item.subMenu.map((subItem, subIndex) => (
                                    <MenuItem key={subIndex} onClick={handleClose}>
                                        <Typography variant="body2">{subItem}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default SecondaryNavBar;
