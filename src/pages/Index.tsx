import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import NewProjectModal from "@/components/NewProjectModal";
import { projects } from "@/data/dummyData";
import { FileText, Users, Calendar } from "lucide-react";

const Index = () => {
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onNewProject={() => setNewProjectOpen(true)} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Project Case Folders</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Blockchain-linked envelopes for tamper-proof project records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="cursor-pointer hover:shadow-md transition-shadow border hover:border-primary/30"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-base font-semibold text-foreground leading-tight pr-2">
                    {project.name}
                  </h2>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    {project.documentCount} documents
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {project.partyCount} parties
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {project.lastActivity}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <NewProjectModal open={newProjectOpen} onOpenChange={setNewProjectOpen} />
    </div>
  );
};

export default Index;
