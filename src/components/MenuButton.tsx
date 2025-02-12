import { styled, Button } from "@mui/material";

type MenuButtonProps = {
    background?: string
}

export const MenuButton = styled(Button)<MenuButtonProps>(({background, theme})=> ({
    minWidth: '110px',
    fontWeight: 'bold',
    //boxShadow: '0 0 0 2px #054B62, 4px 4px 0 0 #054B62',
    border: '1px solid #fff',
    borderRadius: '5px',
    textTransform: 'capitalize',
    margin: '0 10px',
    padding: '8px 24px',
    color: '#ffffff',
    background: background || theme.palette.primary.dark
}))