import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};
const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        `rounded-lg bg-customPurple-950 text-base py-2 px-4 text-white hover:button-hover disabled:opacity-60 disabled:pointer-events-none`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
