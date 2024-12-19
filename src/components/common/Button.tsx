import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const Button = ({
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'h-[50px] bg-[url("/img/btn-back.png")] bg-cover bg-center bg-no-repeat',
        "text-black press-start text-[11px] uppercase",
        fullWidth ? "w-full" : "w-[270px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
