import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import BlockchainBadge from "@/components/BlockchainBadge";
import { projects } from "@/data/dummyData";
import {
  ArrowLeft, CheckCircle2, Download, Share2, ClipboardList,
  Link2, Building2, Calendar, Hash,
} from "lucide-react";

const DocumentDetail = () => {
  const { id, docId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);
  const document = project?.documents.find((d) => d.id === docId);

  if (!project || !document) return <div className="p-8">Document not found.</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(`/project/${project.id}`)}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to {project.name}
        </button>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <CardTitle className="text-lg">{document.name}</CardTitle>
                  <Badge variant="outline">{document.type}</Badge>
                </div>
                <BlockchainBadge status={document.blockchainStatus} />
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Building2 className="h-3 w-3" /> Issued by
                </p>
                <p className="text-sm font-medium">{document.issuedBy}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Building2 className="h-3 w-3" /> Issued to
                </p>
                <p className="text-sm font-medium">{document.issuedTo}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Timestamp
                </p>
                <p className="text-sm font-medium">{document.timestamp}</p>
              </div>
            </div>

            {/* Blockchain Anchor */}
            {document.hash && (
              <div className="border rounded-lg p-4 bg-accent/5 border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Link2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Blockchain Anchor</span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="text-sm bg-muted px-2 py-1 rounded font-mono flex items-center gap-1.5">
                    <Hash className="h-3 w-3 text-muted-foreground" />
                    {document.hash}
                  </code>
                  <span className="text-sm text-accent flex items-center gap-1 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Verified on BSV blockchain
                  </span>
                </div>
              </div>
            )}

            {/* Status */}
            {document.statusNote && (
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">{document.statusNote} ✓</span>
              </div>
            )}

            {/* Linked Documents */}
            {document.parentDocId && (
              <div className="border rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-2">Linked Documents</p>
                <Link
                  to={`/project/${project.id}/document/${document.parentDocId}`}
                  className="text-sm font-medium text-secondary hover:underline flex items-center gap-1.5"
                >
                  <Link2 className="h-3.5 w-3.5" />
                  → {document.parentDocName} (parent document)
                </Link>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2 border-t">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button variant="outline" className="gap-2">
                <ClipboardList className="h-4 w-4" /> View Audit Trail
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DocumentDetail;
