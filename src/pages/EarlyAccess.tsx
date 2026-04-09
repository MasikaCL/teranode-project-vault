import { useState, useEffect, useRef } from "react";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Shield,
  Clock,
  Users,
  Server,
  FileText,
  Link2,
  Tag,
  Bell,
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
  HardHat,
  Scale,
  Briefcase,
  Building2,
  Wrench,
  MessageSquare,
} from "lucide-react";

import teranodeLogo from "@/assets/teranode-logo.svg";
import landingHero from "@/assets/landing-hero.svg";
import landingUploadDocs from "@/assets/landing-upload-docs.svg";
import landingDocVerification from "@/assets/landing-doc-verification.svg";
import landingSigningOrders from "@/assets/landing-signing-orders.svg";
import landingTags from "@/assets/landing-tags.svg";
import landingActions from "@/assets/landing-actions.svg";
import landingPin from "@/assets/landing-pin.svg";
import landingBranching from "@/assets/landing-branching.svg";
import landingMultiparty from "@/assets/landing-multiparty.svg";
import landingPdcc from "@/assets/landing-pdcc.svg";
import landingDisputeMode from "@/assets/landing-dispute-mode.svg";
import landingEvidenceExport from "@/assets/landing-evidence-export.svg";
import landingPilotTeams from "@/assets/landing-pilot-teams.svg";

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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

      {/* ════════════════════════════════════════════ */}
      {/* ─── HERO ─── */}
      {/* ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-8 md:pb-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              For construction teams
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-6">
              Your contracts, signed and provable.{" "}
              <span className="text-primary">Built for construction disputes.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Teranode Sign is a working app you can use today to sign and anchor
              project documents to the blockchain — and we're now recruiting
              construction teams to shape our next features for disputes and
              chain of custody.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Button size="lg" onClick={scrollToSignup} className="text-base px-8">
                Request early access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="/">Start trial</Link>
              </Button>
            </div>
            <button
              onClick={scrollToChainOfCustody}
              className="text-sm text-primary font-medium hover:underline flex items-center gap-1 transition-colors mx-auto"
            >
              See how Project Chain of Custody works <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Hero product visual — larger, more prominent */}
          <Reveal>
            <div className="relative max-w-5xl mx-auto">
              <img
                src={landingHero}
                alt="Teranode Sign product interface"
                className="w-full h-auto relative z-10"
              />
            </div>
          </Reveal>
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

      {/* ════════════════════════════════════════════ */}
      {/* ─── WHAT'S LIVE NOW ─── */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
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
          </Reveal>

          {/* Feature 1 — Upload & sign */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
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
              <div className="rounded-xl overflow-hidden">
                <img src={landingUploadDocs} alt="Upload documents interface" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* Feature 2 — Document Verification (reversed) */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden">
                <img src={landingDocVerification} alt="Document verification with blockchain proof" className="w-full h-auto" loading="lazy" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Link2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Document verification</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Verify any signed document against an independent, tamper-proof
                  blockchain record. Every signature and timestamp is provable
                  on-chain — no single party controls the proof.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">Try it now <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Feature 3 — Custom signing flows */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ListOrdered className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom signing flows</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Set sequential or custom signing orders for recipients to review
                  and sign documents. Control who signs first, who approves, and
                  who receives a copy.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">Try it now <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={landingSigningOrders} alt="Custom signing order setup" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* Feature 4 — Tags (reversed) */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden">
                <img src={landingTags} alt="Organise documents with tags" className="w-full h-auto" loading="lazy" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Tag className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tags and organisation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Organise documents by project, counterparty, and type for faster
                  retrieval. Build your own tagging structure to match how your
                  team works.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">Try it now <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Feature 5 — Action dates */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Action dates and reminders</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Track expirations, renewals, and key contract milestones with
                  reminders. Never miss a deadline that could affect your
                  contractual position.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">Try it now <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={landingActions} alt="Action dates and reminders" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* Feature 6 — PIN access (reversed) */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden">
                <img src={landingPin} alt="PIN-protected document access" className="w-full h-auto" loading="lazy" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">PIN-protected access</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Add an extra security layer with a one-time PIN for sensitive
                  documents. Control who can open, view, and interact with
                  confidential project records.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">Try it now <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="text-center space-y-3 pt-4">
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

      {/* ════════════════════════════════════════════ */}
      {/* ─── THE PROBLEM ─── */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                The problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                Construction disputes start as{" "}
                <span className="text-primary">documentation problems.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Different parties hold different slices of the record. Contracts,
                  notices, variations, payment applications, and approvals live
                  across multiple systems — email threads, shared drives, filing
                  cabinets, and personal laptops.
                </p>
                <p>
                  By the time a dispute escalates, the paper trail is scattered,
                  incomplete, or contested. Different parties end up working from
                  different versions of the story.
                </p>
                <p className="font-medium text-foreground">
                  Teranode Sign keeps one provable record across all parties — so
                  when disputes happen, the evidence is already in order.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, text: "Contracts in email attachments" },
                { icon: AlertTriangle, text: "Variations with no audit trail" },
                { icon: Clock, text: "Missed notice deadlines" },
                { icon: Users, text: "Different parties, different records" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="rounded-xl border border-border bg-card p-5 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-destructive" />
                  </div>
                  <span className="text-sm font-medium leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* ─── DARK SECTION — WHAT WE'RE BUILDING + CHAIN OF CUSTODY ─── */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="chain-of-custody" className="py-24 md:py-32 px-6 bg-[hsl(228,30%,10%)]">
        <div className="max-w-7xl mx-auto">

          {/* Label */}
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-primary/30 border border-primary/40 px-4 py-1.5 rounded-full">
              <Clock className="h-3 w-3" /> In development with pilot users
            </span>
          </div>

          {/* ─── What we're building ─── */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3">
                What we're building
              </p>
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
          </Reveal>

          {/* ─── Built for Multi-party Workflows ─── */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Built for multi-party workflows</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Construction projects involve developers, main contractors,
                  specialist subcontractors, consultants, and joint delivery teams.
                  Teranode Sign maps documents across all parties so every
                  organisation has visibility into its own branch of the project
                  record.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Designed for consortia, downstream subcontracting relationships,
                  and complex multi-stakeholder structures where documentation
                  ownership flows across organisational boundaries.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 hover:border-primary/30 transition-colors duration-300">
                <img src={landingMultiparty} alt="Multi-party project collaboration" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* ─── Project Chain of Custody — main visual ─── */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-white">
                Project Chain of Custody
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Not just a contract — the entire project record. Every document,
                every party, every branch of downstream responsibility — tracked,
                time-stamped, and provable.
              </p>
            </div>
          </Reveal>

          {/* PDCC visual — full width dark card */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden mb-16 hover:border-primary/20 transition-colors duration-500">
              <div className="p-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-white/50 ml-2">Project Chain of Custody — Sample Project</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <span className="px-2 py-0.5 bg-white/10 rounded font-medium text-white/70">Branch</span>
                  <span className="px-2 py-0.5 rounded">List</span>
                </div>
              </div>
              <div className="p-4 md:p-8">
                <img
                  src={landingPdcc}
                  alt="Project Chain of Custody — branching document timeline across multiple parties"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Supporting text */}
          <Reveal>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center md:text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 mx-auto md:mx-0">
                  <Layers className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="font-bold mb-2 text-white">Multi-party, multi-branch</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Contracts, variations, sub-contracts, and payment applications flow
                  across multiple organisations — including consortia and joint
                  delivery teams.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 mx-auto md:mx-0">
                  <Eye className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="font-bold mb-2 text-white">Control and visibility</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Track who controls what, when access was granted or revoked, and
                  which party holds responsibility at every point in the project.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 mx-auto md:mx-0">
                  <FileCheck className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="font-bold mb-2 text-white">Provable and immutable</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Every document, every timestamp, every transfer of control is
                  anchored to the blockchain. No party can alter the record after the fact.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center mb-24">
              <Button size="lg" onClick={scrollToSignup} className="bg-primary text-white hover:bg-primary/90 text-base px-8">
                Join the pilot programme <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="border-t border-white/10 mb-20" />

          {/* ─── Dispute Mode ─── */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Dispute Mode</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Surface contested documents, preserve history, and keep evidence
                  intact. When a payment application or variation is disputed, the
                  entire chain of custody is frozen and protected — ready for
                  adjudication, not just filing.
                </p>
                <Button size="sm" onClick={scrollToSignup} className="bg-primary text-white hover:bg-primary/90">
                  Learn more <ChevronRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-red-500/20 transition-colors duration-300">
                <img src={landingDisputeMode} alt="Dispute mode — contested documents" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* ─── Evidence Export (reversed) ─── */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
              <div className="order-2 md:order-1 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-primary/20 transition-colors duration-300">
                <img src={landingEvidenceExport} alt="One-click evidence export bundle" className="w-full h-auto" loading="lazy" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Download className="h-5 w-5 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">One-click evidence export</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Assemble a complete dispute bundle with full audit trail, blockchain
                  verification, chain of custody record, and party access log — ready
                  for adjudicators, lawyers, or mediators. One click, one PDF.
                </p>
                <Button size="sm" onClick={scrollToSignup} className="bg-primary text-white hover:bg-primary/90">
                  View pilot features <ChevronRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="border-t border-white/10 mb-20" />

          {/* ─── WHO THIS PILOT IS FOR ─── */}
          <Reveal>
            <div className="mb-24">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                  Who this pilot is for
                </h2>
                <p className="text-white/60 leading-relaxed">
                  We're looking for construction teams who deal with real documentation
                  challenges and want to help shape a better solution.
                </p>
              </div>

              <div className="max-w-5xl mx-auto space-y-4 mb-12">
                {[
                  {
                    icon: Building2,
                    title: "Developers & main contractors",
                    desc: "Dealing with payment disputes, adjudication, or contentious variations across multiple subcontracts.",
                    why: "You need a single provable record across all downstream parties.",
                  },
                  {
                    icon: Scale,
                    title: "Commercial managers & QSs",
                    desc: "Responsible for documentation accuracy, evidence preparation, and contract compliance across project phases.",
                    why: "You spend weeks assembling evidence that should already be in order.",
                  },
                  {
                    icon: Briefcase,
                    title: "Legal teams & project managers",
                    desc: "Managing dispute readiness, audit trails, and ensuring documentation meets evidential standards.",
                    why: "You need documentation that stands up under scrutiny.",
                  },
                  {
                    icon: Wrench,
                    title: "Specialist subcontractors",
                    desc: "Need better visibility into what was issued, signed, or disputed — and provable records of their own submissions.",
                    why: "You need proof of what you submitted and when.",
                  },
                  {
                    icon: Users,
                    title: "Consortia & joint delivery teams",
                    desc: "Multi-stakeholder structures where documentation ownership and control flow across organisational boundaries.",
                    why: "You need shared visibility without shared control.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Teams willing to give feedback",
                    desc: "20–30 minutes per month to share what works, what doesn't, and what matters most for your workflows.",
                    why: "Your input directly shapes what we build next.",
                  },
                ].map(({ icon: Icon, title, desc, why }, i) => (
                  <Reveal key={title} delay={i * 80}>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex gap-5 items-start hover:border-primary/20 transition-colors duration-300">
                      <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="h-5 w-5 text-purple-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1">{title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-1.5">{desc}</p>
                        <p className="text-xs text-primary/80 font-medium">{why}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button onClick={scrollToSignup} className="bg-primary text-white hover:bg-primary/90">
                  Apply for early access <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-foreground border-white/20 hover:bg-white/90"
                  asChild
                >
                  <a href="mailto:contact@teranode.io">Talk to us</a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="border-t border-white/10 mb-20" />

          {/* ─── WHY TERANODE SIGN ─── */}
          <Reveal>
            <div className="mb-24">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                  Why Teranode Sign
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Security, auditability, and deployment flexibility — built for
                  regulated industries and multi-stakeholder workflows.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {[
                  {
                    icon: Shield,
                    title: "Secure and compliant",
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
                  <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center hover:border-primary/20 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-3 mx-auto">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>
                    <h3 className="font-semibold text-sm text-white mb-2">{title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ─── SIGNUP FORM ─── */}
          <Reveal>
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
                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                    Apply for early access
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
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
