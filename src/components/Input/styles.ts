import styled from "styled-components";

interface InputStylesProps {
    background?: string;
    whidth?: string;
    height?: string;
    font?: string;
}

export const InputStyles = styled.input<InputStylesProps>`
    background: #EFF4F9 || ${props => props.background};
    width: 34.25rem || ${props => props.whidth};
`