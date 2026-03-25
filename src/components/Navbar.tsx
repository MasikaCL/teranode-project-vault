import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link2, Plus } from "lucide-react";

interface NavbarProps {
  onNewProject?: () => void;
}

const Navbar = ({ onNewProject }: NavbarProps) => {
  return (
    <nav className="border-b bg-card px-6 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <Link2 className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold text-foreground">Teranode Sign</span>
      </Link>
      {onNewProject && (
        <Button onClick={onNewProject} className="gap-2">
          <Plus className="h-4 w-4" />
          New Project Folder
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
