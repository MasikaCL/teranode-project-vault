

# Teranode Sign — Blockchain-Linked Envelopes Prototype

## Design System
- **Primary color**: #59009E (deep purple)
- **Secondary color**: #2150B5 (blue)
- **Accent**: Green for verified/success states
- **Background**: White with light gray cards
- **Font**: Inter
- **Style**: Clean professional SaaS, card-based, desktop-only

## Screens & Components

### 1. Dashboard (`/`)
- Top nav bar: "Teranode Sign" logo/text (left), "New Project Folder" button (right)
- Grid/list of 4 project case folders as cards showing: project name, document count, party count, last activity date, status badge (Active / In Dispute / Completed)
- Clicking a folder navigates to the project view

### 2. Project Folder View (`/project/:id`)
- **Header**: Project name, client, main contractor, start date, contract value (£2.4M), contract type
- **3-column layout**:
  - **Left panel**: Parties list with roles (Developer, Main Contractor, Subcontractor)
  - **Centre panel**: Document Timeline — chronological list with document name, type badge, date, signing parties, blockchain status (Verified ✓ / Pending ⏳ / Missing). Clickable rows navigate to document detail
  - **Right panel**: Ownership Timeline — chain of custody transfers with chain-link icons and on-chain verified badges
- "Export Dispute Evidence" button in header area

### 3. Document Detail View (`/project/:id/document/:docId`)
- Document name, type, issued by/to, timestamp
- Blockchain anchor section: dummy hash with "Verified on BSV blockchain" + green checkmark
- Status line: "Served within contractual window ✓"
- Linked documents section with clickable parent reference
- Action buttons: Download, Share, View Audit Trail (placeholder)

### 4. New Project Folder Modal
- Triggered from dashboard "New Project Folder" button
- Form fields: Project name, Client name, Contract type dropdown, Add parties section
- Create button (closes modal, no actual creation)

### 5. Dispute Evidence Export Modal
- Triggered from project folder view
- Checklist of project documents (all pre-ticked)
- Blockchain verification included: Yes
- Chain of custody: Complete ✓
- "Export as PDF" button
- Footer text about replacing weeks of email archaeology

## Interactions
- Dashboard → click folder → Project Folder View
- Project Folder View → click document → Document Detail View
- Navigation breadcrumbs for back navigation
- All dummy data hardcoded throughout

