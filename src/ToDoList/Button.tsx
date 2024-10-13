import React from "react";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.onClickHandler}>{props.title}</button>
    )
}