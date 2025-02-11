import { styled } from "@mui/material";
import { Button } from "@mui/joy";

type MenuButtonProps = {
    background?: string
}

export const MenuButton = styled(Button)<MenuButtonProps>(({background})=> ({
    minWidth: '110px',
    fontWeight: 'bold',
    //boxShadow: '0 0 0 2px #054B62, 4px 4px 0 0 #054B62',
    border: '1px solid #fff',
    borderRadius: '5px',
    textTransform: 'capitalize',
    margin: '0 10px',
    padding: '8px 24px',
    color: '#ffffff',
    background: background || '#1565c0'
}))