
import { styled } from "@mui/material/styles";
import { Colors } from "../../styles";
import { Typography } from "@mui/material";

export const AboutBanner = styled('div')`
    display: block;
    background-image: url(../images/about.jpg);
    background-position: 50% 90%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 60vh;
    text-align: left;
`

export const AboutContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '50px 100px',
    [theme.breakpoints.down('md')]: {
        fontSize: '4.5rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        padding: '30px 0 0 60px',
    },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
    color: `${Colors.complementary}`,
    textAlign: 'left',
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
        fontSize: '4.5rem',
        marginTop: '100px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem'
    },
}));

export const AboutSubtitle = styled(Typography)(({ theme }) => ({
    color: `${Colors.complementary}`,
    textAlign: 'left',
    marginTop: '2rem',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
        marginTop: '1rem',
        fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '0.5rem',
        fontSize: '1.2rem'
    },
}));