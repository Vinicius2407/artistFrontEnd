import { Label } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
   type?: string;
   value?: string;
   label?: string;
}

export function Input({ type, value, children, label, ...props }: InputProps) {
   return (
      <>
         {label && <Label>{label}</Label> }         
         <input type={type || "text"}  className="inputForm" value={value } {...props} />
      </>
   )
}