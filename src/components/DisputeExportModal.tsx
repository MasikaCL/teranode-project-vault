import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Download, Link2 } from "lucide-react";
import type { Document } from "@/data/dummyData";

interface DisputeExportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  documents: Document[];
}

const DisputeExportModal = ({ open, onOpenChange, documents }: DisputeExportModalProps) => {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setExported(true);
    setTimeout(() => {
      setExported(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setExported(false); onOpenChange(v); }}>
      <DialogContent className="sm:max-w-lg">
        {exported ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-3 animate-in fade-in zoom-in" />
            <h3 className="text-lg font-semibold text-foreground mb-1">Evidence package ready</h3>
            <p className="text-sm text-muted-foreground">Your file will download shortly.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Export Dispute Evidence Package</DialogTitle>
              <DialogDescription>
                Select documents to include in your evidence bundle.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-2">
              {documents.map((doc) => (
                <label key={doc.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer">
                  <Checkbox defaultChecked />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium block">{doc.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {doc.issuedBy || "—"} · {doc.date}
                      {doc.issuedTo ? ` → ${doc.issuedTo}` : ""}
                    </span>
                  </div>
                  {doc.blockchainStatus === "verified" && (
                    <Link2 className="h-3.5 w-3.5 text-accent shrink-0" />
                  )}
                </label>
              ))}
              <div className="border-t pt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Blockchain verification included: <strong>Yes</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Chain of custody: <strong>Complete</strong></span>
                </div>
              </div>
            </div>
            <DialogFooter className="flex-col items-stretch gap-3">
              <Button className="gap-2" onClick={handleExport}>
                <Download className="h-4 w-4" />
                Export as PDF
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Evidence package generated in 1 click — replaces 3–6 weeks of email archaeology
              </p>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DisputeExportModal;
