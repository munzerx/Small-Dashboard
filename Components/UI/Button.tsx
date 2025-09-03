import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: string;
  text?: string;
  textColor?: string;
  additionalStyles?: string;
}

export default function Button({
  bgColor,
  text,
  textColor,
  additionalStyles,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md hover:cursor-pointer hover:opacity-85 ${additionalStyles}`}
      style={{ backgroundColor: bgColor, color: textColor }}
      {...props}
      type="button"
    >
      {text}
      {children}
    </button>
  );
}
