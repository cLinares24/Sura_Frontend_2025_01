interface ButtonComponentsProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className: string; // se lo envías tú al igual que InputComponents
  disabled?: boolean;
}

export default function ButtonComponent({
  children,
  onClick,
  type = "button",
  className,
  disabled = false,
}: ButtonComponentsProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}
