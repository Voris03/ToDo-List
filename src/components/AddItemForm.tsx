import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { Button } from "./Button";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Input, TextField } from "@mui/material";

type AddItemFormPropsType = {
  addItem: (title: string) => void;
};

export const AddItemForm = ({ addItem }: AddItemFormPropsType) => {
  const [itemTitle, setItemTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.currentTarget.value);
  };

  const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addItemHandler();
    }
  };

  const addItemHandler = () => {
    if (itemTitle.trim() !== "") {
      addItem(itemTitle.trim());
      setItemTitle("");
    } else {
      setError("Title is required");
    }
  };

  return (
    <div>
      <TextField
        variant="outlined"
        value={itemTitle}
        size="small"
        onChange={changeItemTitleHandler}
        label="Max 15 characters"
        onKeyDown={addItemOnKeyUpHandler}
        error={!!error}
        helperText={error}
      />

      <IconButton onClick={addItemHandler}>
        <AddBoxIcon fontSize="medium" />
      </IconButton>
      {/* <Button title={"+"} onClickHandler={addItemHandler} /> */}
      {/* {error && <div className={"error-message"}>{error}</div>} */}
    </div>
  );
};
