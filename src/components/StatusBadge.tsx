import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "Active" | "In Dispute" | "Completed";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Badge
      className={cn(
        "text-xs font-medium",
        status === "Active" && "bg-accent text-accent-foreground",
        status === "In Dispute" && "bg-warning text-warning-foreground",
        status === "Completed" && "bg-muted text-muted-foreground"
      )}
    >
      {status}
    </Badge>
  );
};

export default StatusBadge;
