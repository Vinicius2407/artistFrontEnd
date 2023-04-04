import { InputContainer } from "./styles";


interface InputProps extends React.HTMLAttributes<HTMLInputElement> { 
    type?: string;
}

export function Input({ type, children, ...props }: InputProps) {
    return (
        <>
            <InputContainer>
                <input type={type || "text"} className="inputForm"  {...props} />
            </InputContainer>
        </>
    )
}