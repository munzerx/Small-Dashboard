import React from "react";
import Button from "./UI/Button";
import { StatusBadge } from "./StatusBadge";
import type { ItemProps } from "@/Types/item";

interface Props extends ItemProps {
  onClick: () => void;
}

export default function Item({
  id,
  title,
  description,
  status,
  onClick,
}: Props) {
  return (
    <div
      className="w-full bg-white border-slate-300 rounded-2xl border-[0.2px] p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick} // ✅ Make whole card clickable
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-slate-400">#{id}</span>
            <StatusBadge status={status} />
          </div>

          <h3 className="font-medium mb-2 text-balance">{title}</h3>
          <p className="text-sm line-clamp-2 text-pretty">{description}</p>
        </div>

        <Button
          bgColor="black"
          text="Show details"
          textColor="white"
          additionalStyles="ml-4 shrink-0"
        />
      </div>
    </div>
  );
}
