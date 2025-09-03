export interface ItemProps {
  id: string;
  title: string;
  description: string;
  status: "active" | "inactive" | "pending" | "completed";
}

export interface ItemDetailsModalProps {
  itemId: string | null;
  isOpen: boolean;
  onClose: () => void;
  item?: {
    id: string;
    title: string;
    description: string;
    status: string;
  };
}

export interface StatusBadgeProps {
  status: "active" | "inactive" | "pending" | "completed";
  className?: string;
}
