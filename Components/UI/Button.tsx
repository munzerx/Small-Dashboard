import React from "react";

export default function Button({
  bgColor,
  text,
  textColor,
  additionalStyles,
  children,
  ...props
}: {
  bgColor: string;
  text?: string;
  textColor?: string;
  children?: React.ReactNode;
  additionalStyles?: string;
}) {
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
