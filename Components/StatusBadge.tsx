import { StatusBadgeProps } from "@/Types/item";
export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variants = {
    active: "bg-green-100 text-green-800 border-green-200",
    inactive: "bg-gray-100 text-gray-800 border-gray-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    completed: "bg-blue-100 text-blue-800 border-blue-200",
  };

  const labels = {
    active: "Active",
    inactive: "Inactive",
    pending: "Pending",
    completed: "Completed",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[status]} ${className}`}
    >
      {labels[status]}
    </span>
  );
}
