import React from "react";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    isDisabled?: boolean
    classes?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.classes} onClick={props.onClickHandler} disabled={props.isDisabled}>{props.title}</button>
    )
}