"use client";

import ItemList from "@/Components/ItemList";
import { ItemDetailsModal } from "@/Components/ItemDetailsModal";
import { mockItems } from "../public/data";
import { useState } from "react";

export default function Home() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  const selectedItem =
    mockItems.find((item) => item.id === selectedItemId) || null;

  return (
    <div className="font-sans items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20">
      <ItemDetailsModal
        isOpen={!!selectedItemId}
        itemId={selectedItemId}
        item={selectedItem}
        onClose={handleCloseModal}
      />
      <main className="flex flex-col items-center justify-center">
        <ItemList onItemClick={handleItemClick} />
      </main>
    </div>
  );
}
