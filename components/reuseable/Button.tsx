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
        "px-4 py-1 xl:px-8 xl:py-2 rounded-[12px] font-inter-tight font-medium text-sm cursor-pointer transition-all",
        variant === "primary" &&
        "bg-button-primary text-white hover:bg-button-primary-hover",
        variant === "secondary" &&
        "bg-transparent text-white border-[1.5px] border-button-secondary-border hover:bg-white hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
