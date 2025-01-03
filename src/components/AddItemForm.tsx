import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { Button } from "./Button";

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
      <input
        value={itemTitle}
        onChange={changeItemTitleHandler}
        placeholder="Max 15 characters"
        onKeyDown={addItemOnKeyUpHandler}
        className={error ? "error" : ""}
      />

      <Button title={"+"} onClickHandler={addItemHandler} />
      {error && <div className={"error-message"}>{error}</div>}
    </div>
  );
};
