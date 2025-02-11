import { SxProps } from "@mui/material";

export const filterButtonsContainerSx: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '5px'
}

export const getListItemSX = (isDone: boolean): SxProps => ({
    p: 0,
    justifyContent: 'space-between',
    opacity: isDone ? 0.5 : 1,
})