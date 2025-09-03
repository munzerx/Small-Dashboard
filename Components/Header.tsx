import React from "react";
import Button from "./UI/Button";

export default function Header() {
  return (
    <div className="border-b border-slate-300">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          </div>
        </div>

        <div className="flex items-center">
          <Button bgColor="black" textColor="white" text="add Item" />
        </div>
      </div>
    </div>
  );
}
