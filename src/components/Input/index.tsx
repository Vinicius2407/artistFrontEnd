import { Label } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
   type?: string;
   value?: string;
   label?: string;
   multiple?: boolean;
   accept?: string;
}

export function Input({ type, value, children, label, multiple, accept, ...props }: InputProps) {
   return (
      <>
         {label && <Label>{label}</Label> }         
         <input type={type || "text"}  className="inputForm" value={value } multiple={multiple || false} accept={accept} {...props} />
      </>
   )
}