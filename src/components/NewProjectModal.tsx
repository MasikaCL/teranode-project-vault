import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

interface NewProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewProjectModal = ({ open, onOpenChange }: NewProjectModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Project Folder</DialogTitle>
          <DialogDescription>
            Set up a new blockchain-linked project case folder.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="project-name">Project Name</Label>
            <Input id="project-name" placeholder="e.g. Riverside Residential — Phase 2" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client-name">Client Name</Label>
            <Input id="client-name" placeholder="e.g. Apex Homes Ltd" />
          </div>
          <div className="space-y-2">
            <Label>Contract Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select contract type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jct-db">JCT Design & Build</SelectItem>
                <SelectItem value="nec3">NEC3</SelectItem>
                <SelectItem value="nec4">NEC4</SelectItem>
                <SelectItem value="jct-standard">JCT Standard Building</SelectItem>
                <SelectItem value="fidic">FIDIC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Parties</Label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input placeholder="Party name" className="flex-1" />
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="contractor">Main Contractor</SelectItem>
                    <SelectItem value="subcontractor">Subcontractor</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-primary">
              <Plus className="h-3 w-3" /> Add another party
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={() => onOpenChange(false)}>Create Project Folder</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectModal;
