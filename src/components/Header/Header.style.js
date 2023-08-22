import { styled } from "@mui/material/styles";
import { List, Divider } from "@mui/material";
import {NavLink as Link} from 'react-router-dom';

export const NavLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 1,
    padding: "0px",
    justifyContent: "center",
}));

export const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))(() => { });

export const LogoImg = styled('img')(() => ({
    width: '100px',
    borderRadius: '50%'
}));