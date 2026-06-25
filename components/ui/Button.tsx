import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "ghost";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  let variantClass = "";

  if (variant === "primary") {
    variantClass = "btn-primary";
  } else if (variant === "accent") {
    variantClass = "btn-accent";
  } else if (variant === "ghost") {
    variantClass = "btn-ghost";
  }

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
