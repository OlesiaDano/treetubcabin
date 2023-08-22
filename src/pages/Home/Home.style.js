import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Colors } from "../../styles";


export const Banner = styled('div')(({ theme }) => ({
    display: 'block',
    backgroundImage: 'url(../images/banner_main.jpg)',
    backgroundPosition: '50% -12px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    position: 'relative',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    [theme.breakpoints.up('xl')]: {
        '@media (min-width: 1750px)': {
            backgroundPosition: '0px -190px',
        },
    },
}));

export const BannerContent = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `${Colors.transperent}`,
    color: `${Colors.dove_gray}`,
    width: '270px',
    height: '270px',
    margin: '30px auto',
    textAlign: 'center',
    borderRadius: '100%',
}));

export const BannerTitle = styled('h2')`
    line-height: 1.5px;
    font-size: 2rem;
`
