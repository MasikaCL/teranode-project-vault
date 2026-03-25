import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import BlockchainBadge from "@/components/BlockchainBadge";
import StatusBadge from "@/components/StatusBadge";
import DisputeExportModal from "@/components/DisputeExportModal";
import { projects } from "@/data/dummyData";
import {
  ArrowLeft, Link2, CheckCircle2, Clock, FileText,
  Building2, Calendar, Banknote, FileCheck, Shield,
} from "lucide-react";

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exportOpen, setExportOpen] = useState(false);

  const project = projects.find((p) => p.id === id);
  if (!project) return <div className="p-8">Project not found.</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Dashboard
        </button>

        {/* Project Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-xl font-bold text-foreground">{project.name}</h1>
              <StatusBadge status={project.status} />
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" /> {project.client}
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck className="h-3.5 w-3.5" /> {project.mainContractor}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {project.startDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Banknote className="h-3.5 w-3.5" /> {project.contractValue}
              </span>
              <Badge variant="outline" className="text-xs">{project.contractType}</Badge>
            </div>
          </div>
          <Button
            variant="outline"
            className="gap-2 border-primary/30 text-primary hover:bg-primary/5"
            onClick={() => setExportOpen(true)}
          >
            <Shield className="h-4 w-4" />
            Export Dispute Evidence
          </Button>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-12 gap-5">
          {/* Left: Parties */}
          <div className="col-span-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">Parties Involved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.parties.map((party) => (
                  <div key={party.name} className="flex items-start gap-2">
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Building2 className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-tight">{party.name}</p>
                      <p className="text-xs text-muted-foreground">{party.role}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Centre: Document Timeline */}
          <div className="col-span-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Document Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {project.documents.map((doc) => (
                  <Link
                    key={doc.id}
                    to={`/project/${project.id}/document/${doc.id}`}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {doc.name}
                        </span>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">{doc.type}</Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{doc.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          {doc.blockchainStatus === "verified" && <CheckCircle2 className="h-3 w-3 text-accent" />}
                          {doc.blockchainStatus === "pending" && <Clock className="h-3 w-3 text-warning" />}
                          {doc.parties.join(", ")}
                          {doc.blockchainStatus === "verified" ? " ✓" : " ⏳"}
                        </span>
                      </div>
                    </div>
                    <BlockchainBadge status={doc.blockchainStatus} />
                  </Link>
                ))}
                {project.documents.length === 0 && (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    No documents yet. Click into "Riverside Residential" to see the full timeline.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right: Ownership Timeline */}
          <div className="col-span-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-primary" />
                  Ownership Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.ownershipTimeline.map((transfer, i) => (
                  <div key={i} className="relative pl-5 pb-4 last:pb-0">
                    {i < project.ownershipTimeline.length - 1 && (
                      <div className="absolute left-[7px] top-5 bottom-0 w-px bg-primary/20" />
                    )}
                    <div className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full bg-primary/15 flex items-center justify-center">
                      <Link2 className="h-2.5 w-2.5 text-primary" />
                    </div>
                    <p className="text-xs font-medium text-foreground leading-snug">{transfer.description}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {transfer.from} → {transfer.to}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[10px] text-muted-foreground">{transfer.date}</span>
                      {transfer.verified && (
                        <span className="text-[10px] text-accent flex items-center gap-0.5">
                          <CheckCircle2 className="h-2.5 w-2.5" /> On-chain verified
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {project.ownershipTimeline.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-2">No transfers recorded.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <DisputeExportModal
        open={exportOpen}
        onOpenChange={setExportOpen}
        documents={project.documents}
      />
    </div>
  );
};

export default ProjectView;
