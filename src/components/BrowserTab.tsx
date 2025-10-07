import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BrowserTabProps {
  title: string;
  active: boolean;
  onClick: () => void;
  onClose: () => void;
}

export const BrowserTab = ({ title, active, onClick, onClose }: BrowserTabProps) => {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 px-4 py-2 rounded-t-lg cursor-pointer transition-smooth min-w-[150px] max-w-[200px]",
        active
          ? "bg-card text-foreground shadow-sm"
          : "bg-card/30 text-muted-foreground hover:bg-card/50"
      )}
      onClick={onClick}
    >
      <span className="flex-1 truncate text-sm">{title}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-smooth hover:bg-secondary"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};
