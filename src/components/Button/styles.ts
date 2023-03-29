import styled from "styled-components";

interface ButtonProps {
    backgroundColor?: string;
    textColor?: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 126px;
    height: 50px;

    background: ${props => props.color || "transparent"};
    
    border-radius: 5px;
    border: none;
    
    color: ${props => props.textColor || "#000"};
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 18px;

    cursor: pointer;

    &:hover {
        background: #50E3C2;
        transition: 0.5s;
    }
`
