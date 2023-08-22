
import { styled } from "@mui/material/styles";
import { List, ListItem } from '@mui/material';
import { Link } from "@mui/material";
import { Colors } from "../../styles";

export const SocialLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'inherit'
}));


export const SocialList = styled(List)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyItems: 'space-around',
    marginTop: '20px',
}));

export const SocialItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '2em',
    height: '2em',
    padding: '4px',
    ':hover': {
        backgroundColor: Colors.light,
        borderRadius: '50%',
    }
}));
