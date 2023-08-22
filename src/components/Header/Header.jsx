import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { AppBar } from "@mui/material";

function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AppBar position="fixed" color="transparent" sx={{paddingBottom: '15px', background: '#fafafa'}}>
      {isDesktop ? <DesktopMenu /> : <MobileMenu/>}
    </AppBar>
  );
}

export default Header;