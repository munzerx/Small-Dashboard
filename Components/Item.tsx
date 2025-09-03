import React from "react";
import Button from "./UI/Button";
import { ChevronLeft, ChevronRight, Eye, Calendar, Clock } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

export default function Item() {
  return (
    <div
      //   key={item.id}
      className="w-full border-slate-300 rounded-2xl border-[0.2px] p-4 hover:shadow-md transition-shadow cursor-pointer"
      //   onClick={() => onItemClick(item.id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-slate-400">
              {/* #{item.id} */}
              #1
            </span>
            {/* <StatusBadge status={item.status} /> */}
            <StatusBadge status={"active"} />
          </div>

          <h3 className="font-medium mb-2 text-balance">
            {/* {item.title} */}
            Hello
          </h3>
          <p className="text-sm line-clamp-2 text-pretty">
            {/* {item.description} */}
            veryyyyyyyyyyyyyy longggggggggggg hellooooooooooooooooooo
          </p>
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
