import React from "react";
import Item from "./Item";
import { mockItems } from "../public/data";
import type { ItemProps } from "../Types/item";

interface ItemListProps {
  onItemClick: (id: string) => void;
}

export default function ItemList({ onItemClick }: ItemListProps) {
  return (
    <div className="flex flex-col lg:w-[60%] px-5 md:px-0 gap-10">
      <div>Search & Filtering</div>
      <div className="flex flex-col">
        <p className="font-bold text-md">Items</p>
        <p className="text-sm text-slate-500">Manage Items</p>
      </div>

      <div className="flex flex-col gap-5">
        {mockItems.map((item: ItemProps) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
