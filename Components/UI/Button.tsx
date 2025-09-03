import React from "react";

export default function Button({
  bgColor,
  text,
  textColor,
  ...props
}: {
  bgColor: string;
  text: string;
  textColor?: string;
}) {
  return (
    <button
      className="px-4 py-2 rounded-md hover:cursor-pointer hover:opacity-85"
      style={{ backgroundColor: bgColor, color: textColor }}
      {...props}
      type="button"
    >
      {text}
    </button>
  );
}
