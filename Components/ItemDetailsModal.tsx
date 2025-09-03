"use client";
import Button from "./UI/Button";
import { StatusBadge } from "./StatusBadge";
import { X } from "lucide-react";
import { ItemProps } from "@/Types/item";

interface ItemDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ItemProps | null;
}

export function ItemDetailsModal({
  isOpen,
  onClose,
  item,
}: ItemDetailsModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="m-4 bg-white rounded-2xl">

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-300">
            <h2 className="text-xl font-semibold">
              Item Details
            </h2>
            <Button bgColor="black" textColor="white"  onClick={onClose}>
              <X className="h-4 w-4" color="white" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* ID and Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm">
                    ID: {item.id}
                  </span>
                </div>
                <StatusBadge status={item.status} />
              </div>

              {/* Title */}
              <div>
                <label className="text-sm font-medium text-slate-400 mb-2 block">
                  Title
                </label>
                <h3 className="text-lg font-medium text-balance">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  Description
                </label>
                <div className="rounded-lg bg-slate-100 py-4 px-6">
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
