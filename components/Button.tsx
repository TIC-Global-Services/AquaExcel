import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "w-[180px] h-[35px] rounded-[12px] font-hoves-pro font-medium text-sm transition-all",
        variant === "primary" &&
          "bg-button-primary text-white hover:bg-button-primary-hover",
        variant === "secondary" &&
          "bg-transparent text-white border-2 border-button-secondary-border hover:bg-white hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
