import React from "react";
import { Toolbar, Stack, Button, Typography } from "@mui/material";
import { NavLink } from "./Header.style";
import Logo from "./Logo";

function DesktopMenu() {
    
    return (
        <>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        m: 1
                    }}
                >
                    <Logo />
                    Tub Tree Cabin?
                </Typography>
                <Stack direction="row" spacing={2}>
                    <NavLink to="/Home">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink to="/Photos">
                        <Button color="inherit">Photos</Button>
                    </NavLink>
                    <NavLink to="/BookAndPrices">
                        <Button color="inherit">Book & Prices</Button>
                    </NavLink>
                    <NavLink to="/About">
                        <Button color="inherit">About</Button>
                    </NavLink>
                    <NavLink to="/Contacts">
                        <Button color="inherit">Contacts</Button>
                    </NavLink>
                </Stack>
            </Toolbar>
        </>
    );
}

export default DesktopMenu;
