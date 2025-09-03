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
