
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
}

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  type = "button",
}: ButtonProps) => {
  const baseStyles = "font-light tracking-wide rounded-md transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-water text-white hover:bg-water-dark shadow-sm hover:shadow-md",
    secondary: "bg-eco text-white hover:bg-eco-dark shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-water/40 text-water hover:bg-water/5 backdrop-blur-sm"
  };
  
  const sizeStyles = {
    sm: "text-sm px-5 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
