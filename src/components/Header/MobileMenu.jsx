import React from "react";
import {
    Drawer,
    Box,
    Toolbar,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import { MiddleDivider } from "./Header.style";
import { NavLink } from "./Header.style";


function MobileMenu() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // const [expanded, setExpanded] = useState(false);
    // const handleChange = (isExpanded, panel) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    return (
        <>
            <Box
                display={"inline-flex"}
                justifyContent="space-between"
                alignItems={"center"}
                pl={"30px"}
                sx={{paddingLeft: '10px'}}
            >
                <IconButton
                    onClick={() => setIsDrawerOpen(true)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    width="10%"
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                >
                    <Box p={2} width="250px" role="presentation" textAlign="center">
                        <List>
                            <NavLink
                                to="/Home"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                <ListItemButton>
                                    <ListItemText>Home</ListItemText>
                                </ListItemButton>
                            </NavLink>
                            <MiddleDivider />
                            <NavLink
                                to="/Photos"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                <ListItemButton>
                                    <ListItemText>Photos</ListItemText>
                                </ListItemButton>
                            </NavLink>
                            <MiddleDivider />
                            <NavLink
                                to="/BookAndPrices"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                <ListItemButton>
                                    <ListItemText>Book & Prices</ListItemText>
                                </ListItemButton>
                            </NavLink>
                            <MiddleDivider />
                            <NavLink
                                to="/About"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                <ListItemButton>
                                    <ListItemText>About</ListItemText>
                                </ListItemButton>
                            </NavLink>
                            <MiddleDivider />
                            <NavLink 
                                to="/Contacts"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                <ListItemButton>
                                    <ListItemText>Contacs</ListItemText>
                                </ListItemButton>
                            </NavLink>
                            <MiddleDivider />
                        </List>
                    </Box>
                </Drawer >

                <Toolbar>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            m: 1
                        }}
                    >
                        <Logo />
                    </Typography>
                </Toolbar>
                <Box />
            </Box >
            {/* <IconActions /> */}
        </>
    );
}

export default MobileMenu;
