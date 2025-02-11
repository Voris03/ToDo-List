import { Button } from "@mui/material";
import { FilterValuesType } from "../App";

type FilterButtonPropsType = {
    title: string
    filter: FilterValuesType
    activeFilterValue: FilterValuesType
    onClickHandler: () => void
}

export const FilterButton = ({title, filter, onClickHandler, activeFilterValue}: FilterButtonPropsType) => {

    return (
        <Button
          size="small"
          variant="contained"
          color={filter === activeFilterValue ? "secondary" : "primary"}
          onClick={onClickHandler}
        >
            {title}
        </Button>
    )
}