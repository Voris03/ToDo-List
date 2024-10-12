import React from "react";

type ButtonPropsType = {
    title: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button>{props.title}</button>
    )
}