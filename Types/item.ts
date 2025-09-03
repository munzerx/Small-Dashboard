export interface ItemProps {
  id: string;
  title: string;
  description: string;
  status: "active" | "inactive" | "pending" | "completed";
}
