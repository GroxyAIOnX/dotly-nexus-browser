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
        "group flex items-center gap-2 px-4 py-2 rounded-t-xl cursor-pointer transition-smooth min-w-[150px] max-w-[200px]",
        active
          ? "bg-background text-foreground shadow-sm border-t border-x border-border"
          : "bg-transparent text-muted-foreground hover:bg-secondary/50"
      )}
      onClick={onClick}
    >
      <span className="flex-1 truncate text-sm font-medium">{title}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-smooth hover:bg-secondary"
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
