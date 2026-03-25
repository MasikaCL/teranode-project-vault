import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlockchainBadgeProps {
  status: "verified" | "pending" | "missing";
  showIcon?: boolean;
}

const BlockchainBadge = ({ status, showIcon = true }: BlockchainBadgeProps) => {
  return (
    <Badge
      className={cn(
        "gap-1 text-xs font-medium",
        status === "verified" && "bg-accent/15 text-accent border-accent/30",
        status === "pending" && "bg-warning/15 text-warning border-warning/30",
        status === "missing" && "bg-destructive/15 text-destructive border-destructive/30"
      )}
      variant="outline"
    >
      {showIcon && status === "verified" && <Link2 className="h-3 w-3" />}
      {showIcon && status === "pending" && <Clock className="h-3 w-3" />}
      {showIcon && status === "missing" && <AlertCircle className="h-3 w-3" />}
      {status === "verified" && "Blockchain Verified"}
      {status === "pending" && "Pending"}
      {status === "missing" && "Missing"}
    </Badge>
  );
};

export default BlockchainBadge;
