interface ButtonProps {
    type: "button" | "submit" | "reset";
}

export function Button({ type }: ButtonProps) {
  return (
    <button className="button">
      <span>Click me</span>
    </button>
  );
}