# SKILLTECH — Corporate HR & Workforce Solutions

> **Connecting Talent, Projects & Business Opportunities**  
> Business Consulting and Services | Mumbai, Maharashtra | Founded 2020

---

## 1. Overview

SKILLTECH is a production-grade corporate web platform designed for SkillTech, an executive workforce and business consulting firm headquartered in Mumbai, Maharashtra. Built strictly adhering to the official company profile, this application delivers:

- **Core Workforce Models**:
  - `01 — On-Roll`: Long-term manpower for permanent and continuing roles
  - `02 — Off-Roll`: Flexible deployment for external client staffing
  - `03 — Short-Term`: Time-bound talent for defined projects & deliverables
  - `04 — Contractual`: Fixed-term roles with clear terms & HR coordination
  - `05 — Internships`: Early-career pipeline & campus talent incubation
- **Operational Lifecycle**: 8-stage delivery timeline from Requirement to Deployment & Closure.
- **Service Ecosystem**: 12 core enterprise services including Workspace Solutions, CA Consulting, Turnkey Project Management, and Global Mobility.
- **Lead Capture & Verification**: Interactive workforce enquiry submission form with comprehensive frontend validation.

---

## 2. Tech Stack

- **React 19** (Functional components, hooks)
- **TypeScript** (Strict typing, interfaces)
- **Tailwind CSS v4** (Modern utility engine)
- **Lucide React** (Crisp vector icons)
- **Vite 8** (High-speed build tool and dev server)

---

## 3. Project Structure

```text
├── public/
│   ├── _redirects             # SPA routing rewrite rule for Netlify
│   ├── robots.txt             # SEO robots policy
│   └── sitemap.xml            # Search engine sitemap index
├── src/
│   ├── assets/
│   │   └── images/            # High-resolution generated corporate visuals
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky frosted-glass navbar with mobile drawer
│   │   ├── SkillTechLogo.tsx  # SkillTech gear & leaf brand mark
│   │   ├── SectionHeading.tsx # Editorial typographic heading
│   │   ├── StatsCounter.tsx   # Animated viewport counter
│   │   ├── Footer.tsx         # Multi-column footer & legal policies
│   │   ├── GoDaddyGuideModal.tsx # In-app GoDaddy domain & DNS guide
│   │   └── CareerApplyModal.tsx # Talent application & candidate intake modal
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── SnapshotSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesOverviewSection.tsx
│   │   ├── WorkforceModelsSection.tsx
│   │   ├── DetailedWorkforceSection.tsx
│   │   ├── ProcessTimelineSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   ├── WhySkillTechSection.tsx
│   │   ├── CareersSection.tsx
│   │   └── ContactSection.tsx
│   ├── data/
│   │   └── companyData.ts     # Sourced PDF company truth
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                 # SEO title, meta, schema.org JSON-LD
├── vercel.json                # SPA rewrite rule for Vercel
├── package.json
└── tsconfig.json
```

---

## 4. Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 5. GoDaddy Domain & Production Deployment

To connect your domain registered with **GoDaddy** to your deployed site:

### Step A: Deploy to Hosting Provider (Vercel / Netlify)
1. Push this repository to **GitHub**.
2. Log in to [Vercel](https://vercel.com) (or Netlify).
3. Import your GitHub repository.
4. Set Build Command: `npm run build` and Output Directory: `dist`.
5. Deploy.

### Step B: Configure DNS in GoDaddy
1. Log in to your **GoDaddy Account** &rarr; navigate to **My Products** &rarr; **Domains**.
2. Select your domain &rarr; click **Manage DNS**.
3. Under **DNS Records**, add or update:
   - **Type A**:
     - **Name**: `@`
     - **Value**: `76.76.21.21` (for Vercel)
     - **TTL**: `1/2 Hour`
   - **CNAME**:
     - **Name**: `www`
     - **Value**: `cname.vercel-dns.com` (for Vercel)
     - **TTL**: `1/2 Hour`

### Step C: Enable Automatic HTTPS / SSL & WWW Redirect
- Vercel/Netlify will automatically provision a free Let's Encrypt SSL certificate once DNS records propagate (typically within 5 to 30 minutes).
- In Vercel Project Settings &rarr; Domains, set your canonical domain (e.g., `skilltech.in`) and choose "Redirect www.skilltech.in to skilltech.in (301 Moved Permanently)".

### Step D: SPA Routing (Prevent 404s on Refresh)
- The repository already contains `vercel.json` and `public/_redirects` which rewrite all incoming path requests to `/index.html`, ensuring clean browser refreshes.

---

## 6. Company Source of Truth (Verified PDF)

- **Organization**: SKILLTECH
- **Positioning**: Connecting Talent, Projects & Business Opportunities
- **Sector**: Business Consulting and Services
- **Headquarters**: Mumbai, Maharashtra
- **Founded**: 2020
- **Size**: 51–200
- **Associated Members**: 284+
