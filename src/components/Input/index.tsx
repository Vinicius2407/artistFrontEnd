interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
   type?: string;
   value?: string;
}

export function Input({ type, value, children, ...props }: InputProps) {
   return (
      <>
         <input type={type || "text"} className="inputForm" value={value} {...props} />
      </>
   )
}