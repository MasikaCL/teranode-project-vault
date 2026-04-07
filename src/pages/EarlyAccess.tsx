import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Shield,
  Clock,
  Users,
  Server,
  FileText,
  Link2,
  Tag,
  Bell,
  GitBranch,
  AlertTriangle,
  Download,
  CheckCircle2,
  ArrowRight,
  Lock,
  ListOrdered,
  ChevronRight,
  Eye,
  FileCheck,
  Layers,
} from "lucide-react";

import featureActions from "@/assets/feature-actions.svg";
import featureSigningOrders from "@/assets/feature-signing-orders.svg";
import featurePin from "@/assets/feature-pin.svg";
import featureTags from "@/assets/feature-tags.svg";
import teranodeLogo from "@/assets/teranode-logo.svg";
import landingVerifyChain from "@/assets/landing-verify-chain.png";
import landingAddRecipients from "@/assets/landing-add-recipients.png";
import landingTeam from "@/assets/landing-team.jpg";

const EarlyAccess = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    companyType: "",
    pain: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToChainOfCustody = () => {
    document.getElementById("chain-of-custody")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={teranodeLogo} alt="Teranode" className="h-7" />
            <span className="font-bold text-sm">Sign</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Dashboard</Link>
            </Button>
            <Button size="sm" onClick={scrollToSignup}>
              Request early access
            </Button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              For construction teams
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.1] mb-6">
              Your contracts, signed and provable.{" "}
              <span className="text-primary">Built for construction disputes.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Teranode Sign is a working app you can use today to sign and anchor
              project documents to the blockchain — and we're now recruiting
              construction teams to shape our next features for disputes and
              chain of custody.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <Button size="lg" onClick={scrollToSignup} className="text-base px-8">
                Request early access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="/">Start trial</Link>
              </Button>
            </div>
            <button
              onClick={scrollToChainOfCustody}
              className="text-sm text-primary font-medium hover:underline flex items-center gap-1 transition-colors"
            >
              See how Project Chain of Custody works <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Hero product visual */}
          <div className="relative hidden md:block">
            <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative rounded-xl border border-border bg-card shadow-xl overflow-hidden">
              <div className="p-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                </div>
                <span className="text-[11px] text-muted-foreground ml-2">Teranode Sign</span>
              </div>
              <img
                src={landingAddRecipients}
                alt="Add recipients and configure signing workflows"
                className="w-full"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg shadow-lg p-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Link2 className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold">Blockchain anchored</p>
                <p className="text-[11px] text-muted-foreground">Tamper-proof record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="border-y border-border bg-muted/30 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Link2, label: "Blockchain-backed timestamps" },
            { icon: Shield, label: "Tamper-proof audit trail" },
            { icon: Users, label: "Role-based access & signing" },
            { icon: Server, label: "Cloud-hosted or on-premises" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LIVE SECTION ─── */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Available in the app today
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What's live and ready now
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Teranode Sign is a real product, not a waitlist. Teams can sign up
              and start using it immediately to manage, sign, and timestamp
              construction documents.
            </p>
          </div>

          {/* Feature 1 — hero-sized: Upload & sign */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Upload and request signatures</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Send PDF or Word contracts, notices, and approvals for signature.
                Set up recipients, assign signing roles, and track every step of
                the workflow in one place.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/">Try it now <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
              </Button>
            </div>
            <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
              <div className="p-2.5 border-b border-border flex items-center gap-1.5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-destructive/50" />
                  <div className="w-2 h-2 rounded-full bg-warning/50" />
                  <div className="w-2 h-2 rounded-full bg-accent/50" />
                </div>
              </div>
              <img
                src={landingAddRecipients}
                alt="Recipient setup workflow"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Feature 2 — reversed: Blockchain timestamps */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-2 md:order-1 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
              <div className="p-2.5 border-b border-border flex items-center gap-1.5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-destructive/50" />
                  <div className="w-2 h-2 rounded-full bg-warning/50" />
                  <div className="w-2 h-2 rounded-full bg-accent/50" />
                </div>
              </div>
              <img
                src={landingVerifyChain}
                alt="Blockchain verification and on-chain proof"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Link2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Blockchain-backed timestamps</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anchor each signed document to an independent, tamper-proof record.
                Every signature and timestamp is verifiable on-chain — no single
                party controls the proof.
              </p>
            </div>
          </div>

          {/* 4 smaller feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                icon: ListOrdered,
                title: "Custom signing flows",
                desc: "Set sequential or custom signing orders for recipients to review and sign documents.",
                img: featureSigningOrders,
              },
              {
                icon: Tag,
                title: "Tags and organisation",
                desc: "Organise documents by project, counterparty, and type for faster retrieval.",
                img: featureTags,
              },
              {
                icon: Bell,
                title: "Action dates and reminders",
                desc: "Track expirations, renewals, and key contract milestones with reminders.",
                img: featureActions,
              },
              {
                icon: Lock,
                title: "PIN-protected access",
                desc: "Add an extra security layer with a one-time PIN for sensitive documents.",
                img: featurePin,
              },
            ].map(({ icon: Icon, title, desc, img }) => (
              <Card key={title} className="border border-border overflow-hidden group hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-muted/30 p-4 flex items-center justify-center border-b border-border h-36">
                    <img src={img} alt={title} className="max-h-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <h3 className="font-semibold text-sm">{title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-3">
            <p className="text-xs text-muted-foreground">
              Built for developers, main contractors, subcontractors, consultants, and multi-stakeholder project teams — including consortia and joint delivery teams.
            </p>
            <p className="text-sm font-semibold text-primary">
              The app is up and running and used by legal teams today.
            </p>
            <Button variant="outline" size="sm" asChild className="mt-2">
              <Link to="/">Start your trial <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── HUMAN CONTEXT / TRANSITION ─── */}
      <section className="relative py-20 px-6 bg-muted/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Construction projects are multi-party.{" "}
              <span className="text-primary">Your documentation should be too.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Developers, main contractors, subcontractors, and consultants all
              work on the same project but see different slices of the
              documentation. When disputes happen, the paper trail is scattered,
              incomplete, or contested. Teranode Sign keeps one provable record
              across all parties.
            </p>
            <Button onClick={scrollToChainOfCustody} variant="outline">
              See how it works <ChevronRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={landingTeam}
              alt="Construction team reviewing project documents"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1280}
              height={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* ─── PROJECT CHAIN OF CUSTODY — CORE VISUAL STORY ─── */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="chain-of-custody" className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              The core differentiator
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
              Project Chain of Custody
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Not just a contract — the entire project record. Every document,
              every party, every branch of downstream responsibility — tracked,
              time-stamped, and provable.
            </p>
          </div>

          {/* Large branching timeline visual — using actual app elements */}
          <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden mb-16">
            <div className="p-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">Contract Timeline — Riverside Development</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="px-2 py-0.5 bg-muted rounded text-xs font-medium">Branch</span>
                <span className="px-2 py-0.5 rounded text-xs">List</span>
              </div>
            </div>

            {/* The branching timeline SVG — modeled on the actual app */}
            <div className="p-6 md:p-10 overflow-x-auto">
              <svg viewBox="0 0 900 380" className="w-full min-w-[700px]" aria-label="Project Chain of Custody — branching timeline showing contracts flowing across multiple parties">
                {/* Party lane labels + dashed lines */}
                <text x="10" y="62" fontSize="12" fontWeight="600" fill="hsl(230, 10%, 45%)" fontFamily="Inter, sans-serif">Shared</text>
                <line x1="120" y1="62" x2="880" y2="62" stroke="hsl(230, 10%, 45%)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

                <text x="10" y="152" fontSize="12" fontWeight="600" fill="#2150B5" fontFamily="Inter, sans-serif">Apex Homes Ltd</text>
                <line x1="150" y1="152" x2="880" y2="152" stroke="#2150B5" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

                <text x="10" y="242" fontSize="12" fontWeight="600" fill="#E8930C" fontFamily="Inter, sans-serif">Hughes Bros</text>
                <line x1="120" y1="242" x2="880" y2="242" stroke="#E8930C" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

                <text x="10" y="332" fontSize="12" fontWeight="600" fill="#22A55D" fontFamily="Inter, sans-serif">RM Groundworks</text>
                <line x1="150" y1="332" x2="880" y2="332" stroke="#22A55D" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

                {/* Edges */}
                {/* Master → Amendment SOW (Apex) */}
                <path d="M 350 62 C 380 62, 380 152, 410 152" stroke="#2150B5" strokeWidth="2" fill="none" opacity="0.5" />
                {/* Master → Subcontract (Hughes) */}
                <path d="M 350 62 C 380 62, 380 242, 410 242" stroke="#E8930C" strokeWidth="2" fill="none" opacity="0.5" />
                {/* Amendment → Revised Payment (Apex) */}
                <line x1="590" y1="152" x2="660" y2="152" stroke="#2150B5" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />
                {/* Subcontract → Site Commencement (RM) */}
                <path d="M 590 242 C 620 242, 620 332, 660 332" stroke="#22A55D" strokeWidth="2" fill="none" opacity="0.5" />
                {/* Subcontract → Payment App (Hughes) */}
                <line x1="590" y1="242" x2="660" y2="242" stroke="#E8930C" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />
                {/* Convergence lines to Practical Completion */}
                <path d="M 840 152 C 860 152, 860 62, 870 62" stroke="#2150B5" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.2" />

                {/* Branch junction icons */}
                <circle cx="380" cy="107" r="8" fill="white" stroke="hsl(230, 10%, 80%)" strokeWidth="1" />
                <text x="380" y="110" textAnchor="middle" fontSize="8" fill="hsl(230, 10%, 45%)">🔗</text>

                <circle cx="620" cy="287" r="8" fill="white" stroke="hsl(230, 10%, 80%)" strokeWidth="1" />
                <text x="620" y="290" textAnchor="middle" fontSize="8" fill="hsl(230, 10%, 45%)">🔗</text>

                {/* ── NODES ── */}
                {/* Master Contract */}
                <rect x="170" y="30" width="180" height="64" rx="8" fill="white" stroke="hsl(230, 10%, 80%)" strokeWidth="1.5" />
                <text x="180" y="49" fontSize="12" fontWeight="600" fill="hsl(230, 25%, 15%)" fontFamily="Inter, sans-serif">Master Contract (JCT D&B)</text>
                <text x="180" y="63" fontSize="11" fill="hsl(230, 10%, 45%)" fontFamily="Inter, sans-serif">All Parties</text>
                <text x="180" y="76" fontSize="11" fill="hsl(230, 10%, 55%)" fontFamily="Inter, sans-serif">20 Jan 2025</text>
                <rect x="290" y="68" width="50" height="16" rx="3" fill="#DCFCE7" />
                <text x="296" y="79" fontSize="10" fontWeight="600" fill="#16A34A" fontFamily="Inter, sans-serif">Signed</text>

                {/* Amendment to SOW */}
                <rect x="410" y="120" width="180" height="64" rx="8" fill="white" stroke="#2150B5" strokeWidth="1.5" />
                <text x="420" y="139" fontSize="12" fontWeight="600" fill="hsl(230, 25%, 15%)" fontFamily="Inter, sans-serif">Amendment to SOW</text>
                <text x="420" y="153" fontSize="11" fill="#2150B5" fontFamily="Inter, sans-serif" fontWeight="500">Apex Homes Ltd</text>
                <text x="420" y="167" fontSize="11" fill="hsl(230, 10%, 55%)" fontFamily="Inter, sans-serif">14 Feb 2025</text>
                <rect x="530" y="158" width="50" height="16" rx="3" fill="#DCFCE7" />
                <text x="536" y="169" fontSize="10" fontWeight="600" fill="#16A34A" fontFamily="Inter, sans-serif">Signed</text>

                {/* Revised Payment Schedule */}
                <rect x="660" y="120" width="180" height="64" rx="8" fill="white" stroke="#2150B5" strokeWidth="1.5" />
                <text x="670" y="139" fontSize="12" fontWeight="600" fill="hsl(230, 25%, 15%)" fontFamily="Inter, sans-serif">Revised Payment Schedule</text>
                <text x="670" y="153" fontSize="11" fill="#2150B5" fontFamily="Inter, sans-serif" fontWeight="500">Apex Homes Ltd</text>
                <text x="670" y="167" fontSize="11" fill="hsl(230, 10%, 55%)" fontFamily="Inter, sans-serif">20 Feb 2025</text>
                <rect x="772" y="158" width="58" height="16" rx="3" fill="#FEF9C3" />
                <text x="777" y="169" fontSize="9" fontWeight="600" fill="#CA8A04" fontFamily="Inter, sans-serif">Acknowledged</text>

                {/* Subcontract Agreement */}
                <rect x="410" y="210" width="180" height="64" rx="8" fill="white" stroke="#E8930C" strokeWidth="1.5" />
                <text x="420" y="229" fontSize="11" fontWeight="600" fill="hsl(230, 25%, 15%)" fontFamily="Inter, sans-serif">Subcontract Agreement</text>
                <text x="420" y="243" fontSize="11" fill="#E8930C" fontFamily="Inter, sans-serif" fontWeight="500">Hughes Bros</text>
                <text x="420" y="257" fontSize="11" fill="hsl(230, 10%, 55%)" fontFamily="Inter, sans-serif">3 Feb 2025</text>
                <rect x="530" y="248" width="50" height="16" rx="3" fill="#DCFCE7" />
                <text x="536" y="259" fontSize="10" fontWeight="600" fill="#16A34A" fontFamily="Inter, sans-serif">Signed</text>

                {/* Payment Application #4 — disputed */}
                <rect x="660" y="210" width="180" height="64" rx="8" fill="white" stroke="#EF4444" strokeWidth="2" />
                <rect x="657" y="207" width="186" height="70" rx="10" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.25" />
                <text x="670" y="229" fontSize="11" fontWeight="600" fill="hsl(230, 25%, 15%)" fontFamily="Inter, sans-serif">Payment Application #4</text>
                <text x="670" y="243" fontSize="11" fill="#E8930C" fontFamily="Inter, sans-serif" fontWeight="500">Hughes Bros</text>
                <text x="670" y="257" fontSize="11" fill="hsl(230, 10%, 55%)" fontFamily="Inter, sans-serif">1 Apr 2025</text>
                <rect x="770" y="248" width="42" height="16" rx="3" fill="#DBEAFE" />
                <text x="775" y="259" fontSize="10" fontWeight="600" fill="#2563EB" fontFamily="Inter, sans-serif">Issued</text>
                <rect x="670" y="268" width="55" height="15" rx="3" fill="#FEE2E2" />
                <text x="675" y="278" fontSize="9" fontWeight="600" fill="#EF4444" fontFamily="Inter, sans-serif">Disputed</text>

                {/* Site Commencement Notice */}
                <rect x="660" y="300" width="180" height="64" rx="8" fill="white" stroke="#22A55D" strokeWidth="1.5" />
                <text x="670" y="319" fontSize="11" fontWeight="600" fill="hsl(230, 25%, 15%)" fontFamily="Inter, sans-serif">Site Commencement Notice</text>
                <text x="670" y="333" fontSize="11" fill="#22A55D" fontFamily="Inter, sans-serif" fontWeight="500">RM Groundworks Ltd</text>
                <text x="670" y="347" fontSize="11" fill="hsl(230, 10%, 55%)" fontFamily="Inter, sans-serif">5 Feb 2025</text>
                <rect x="800" y="338" width="50" height="16" rx="3" fill="#DCFCE7" />
                <text x="806" y="349" fontSize="10" fontWeight="600" fill="#16A34A" fontFamily="Inter, sans-serif">Signed</text>
              </svg>
            </div>
          </div>

          {/* Chain of Custody supporting text */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto md:mx-0">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Multi-party, multi-branch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contracts, variations, sub-contracts, and payment applications flow
                across multiple organisations — including consortia and joint
                delivery teams.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto md:mx-0">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Control and visibility</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Track who controls what, when access was granted or revoked, and
                which party holds responsibility at every point in the project.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto md:mx-0">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Provable and immutable</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every document, every timestamp, every transfer of control is
                anchored to the blockchain. No party can alter the record after the fact.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={scrollToSignup} className="text-base px-8">
              Join the pilot programme <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* ─── DARK SECTION — FUTURE / PILOT / CONVERSION ZONE ─── */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-[hsl(228,30%,10%)]">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full">
              <Clock className="h-3 w-3" /> In development with pilot users
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-white">
              Built around real disputes, not just signatures.
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              We're building features designed for multi-stakeholder construction
              projects, consortia, joint delivery teams, and downstream
              subcontracting relationships — where disputes happen and evidence
              matters.
            </p>
          </div>

          {/* Dispute Mode + Evidence Export — two alternating blocks */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Dispute Mode</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Surface contested documents, preserve history, and keep evidence
                intact. When a payment application or variation is disputed, the
                entire chain of custody is frozen and protected — ready for
                adjudication, not just filing.
              </p>
              <Button variant="outline" size="sm" onClick={scrollToSignup} className="border-white/20 text-white hover:bg-white/10">
                Learn more <ChevronRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
              <svg viewBox="0 0 400 160" className="w-full" aria-label="Dispute mode — contested document">
                <rect x="10" y="10" width="170" height="70" rx="8" fill="transparent" stroke="#EF4444" strokeWidth="2" />
                <text x="25" y="32" fontSize="11" fontWeight="600" fill="white" fontFamily="Inter, sans-serif">Payment Application #4</text>
                <text x="25" y="47" fontSize="10" fill="#E8930C" fontFamily="Inter, sans-serif">Hughes Bros</text>
                <text x="25" y="62" fontSize="10" fill="white" opacity="0.5" fontFamily="Inter, sans-serif">1 Apr 2025</text>
                <rect x="25" y="66" width="55" height="14" rx="3" fill="#FEE2E2" />
                <text x="30" y="76" fontSize="8" fontWeight="600" fill="#EF4444" fontFamily="Inter, sans-serif">Disputed</text>

                <path d="M 180 45 L 220 45" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="200" y="40" textAnchor="middle" fontSize="7" fill="white" opacity="0.4">freeze</text>

                <rect x="220" y="15" width="170" height="60" rx="8" fill="transparent" stroke="white" strokeWidth="1" opacity="0.25" />
                <text x="235" y="35" fontSize="10" fill="white" opacity="0.7" fontFamily="Inter, sans-serif">History preserved</text>
                <text x="235" y="50" fontSize="10" fill="white" opacity="0.7" fontFamily="Inter, sans-serif">Evidence locked</text>
                <text x="235" y="65" fontSize="10" fill="white" opacity="0.7" fontFamily="Inter, sans-serif">Chain of custody intact</text>

                <rect x="10" y="100" width="380" height="50" rx="8" fill="hsl(0, 60%, 20%)" opacity="0.3" />
                <text x="25" y="122" fontSize="10" fill="#FCA5A5" fontFamily="Inter, sans-serif" fontWeight="500">⚠ Freeze scope: contested documents only</text>
                <text x="25" y="138" fontSize="9" fill="white" opacity="0.5" fontFamily="Inter, sans-serif">Disputed by Apex Homes Ltd — 10 Apr 2025</text>
              </svg>
            </div>
          </div>

          {/* Evidence Export — reversed */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="order-2 md:order-1 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
              <svg viewBox="0 0 400 160" className="w-full" aria-label="One-click evidence export">
                <rect x="10" y="10" width="160" height="140" rx="8" fill="transparent" stroke="white" strokeWidth="1" opacity="0.2" />
                <text x="25" y="32" fontSize="11" fontWeight="600" fill="white" fontFamily="Inter, sans-serif">Evidence Bundle</text>
                <line x1="25" y1="40" x2="155" y2="40" stroke="white" strokeWidth="0.5" opacity="0.2" />
                <text x="25" y="58" fontSize="10" fill="white" opacity="0.6" fontFamily="Inter, sans-serif">✓ All project documents</text>
                <text x="25" y="74" fontSize="10" fill="white" opacity="0.6" fontFamily="Inter, sans-serif">✓ Full audit trail</text>
                <text x="25" y="90" fontSize="10" fill="white" opacity="0.6" fontFamily="Inter, sans-serif">✓ Blockchain proof</text>
                <text x="25" y="106" fontSize="10" fill="white" opacity="0.6" fontFamily="Inter, sans-serif">✓ Chain of custody</text>
                <text x="25" y="122" fontSize="10" fill="white" opacity="0.6" fontFamily="Inter, sans-serif">✓ Dispute timeline</text>
                <text x="25" y="138" fontSize="10" fill="white" opacity="0.6" fontFamily="Inter, sans-serif">✓ Party access log</text>

                <path d="M 185 80 L 230 80" stroke="hsl(270, 80%, 60%)" strokeWidth="2" markerEnd="url(#arrow-export)" />
                <defs>
                  <marker id="arrow-export" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 Z" fill="hsl(270, 80%, 60%)" />
                  </marker>
                </defs>

                <rect x="240" y="50" width="150" height="60" rx="8" fill="hsl(270, 80%, 60%)" />
                <text x="315" y="76" textAnchor="middle" fontSize="12" fontWeight="600" fill="white" fontFamily="Inter, sans-serif">Download PDF</text>
                <text x="315" y="92" textAnchor="middle" fontSize="9" fill="white" opacity="0.7" fontFamily="Inter, sans-serif">Ready for adjudicators</text>
              </svg>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Download className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">One-click evidence export</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Assemble a complete dispute bundle with full audit trail, blockchain
                verification, chain of custody record, and party access log — ready
                for adjudicators, lawyers, or mediators. One click, one PDF.
              </p>
              <Button variant="outline" size="sm" onClick={scrollToSignup} className="border-white/20 text-white hover:bg-white/10">
                View pilot features <ChevronRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-20" />

          {/* WHO THIS IS FOR */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-white">
                Who this pilot is for
              </h2>
              <ul className="space-y-4">
                {[
                  "Developers or main contractors dealing with payment disputes, adjudication, or contentious variations",
                  "Commercial managers, QSs, legal teams, or project managers responsible for documentation and evidence",
                  "Specialist subcontractors who need better visibility and proof of what was issued, signed, or disputed",
                  "Teams willing to give 20–30 minutes of feedback per month during the pilot",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button onClick={scrollToSignup} className="bg-primary hover:bg-primary/90">
                  Apply for early access <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="mailto:contact@teranode.io">Talk to us</a>
                </Button>
              </div>
            </div>

            {/* Why Teranode Sign */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-white">
                Why Teranode Sign
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Secure and compliant workflows",
                    desc: "Signing workflows designed for regulated industries — construction, infrastructure, and engineering.",
                  },
                  {
                    icon: Link2,
                    title: "Tamper-proof records",
                    desc: "Blockchain verification means no one can alter a record after the fact.",
                  },
                  {
                    icon: Server,
                    title: "Full control over data",
                    desc: "Choose cloud-hosted isolated environments or on-premises deployment.",
                  },
                  {
                    icon: Users,
                    title: "Role-based access",
                    desc: "Separate permissions for requestors, signers, and third parties.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <Icon className="h-4 w-4 text-purple-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-sm text-white mb-0.5">{title}</h3>
                      <p className="text-xs text-white/60 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── SIGNUP FORM ─── */}
          <div id="signup" className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Join the pilot / early access
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                This is for companies who want to try the app now and help shape
                the next set of dispute-focused features. We'll review every
                application personally.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-white">Thanks for applying</h3>
                <p className="text-sm text-white/70">
                  We'll review and get back to you within 2 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium mb-1.5 block text-white/80">Name</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block text-white/80">Email</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium mb-1.5 block text-white/80">Company</label>
                    <Input
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Company name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block text-white/80">Role</label>
                    <Input
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      placeholder="e.g. Commercial Manager"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block text-white/80">Company type</label>
                  <Select
                    value={form.companyType}
                    onValueChange={(v) => setForm({ ...form, companyType: v })}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select company type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="main-contractor">Main Contractor</SelectItem>
                      <SelectItem value="subcontractor">Subcontractor</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block text-white/80">
                    Biggest documentation pain
                  </label>
                  <Textarea
                    value={form.pain}
                    onChange={(e) => setForm({ ...form, pain: e.target.value })}
                    placeholder="What's the hardest part of managing project documents today?"
                    className="min-h-[80px] bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Apply for early access
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-10 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={teranodeLogo} alt="Teranode" className="h-6" />
            <span className="font-bold text-sm">Sign</span>
          </div>
          <p className="text-xs text-muted-foreground text-center md:text-left">
            Secure document workflows with blockchain-backed proof and role-based control.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Login</Link>
            <a href="mailto:contact@teranode.io" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EarlyAccess;
