# Event Page Design Plan

**Source:** `Matrix.pdf` — Activity Matrix for Preparation of the 2028 Budget Proposal  
**Event:** Preparation of the 2028 Budget Proposal — Seminar/Workshop  
**Organizer:** SDO Cagayan de Oro City (DepEd)  
**Dates:** October 30 – November 7, 2026  
**Output:** `src/app/page.tsx` — Next.js App Router home page using shadcn/ui (Hero1, Card, Badge, Button)

---

## 1. Event Overview (from PDF)

| Field | Detail |
|-------|--------|
| **Event Name** | Preparation of the 2028 Budget Proposal |
| **Type** | Seminar / Workshop (4-day activity matrix) |
| **Organizer** | Schools Division Office (SDO) Cagayan de Oro City — Department of Education (DepEd) |
| **Pre-Work** | October 30, 2026, 1:00 – 5:00 PM |
| **Day 1** | November 4, 2026 — Registration, QMS Meeting |
| **Day 2** | November 5, 2026 — Opening Ceremonies, Sessions |
| **Day 3** | November 6, 2026 — Workshop Activity |
| **Day 4** | November 7, 2026 — Workshop/Submission, Closing Program, Homebound |

### Pre-Work Speakers (Oct 30)
- **Marilou F. Navaja** — Administrative Officer V, Budget Officer — *Overview on the Preparation of the 2028 Budget Proposal*
- **Rodel S. Megollas** — Planning Officer III, SDO Cagayan de Oro City — *2028 Budget Proposal System*

### Day 2 Speakers / Facilitators
- **Rosalio R. Vitorillo** — Chief SGOD — Opening Ceremonies
- **Jean S. Macasero** — Chief CID — Messages
- **Audie S. Borres** — Assistant Schools Division Superintendent — Messages
- **Roy Angelo E. Gazo** — Schools Division Superintendent, OSDS — Ice Breaker
- **Beverly Anne E. Nicolasora** — Senior Education Program Specialist — *From Planning to Budgeting: Aligning DEDP and SIP Priorities*
- **Eleanor Consejo H. Rollan** — Senior Education Program Specialist, TWG — *Monitoring & Evaluation of Division Programs (BEMEF)*
- **Derrold Marl S. Aves** — Senior Education Program Specialist, CID — *Utilization of the FY 2027 HRD Fund*
- **Almira K. Reyes** — Administrative Officer IV, Procurement Unit, TWG — *Enhancing Procurement Planning (PPMP, APP Formulation)*
- **Arnel A. Calubag, CPA** — Accountant III — *DBM Deliverables and Submission Timeline*

### Secretariat
- QMR/QMS Secretariat

---

## 2. Design Concept

**Theme:** Professional government / education seminar — clean, structured, trustworthy  
**Visual metaphor:** Budget document meets workshop agenda — grid-based layout, tabular agenda styling, formal but approachable

**Color strategy (from shadcnblocks theme in `globals.css`):**
- Primary: deep neutral/charcoal (`oklch(0.205 0 0)`) — authority, formality
- Background: pure white (`oklch(1 0 0)`)
- Foreground: near-black (`oklch(0.145 0 0)`)
- Accent: chart-1 amber/orange (`oklch(0.646 0.222 41.116)`) for CTAs and highlights
- Secondary: light gray (`oklch(0.97 0 0)`) for cards and subtle sections

**Typography (from `globals.css`):**
- Headings: Playfair Display (serif) — formal, institutional
- Body: Inter (sans-serif) — readable, clean
- Mono: IBM Plex Mono — for times, codes, room numbers

**Layout:** Single-page scrollable event site with anchored sections:
1. Hero (Hero1 component)
2. Event details / quick facts (Card grid)
3. About / overview
4. Speakers & facilitators (Card grid)
5. Day-by-day agenda (table/Card timeline)
6. Registration CTA (Badge + Button)
7. Footer

---

## 3. Section-by-Section Plan

### Section 1 — Hero (`Hero1` component)
- **Badge:** `DepEd SDO Cagayan de Oro City` (outline variant)
- **Heading:** `Preparation of the 2028 Budget Proposal`
- **Description:** `A 4-day seminar and workshop on budget proposal preparation, planning alignment, and submission. October 30 – November 7, 2026.`
- **Primary Button:** `View Full Agenda` → `#agenda`
- **Secondary Button:** `Register Now` → `#registration`
- **Image:** Budget/finance-themed illustration (shadcnblocks CDN or placeholder)

### Section 2 — Event Quick Facts (Card grid, 4 cards)
1. **Date:** November 4–7, 2026 (Pre-work: Oct 30)
2. **Venue:** SDO Cagayan de Oro City
3. **Organizer:** DepEd — Schools Division Office
4. **Secretariat:** QMR/QMS Secretariat

### Section 3 — About / Overview
- Brief paragraph on the seminar's purpose
- Key topics: DEDP/SIP alignment, WFP 2027–2028, BEMEF framework, HRD fund utilization, PPMP/APP procurement planning, DBM deliverables

### Section 4 — Speakers & Facilitators (Card grid, 3 per row)
Each card: photo placeholder, name, title/role, session topic

| Speaker | Role | Session |
|---------|------|---------|
| Marilou F. Navaja | Administrative Officer V, Budget Officer | Overview on Preparation of 2028 Budget Proposal |
| Rodel S. Megollas | Planning Officer III | 2028 Budget Proposal System |
| Rosalio R. Vitorillo | Chief SGOD | Opening Ceremonies |
| Jean S. Macasero | Chief CID | Messages |
| Audie S. Borres | Assistant SDS | Messages |
| Beverly Anne E. Nicolasora | Senior EPS | From Planning to Budgeting |
| Eleanor Consejo H. Rollan | Senior EPS, TWG | M&E of Division Programs (BEMEF) |
| Derrold Marl S. Aves | Senior EPS, CID | FY 2027 HRD Fund Utilization |
| Almira K. Reyes | Administrative Officer IV, Procurement | PPMP Preparation & APP Formulation |
| Arnel A. Calubag, CPA | Accountant III | DBM Deliverables & Submission Timeline |

### Section 5 — Day-by-Day Agenda (Timeline / Table)
**Pre-Work — October 30, 2026 (1:00–5:00 PM)**
- Overview on the Preparation of the 2028 Budget Proposal — Marilou F. Navaja
- 2028 Budget Proposal System — Rodel S. Megollas

**Day 1 — November 4, 2026**
- 11:00–12:00 Registration — QMR/QMS Secretariat
- 1:00–4:00 QMS Meeting — Marilou F. Navaja

**Day 2 — November 5, 2026**
- 8:00–8:10 Opening Ceremonies — Rosalio R. Vitorillo
- 8:10–8:30 Acknowledgement of Participants
- 8:30–9:00 Messages — Jean S. Macasero, Audie S. Borres
- 9:00–9:10 Ice Breaker — Roy Angelo E. Gazo
- 9:10–10:10 From Planning to Budgeting — Beverly Anne E. Nicolasora
- 10:10–10:20 Budget Proposal Ice Breaker
- 10:20–11:20 M&E of Division Programs — Eleanor Consejo H. Rollan
- 12:20–12:30 Preliminaries — Derrold Marl S. Aves
- 12:30–1:30 Utilization of FY 2027 HRD Fund — Almira K. Reyes
- 1:30–1:40 Ice Breaker
- 1:40–2:40 Enhancing Procurement Planning — Almira K. Reyes
- 2:40–3:40 DBM Deliverables & Submission Timeline — Arnel A. Calubag
- 3:40–4:40 Ice Breaker

**Day 3 — November 6, 2026**
- 8:00–12:00 Workshop Activity
- 1:00–5:00 Workshop Activity

**Day 4 — November 7, 2026**
- 8:00–12:00 Workshop / Submission of Outputs
- 1:00–5:00 Closing Program
- Homebound

### Section 6 — Registration CTA
- Badge: `Limited Slots Available` (outline variant)
- Heading: `Reserve Your Seat`
- Primary Button: `Register Now` → mailto or form link
- Secondary Button: `Contact Secretariat` → `#contact`

### Section 7 — Footer
- Organizer: DepEd SDO Cagayan de Oro City
- Secretariat: QMR/QMS Secretariat
- Date range: October 30 – November 7, 2026

---

## 4. Component Mapping

| Section | Component | Props |
|---------|-----------|-------|
| Hero | `Hero1` | badge, heading, description, buttons (primary/secondary), image |
| Quick Facts | `Card` ×4 | CardHeader/CardTitle, CardContent |
| Speakers | `Card` ×10 | CardContent (name + role + topic) |
| Agenda | Custom table/timeline | Badge for day labels, Card for session blocks |
| Registration CTA | `Badge` + `Button` | Badge outline, Button default + outline |
| Footer | Custom | text links |

---

## 5. Implementation Notes

- File: `src/app/page.tsx`
- Components available: `Hero1` (`@/components/hero1`), `Card` (`@/components/ui/card`), `Badge` (`@/components/ui/badge`), `Button` (`@/components/ui/button`)
- Button supports `asChild` via `render={<a href="..." />}` and `nativeButton={false}` (see `button.tsx`)
- Hero1 accepts `Partial<Hero1Props>` — all props optional except none strictly required (has defaultProps)
- Badge supports `variant="outline"`
- Tailwind v4 with CSS variables (`oklch`) — use `bg-primary`, `text-primary-foreground`, `bg-muted`, `text-muted-foreground`, etc.
- Container utility: `@utility container` with `margin-inline: auto; padding-inline: 2rem;`
- Dark mode supported via `.dark` class

---

## 6. Next Steps

1. Write `src/app/page.tsx` implementing all sections above
2. Run `npx tsc --noEmit` to verify TypeScript
3. Run `npm run dev` to preview in browser
4. Adjust spacing, responsive breakpoints (sm/md/lg), and image assets
