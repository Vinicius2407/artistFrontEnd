import * as PhosphorIcons from "@phosphor-icons/react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    icon?: keyof typeof PhosphorIcons;
    textColor?: string;
}

export function Button({ children, icon, ...props }: ButtonProps) {
    if (props.type === "submit") {
        props.textColor = "#F5F5F5"
    }
    return (
        <ButtonContainer {...props}>
            {icon}
            {children}
        </ButtonContainer>
    );
}