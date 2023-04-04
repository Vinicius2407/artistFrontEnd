import React from "react";
import { InputStyles } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    props?: React.InputHTMLAttributes<HTMLInputElement>;
    background?: string;
    width?: string;
    height?: string;
    font?: string;
}

export function Input({ background, width, height, font,  ...props }: InputProps) {
    return (
        <>
            <InputStyles background={background} width={width} height={height} font={font} >
                <input type={props.type || "text"} {...props} />
            </InputStyles>
        </>
    )
}