import { StaticImageData } from "next/image";

import adorn from "@/app/assets/framed/Adorn.webp";
import aofounda from "@/app/assets/framed/AO-Foundation.webp";
import appOwe from "@/app/assets/images/hero-new.webp";
import broadcastFramed from "@/app/assets/images/broadcast.webp";
import earngageFramed from "@/app/assets/images/earngage.webp";
import bookpheralFramed from "@/app/assets/images/bookpheral-hero.webp";
import bookpheralMobileFramed from "@/app/blur.jpg";
import traqeetFramed from "@/app/assets/images/traqeet-feature.webp";
import traqeetMobileFramed from "@/app/blur.jpg";
import devfest from "@/app/assets/framed/Devfest-Mosho.webp";
import flutterbytes from "@/app/assets/framed/FlutterBytes.webp";
import hackade from "@/app/assets/framed/Hackade.webp";
import join from "@/app/assets/framed/Join.webp";
import joindaQuest from "@/app/assets/images/hero-new.webp";
import langueageai from "@/app/assets/framed/Language-AI.webp";
import nugapay from "@/app/assets/framed/Nugapay.webp";
import pvcpipe from "@/app/assets/framed/PVC-Pipe.webp";
import rainHackathon from "@/app/assets/framed/Rain-Hackathon.webp";
import rainSummit from "@/app/assets/framed/Rain-Summit.webp";
import reciplorer from "@/app/assets/framed/Reciplorer.webp";
import ridot from "@/app/assets/framed/Ridot.webp";
import scissor from "@/app/assets/framed/Scissors.webp";
import treesoft from "@/app/assets/framed/Treesoft.webp";
import uverus from "@/app/assets/framed/Uverus.webp";
import wapp from "@/app/assets/framed/Wapp.webp";
import yieldvest from "@/app/assets/images/projects/yieldvest-overview.webp";
import plitrak from "@/app/assets/framed/Plitrak.webp";
import paperstery from "@/app/assets/framed/Paperstery.webp";
import carus from "@/app/assets/framed/Carus.webp";
import ridotv2 from "@/app/assets/framed/Ridot_v.2.webp";
import launch from "@/app/assets/framed/Launch.webp";

interface TProject {
  id?: number;
  name: string;
  description: string;
  slug: string;
  projectUrl: string;
  framedImage: string | StaticImageData;
  category: string;
  repo: string;
  languages: string[];
  image?: string;
  image2?: string;
  image3?: string;
  type?: string;
  status?: string;
  version?: string;
  detail?: string;
  challenge?: string;
  gains?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
  platform: "web" | "mobile";
  demoVideo?: string;
  demoVideoPortrait?: string;
  demoVideoLandscape?: string;
}
export const projectsData: TProject[] = [
  {
    id: 28,
    name: "Broadcast",
    description:
      "A WhatsApp bulk messaging platform with an AI-powered auto-reply bot, campaign management, real-time delivery tracking, and document dispatch — built on Meta's WhatsApp Cloud API.",
    slug: "broadcast",
    projectUrl: "https://broadcast.com.ng",
    framedImage: broadcastFramed,
    image: "/images/projects/broadcast/broadcast-home.webp",
    image2: "/images/projects/broadcast/broadcast-features.webp",
    image3: "/images/projects/broadcast/broadcast-howitworks.webp",
    category: "personal",
    repo: "https://github.com/rahmlad-aramide/broadcast",
    languages: [
      "TypeScript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "BullMQ",
      "Redis",
      "Socket.IO",
      "Google Gemini AI",
    ],
    platform: "web",
    type: "SaaS Tool",
    status: "Completed",
    detail:
      "Broadcast (originally built as WA Blast) grew from a simple WhatsApp bot into a full-blown bulk messaging platform for businesses. The system handles two distinct jobs: an AI that responds to inbound WhatsApp messages using Google Gemini with short conversational context, and a campaign management engine for sending templated messages at scale.\n\nThe platform covers the full messaging lifecycle — contact management with CSV import, opt-in/opt-out handling via keywords, Meta-registered template creation, campaign scheduling and queuing, and per-message status tracking across queued, sent, delivered, read, and failed states. A separate document dispatch feature enables sending to hundreds of recipients at once, with recipients imported via CSV (linking each phone number to a document URL) or a ZIP archive of PDFs named by phone number. A React/Vite admin dashboard, served from the same Express server, gives the client full visibility into campaigns, contacts, templates, dispatches, and aggregate analytics — all with real-time updates via Socket.IO. The tool has since grown into Broadcast, a self-serve product at broadcast.com.ng built directly on Meta's official WhatsApp Cloud API with zero markup on messaging fees.",
    challenge:
      "The central challenge was reliable, rate-limited delivery at scale against Meta's WhatsApp Cloud API without hitting quality thresholds that could pause or ban the number. BullMQ backed by Redis handles the send queue, enforcing configurable inter-message delays and gracefully pausing campaigns when Meta signals a low-quality phone number via a webhook event. A second architectural problem was personalised document delivery: Meta requires media to be pre-uploaded and referenced by ID, so the ZIP-based dispatch flow uploads each file to Meta's media endpoint before queuing the send.",
    gains:
      "This project gave me hands-on experience with event-driven job queue architecture using BullMQ and Redis, which changed how I think about background jobs, retries, and rate limiting. Integrating with Meta's WhatsApp Cloud API exposed the realities of working within a provider's compliance envelope — quality ratings, template approval flows, and webhook-driven state changes aren't things you can abstract away. Shipping a product a real client depends on daily also sharpened my instinct for operational visibility: audit logs and real-time delivery status aren't nice-to-haves, they're the first things a non-technical operator reaches for when something goes wrong. Growing it from a bespoke client tool into Broadcast, a self-serve product with its own pricing and onboarding, also gave me a taste of productising work that started out as a one-off build.",
    isFeatured: true,
  },
  {
    id: 29,
    name: "Earngage",
    description:
      "An event registration and management platform for Earngage's multi-city Healthcare Tech Summit tour, with free-to-paid ticketing, SMS/QR check-in access codes, and a full organizer dashboard.",
    slug: "earngage",
    projectUrl: "https://earngage.net",
    framedImage: earngageFramed,
    image: "/images/projects/earngage/earngage-home.webp",
    image2: "/images/projects/earngage/earngage-speakers.webp",
    image3: "/images/projects/earngage/earngage-about.webp",
    category: "organizations",
    repo: "https://github.com/rahmlad-aramide/earngage",
    languages: [
      "Next JS",
      "TypeScript",
      "React",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Paystack",
      "Turborepo",
    ],
    platform: "web",
    type: "Event Registration Platform",
    status: "Completed",
    detail:
      "Earngage is a leadership-development and community-outreach organisation running a multi-city Healthcare Tech Summit and workshop tour across Nigeria, in partnership with Globallee. I built the platform that powers the whole attendee lifecycle: a per-city event landing page with a location-aware pop-up that routes residents straight into registration and routes everyone else onto a city waitlist, a free-to-paid registration flow that automatically switches from free seats to Paystack-powered paid tickets once a configurable free-registration limit is hit, and a unique Summit access code (sent by SMS and email with a QR code) that doubles as the check-in key on event day.\n\nBehind the public pages sits a full organizer dashboard: an events/editions manager so each city runs as its own edition with its own venue, pricing and settings; a registrations table with masked contact data for non-admin roles; a check-in flow that accepts a typed code, a scanned QR, or a name/phone lookup; a city-waitlist view that shows where unmet demand is concentrated; and payments, WhatsApp-group, and team/role management screens. The stack is a Turborepo monorepo with a Next.js/TypeScript frontend and an Express/Prisma/PostgreSQL API.",
    challenge:
      "The hardest part was modelling an event system that had to behave consistently across very different states: free registration, VIP perks for the first 100 signups, and a hard cutover to paid Paystack checkout once the free limit is reached — all without breaking anyone who had already registered under the old terms.",
    gains:
      "Building Earngage's organizer tooling alongside its public-facing pages gave me a much sharper sense of how a single data model has to serve very different audiences — an attendee booking a free seat, a Manager planning the event, and check-in staff working a door queue under time pressure. Working inside a Turborepo monorepo with a shared package between the web and API apps also pushed me to think more deliberately about what belongs in shared, type-safe code versus what's genuinely app-specific. The free-to-paid cutover logic in particular was a good lesson in building state machines that have to stay correct under concurrency, since seat counts and VIP spots are exactly the kind of thing that breaks under a race condition if you're not careful.",
    isFeatured: true,
  },
  {
    id: 30,
    name: "Bookpheral",
    description:
      "Africa's educator-first platform for protecting, publishing, and monetizing educational content — a marketing site, creator dashboard, and DRM-protected reader built as my own startup.",
    slug: "bookpheral",
    projectUrl: "https://bookpheral.com",
    framedImage: bookpheralFramed,
    image: "/images/projects/bookpheral/bookpheral-dashboard.webp",
    image2: "/images/projects/bookpheral/bookpheral-reading.webp",
    image3: "/images/projects/bookpheral/bookpheral-admin.webp",
    category: "personal",
    repo: "https://github.com/Bookpheral-Engineering/bookpheral",
    languages: [
      "Next JS",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Express",
      "Drizzle ORM",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Paystack",
      "Turborepo",
    ],
    platform: "web",
    type: "EdTech Platform",
    status: "Beta Testing",
    detail:
      "Bookpheral is a two-sided platform connecting African educators, lecturers and independent authors (Earners) with the students and readers (Buyers) who buy their books. It's a Turborepo monorepo I co-founded and built from the ground up: a Next.js marketing site, a React/Vite creator and admin dashboard, and an Express/Drizzle/PostgreSQL API, with a companion React Native reader (see Bookpheral Mobile).\n\nEarners upload an EPUB, DOCX, or PDF manuscript, which goes through review before it's listed for sale. Buyers purchase through Paystack and read in a protected in-browser viewer — PDF.js today, with a server-rendered reader (where the raw file never reaches the client) planned as the platform's core anti-piracy story. Every account is capped at one active reading device, enforced atomically in Redis so a second sign-in hard-kicks the first and emails the account holder. A dedicated attendance feature lets an educator run a link-gated, geofenced class check-in — a deliberate, narrow exception to an otherwise firm \"no classroom/LMS features\" product boundary. Revenue splits 70/30 (educator/platform) by default, 75/25 for members of the Founding Educators Circle, the first 100 educators who joined ahead of launch.",
    challenge:
      "Three problems shaped this more than any others. The first was content protection: we shipped a client-side PDF.js viewer to get a working reader out quickly, then recognised that a viewer rendering the actual file in the browser is a speed bump, not a lock — real protection needs a server-rendered reader where the raw file never reaches the client at all, which turned \"add DRM\" from a feature into a migration we're still completing. The second was stopping one paid account from being read on multiple devices at once: two near-simultaneous logins both have to agree on whether a device slot is already taken, which pushed me toward Redis's atomicity primitives instead of a naive read-then-write that two requests could both pass. The third, and the one that touched the most code, was payments: Bookpheral was originally designed around a wallet model, where the platform held each sale and earners withdrew their balance on request, until it became clear that model doesn't satisfy how a processor like Paystack requires marketplace funds to move for compliance reasons. That forced a rebuild onto a split-payment model — every earner gets a Paystack subaccount and is paid directly out of the transaction at the moment of charge, never from a balance Bookpheral holds. Making that compliant meant reworking checkout end to end: computing and recording each earner's split (and any co-author's) before the charge completes, treating the listed price as the one number the buyer actually pays so the gateway fee is carved back out of it to work out real earnings, refusing a sale outright if anyone owed a share hasn't linked a payout account yet, and retiring the old wallet withdrawal flow to a legacy, read-only path instead of ripping it out from under balances that already existed.",
    gains:
      "Building Bookpheral as a co-founder rather than just a hired engineer changed how I weigh technical decisions — a lot of the architecture here (the split-payment model, the device-limit design, what counts as in scope for \"attendance\" versus a full LMS) came out of product and business conversations as much as engineering ones. Modelling money correctly, where a rounding or ordering mistake is a real financial bug and not just a UI glitch, made me far more disciplined about writing the fee and split math as small, directly testable functions rather than inline checkout logic. It's also the project that's taught me the most about content-protection tradeoffs: client-side DRM is inherently a speed bump, not a lock, and being honest about that with ourselves shaped the roadmap toward server-rendered delivery instead of over-promising what a PDF.js viewer alone can guarantee.",
    isFeatured: true,
  },
  {
    id: 31,
    name: "Bookpheral Mobile",
    description:
      "The companion React Native reading app for Bookpheral — discover, buy, and read books from African educators in a reader built for long study sessions, with reading streaks and offline-friendly protected access.",
    slug: "bookpheral-mobile",
    projectUrl: "https://bookpheral.com",
    framedImage: bookpheralMobileFramed,
    category: "personal",
    repo: "https://github.com/rahmlad-aramide/bookpheral-mobile",
    languages: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind (Tailwind CSS)",
      "Zustand",
      "TanStack Query",
      "Expo Router",
    ],
    platform: "mobile",
    type: "EdTech Reading App",
    status: "Beta Testing",
    detail:
      "Bookpheral Mobile is the React Native companion to the Bookpheral web platform, built with Expo Router and NativeWind. It covers discovery (a browsable catalog with search and educator profiles), a protected reader (adjustable text size, light/dark/sepia themes, table of contents, in-book search, resume-where-you-left-off), and habit-building touches like a reading streak and a weekly pages-read count, all backed by a Zustand store persisted to device storage and TanStack Query against the same API the web dashboard uses.\n\nA notable product decision shaped the app's architecture: Apple's and Google's store policies on steering users to outside payment methods meant in-app purchasing had to go. The Catalog is now deliberately browse-only — no prices, no checkout, no mention of the website on a book a reader doesn't already own — while actual purchases happen on bookpheral.com. Deep links and Android App Links/iOS Universal Links tie the two together, so a shared link to a book, a class attendance session, or a library item opens directly in the app when it's installed and falls back to the web otherwise. A students-only Attendance tab lets a student join a class and mark a geofenced check-in, gated by role so readers never see it.",
    challenge:
      "The hardest part wasn't a bug, it was a compliance-driven rewrite: ripping Paystack checkout, prices, and discount ribbons out of an app that originally sold books in-app, without breaking the experience for a reader who already owns a book or turning the Catalog into a confusing dead end. That meant auditing every screen's copy for anything that implied a price or pointed at an external payment method (store review treats that as circumventing their payment system), while still making the \"buy on the web, read in the app\" handoff feel like one product rather than two disconnected ones — which is what the deep-link and App Links work is really for.",
    gains:
      "This project sharpened my sense of mobile platform policy as a real architectural constraint, not a launch-week checklist item — the store-compliance rewrite touched routing, copy, and navigation far more than it touched any single hard algorithm. Building the device-kick and attendance flows also gave me practical experience with Expo's platform-specific file resolution and permissions (location, for the attendance geofence) in a production app, and reinforced a habit I already had from Bookpheral's web side: keep the parts of the product that touch money or access control server-authoritative, and treat anything the client reports (like a device's GPS position) as informational, not trusted.",
    isFeatured: true,
  },
  {
    id: 32,
    name: "Traqeet",
    description:
      "An offline-first tracker for every subscription, bill and renewal in your life — streaming, phone plans, hosting, insurance — with AI/voice entry, an invoice vault, and PDF reports. My own freemium SaaS startup; this covers the marketing site and backend API.",
    slug: "traqeet",
    projectUrl: "https://traqeet.com",
    framedImage: traqeetFramed,
    demoVideoPortrait: "/videos/traqeet-portrait.mp4",
    demoVideoLandscape: "/videos/traqeet-landscape.mp4",
    image2: "/images/projects/traqeet/traqeet-hero.webp",
    image3: "/images/projects/traqeet/traqeet-feature.webp",
    // image3: "/images/projects/traqeet/traqeet-sub-calc.webp",
    category: "personal",
    repo: "https://github.com/rahmlad-aramide/traqeet",
    languages: [
      "Next JS",
      "TypeScript",
      "React",
      "Express",
      "MongoDB",
      "Zod",
      "Google Gemini AI",
      "Cloudflare R2",
      "Turborepo",
    ],
    platform: "web",
    type: "Subscription Tracking Platform",
    status: "Alpha Testing",
    detail:
      "Traqeet is an offline-first tracker for everything you pay for and might forget to renew: streaming and music, phone and data plans, cloud storage, gym and insurance, and the servers, domains and software a freelancer or small business depends on. The phone is the source of truth — every core action (add, edit, renew, get reminded, export) works with no network at all — and this Turborepo monorepo is the web side of that: a Next.js marketing site (landing, pricing, a blog, free tools like an SSL/domain checker, and all the legal pages a US-incorporated product needs) plus the Express/MongoDB API that the mobile app talks to once a user goes online.\n\nThe API's job is everything that genuinely needs a server: a sync endpoint for Pro accounts (push a device's changed records, pull everyone else's since a cursor), AI parsing of a typed or spoken sentence into a structured subscription via Google's Gemini API, a document vault backed by Cloudflare R2 for invoices and receipts, RevenueCat-mirrored entitlements so Pro status is never trusted from the client, PDF report bundling and email delivery through Resend, and a \"Live Watch\" job runner that polls a tracked domain, SSL certificate or server uptime and pushes an alert when something's about to lapse.",
    challenge:
      "Designing the sync protocol to be correct, not just functional, was the deepest problem: an offline-first app means two phones can edit the same record while neither has a network connection, so conflict resolution (last-write-wins on a per-record timestamp, with future-dated clocks clamped and deletes beating same-moment edits) and a monotonically increasing per-user cursor — rather than a timestamp, so a pull can never skip a late write — both had to be airtight before any UI work mattered. The AI entry endpoint needed its own care for a different reason: it takes arbitrary user text and feeds it to an LLM, so the server treats that text as data rather than instructions (stripped of control characters, capped in length, escaped inside its own tags, checked against a leak canary) and refuses to let the model invent anything the input doesn't actually say, returning fields as explicitly \"missing\" or \"assumed\" rather than guessed.",
    gains:
      "Building the backend for a product whose client is designed to work without it reframed how I think about what actually belongs on a server: not business logic for its own sake, but the handful of things a phone genuinely can't do alone — multi-device sync, paid entitlements, outbound email, an LLM call, and server-side monitoring of someone else's domain or SSL certificate. Writing the sync endpoint also pushed me to think adversarially about my own API for the first time in this way: every incoming change is judged independently so one bad record in a batch can't fail the rest, and a client's clock is never trusted further than \"clamped to five minutes in the future.\" It's also the project where I've had to be most disciplined about what ships behind a feature flag versus what's actually live — a lot of what's described in the spec is built but explicitly marked untested against real devices or live services until it's been run for real.",
    isFeatured: true,
  },
  {
    id: 33,
    name: "Traqeet Mobile",
    description:
      "The React Native companion app for Traqeet — a local-first subscription and bill tracker with reliable offline reminders, AI/voice entry, a document vault, and branded PDF reports. Currently in internal Alpha Testing.",
    slug: "traqeet-mobile",
    projectUrl: "https://traqeet.com",
    framedImage: traqeetMobileFramed,
    category: "personal",
    repo: "https://github.com/rahmlad-aramide/traqeet-mobile",
    languages: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Zustand",
      "Google Gemini AI",
      "RevenueCat",
      "AdMob",
    ],
    platform: "mobile",
    type: "Subscription Tracker App",
    status: "Alpha Testing",
    detail:
      "Traqeet Mobile is an Expo/React Native app built offline-first from day one: expo-sqlite with Drizzle ORM is the on-device source of truth, every record gets a client-generated UUIDv7 so two phones can create data offline without ever colliding, and every P0 feature — adding a service, editing it, marking it renewed, getting reminded, exporting a report — works with the phone in airplane mode. Reminders are deliberately layered three ways: reliable local scheduled notifications that no paywall, ad network or server outage can ever block; an in-app notification centre with its own unread badge and history; and an opt-in remote-push channel for announcements and expiry nudges that is never required for a reminder to fire.\n\nOn top of that offline core sits an AI entry point (\"Tell Traqeet\") that turns a typed sentence or a spoken one into a reviewable subscription card, a free-trial guard that fires extra reminders before a trial silently converts to a paid charge, an invoice/receipt vault with camera and file attachments, Excel/CSV import and export, and branded PDF reports rendered natively (no web view) with the cover, services table and payment history flowing across pages. Monetisation is freemium — RevenueCat-gated Pro features and AdMob ads that never show during onboarding, the paywall, a form, or the AI sheet, and never within a user's first session.",
    challenge:
      "The core design constraint was that reminders must be reliable above every other concern in the app, including the ones that make money — a broken ad SDK, an expired App Store review, or the API being completely down must never stop a locally scheduled notification from firing, which meant building the reminder scheduler as something that only ever reads from on-device SQLite and reschedules itself on edit, renew, app start and timezone change, with zero dependency on the network path. Getting the sync engine's outbox right from the mobile side was the other hard piece: changes have to coalesce per record (so five offline edits to one subscription become one push, not five), seed from every existing record on a phone's first sync, and apply the server's pulled changes directly to the tables without those writes re-triggering the very outbox that would try to push them back.",
    gains:
      "Building the client half of an offline-first, eventually-synced app taught me to treat the network as an optional accelerant rather than a dependency, which is a genuinely different design habit from most apps I've built — the question for every feature became \"what does this do with zero connectivity,\" not \"what's the loading state.\" Implementing voice and AI entry on-device also meant designing a local fallback parser for when the network or the API is unavailable, so a user's note is never silently lost — a small detail that mattered more to the product's trust story than any single flashy feature. Working through the third-party service-logo policy (sourcing marks only from each brand's own press kit, with a remote kill switch per logo and a fallback to a category icon) was a good reminder that a consumer app carries legal and brand risk in places that have nothing to do with code.",
    isFeatured: true,
  },
  {
    id: 24,
    name: "Paperstery",
    description:
      "An independent publishing platform providing end-to-end support for transforming manuscripts into published books for creatives, professionals, and organizations.",
    slug: "paperstery",
    projectUrl: "https://paperstery.com",
    framedImage: paperstery,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258376/portfolio/images/Projects/Paperstery/paperstery-services_hbpfmj.webp",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258375/portfolio/images/Projects/Paperstery/paperstery-about_nlt4zm.webp",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258382/portfolio/images/Projects/Paperstery/paperstery-home_cpjy1h.webp",
    category: "organizations",
    repo: "https://github.com/rahmlad-aramide/paperstery",
    languages: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
      "Sentry",
    ],
    platform: "web",
    type: "Publishing Platform",
    status: "Completed",
    detail:
      "Paperstery is a full-stack web platform for an independent publishing house that helps authors transform manuscripts into professionally published books. Unlike a simple marketing site, the platform is database-driven, built with Next.js App Router, TypeScript, and MongoDB via Prisma, to support the full range of the company's digital operations.\n\nKey features include a manuscript submission flow where authors can submit their work directly through the platform, a blog for publishing guidance and company updates with a rich text editor in the admin blog creation panel for formatting posts, a newsletter subscriber system, and a contact/inquiry form for publishing consultations. An admin panel gives the Paperstery team the ability to manage incoming manuscript submissions through a manuscript review workflow, review and respond to inquiries, and maintain published content, consolidating what would otherwise require multiple separate tools into one unified interface. Sentry is integrated for production error tracking, ensuring the client's platform remains reliable.",
    challenge:
      "Designing the Prisma schema over MongoDB to handle heterogeneous publishing projects, books, academic papers, collaborative writing, institutional publications, each with different metadata requirements, was a meaningful schema design challenge. Building the admin panel with appropriate role-based access and a clear manuscript review workflow also required careful thought, since the Paperstery team needed to process submissions efficiently without a technical background. Balancing a polished marketing presentation with a functional backend system, all within a single Next.js codebase, demanded disciplined code organization.",
    gains:
      "Paperstery was my first production project using Prisma with MongoDB (rather than a relational database), which expanded how I think about schema design for document-oriented data. Building a complete content management workflow for a real client, where the admin panel directly drives their daily operations, was a strong reminder that the backend tools I build have real human impact on the other side. Error monitoring via Sentry also became a habit I now apply to production projects by default.",
    isFeatured: true,
  },
  {
    id: 25,
    name: "Carus",
    description:
      "A waste management and recycling-rewards platform where users schedule pickups or drop-offs, earn redeemable points for airtime or cash, and can direct those points to donation campaigns instead of cashing out.",
    slug: "carus",
    projectUrl: "https://carusrecycling.com",
    framedImage: carus,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258480/portfolio/images/Projects/Carus/carus-dashboard_t02gqo.webp",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258482/portfolio/images/Projects/Carus/carus-home_liyjz4.webp",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258484/portfolio/images/Projects/Carus/carus-login_gkozyn.webp",
    category: "organizations",
    repo: "https://github.com/rahmlad-aramide/carus-frontend",
    languages: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "Socket.IO",
      "Google Gemini AI",
      "Cloudinary",
      "Sentry",
    ],
    platform: "web",
    type: "GreenTech Sustainability Platform",
    status: "Completed",
    detail:
      "Carus is a waste management and recycling-rewards platform that turns responsible waste disposal into something people are paid for. I work across the full stack: the client-facing app, the admin panel, and the Express/TypeORM/PostgreSQL API behind both.\n\nUsers schedule a pickup or a drop-off per material category (plastics, electronics, organics and more), with a quantity, container count and an optional photo, then earn points once it's processed. Points redeem for airtime or cash to a bank account — both go through an admin approval queue rather than paying out instantly — or a user can direct their points to one of the admin's donation campaigns instead of cashing out. Google sign-in sits alongside email/password auth, and a Gemini-backed AI feature assists part of the client experience. The admin panel gives the operations team full visibility over pickups, redemptions (approve or decline), donation campaigns, user accounts and partner businesses, plus a live system-config screen for tuning the points-to-naira conversion rate and per-user limits without a deploy. The frontend uses TanStack Query for server-state sync, custom middleware for route protection and React Context for global state; the API adds Redis for sessions and rate-limiting, Socket.IO for real-time updates, and Cloudinary for pickup/dropoff photos, with Sentry across both for production error tracking.",
    challenge:
      "The trickiest part was keeping a live points ledger consistent under rules that can change underneath it: admins can adjust the points-to-naira conversion rate and per-user limits at any time from a system-config screen, so pending redemption requests, already-earned balances and the admin's own approve/decline queue all have to agree on which rate applied to which transaction. Redemptions aren't instant payouts either — airtime and cash-to-bank both go through an admin approval step — so the ledger has to track a request's state (pending, approved, declined, paid) without ever double-crediting or losing a user's points if a request is declined. On the client, TanStack Query cache invalidation had to stay tight across pickups, redemptions and donation contributions so a user's balance and history never looked stale after any of the three.",
    gains:
      "Carus gave me genuine full-stack exposure on a live product, from designing UI components to writing backend API logic, including a real-money-adjacent approval workflow (redemptions, donation campaigns) that had to be auditable, not just functional. Working with TanStack Query at production scale sharpened my understanding of server-state management, and integrating Sentry revealed how much value real-time error visibility adds to a live app. More broadly, this project deepened my understanding of how to architect platforms that coordinate multiple actors — users, partners, and administrators — each with different data needs, permission levels, and, in this case, different degrees of trust around money leaving the system.",
    isFeatured: true,
  },
  {
    id: 23,
    name: "Ridot v.2",
    description:
      "An EdTech platform empowering women and teenagers with in-demand tech skills to succeed in the modern tech ecosystem.",
    slug: "ridot-v2",
    projectUrl: "https://ridot.org",
    framedImage: ridotv2,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258345/portfolio/images/Projects/Ridot/v2/ridot-course_lplif3.webp",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258345/portfolio/images/Projects/Ridot/v2/ridot-home_pq6sqg.webp",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258345/portfolio/images/Projects/Ridot/v2/ridot-about_bhyjlc.webp",
    category: "organizations",
    repo: "https://github.com/rahmlad-aramide/ridot-software-academy",
    languages: ["Next JS", "TypeScript", "Tailwind CSS"],
    platform: "web",
    type: "EdTech Platform",
    status: "Completed",
    detail:
      "Ridot Software Academy's v.2 is a complete redesign and rebuild of their web presence, migrating from the original React-based landing page to a modern Next.js and TypeScript architecture. The new version retains the academy's mission of empowering women and teenagers with in-demand tech skills, while significantly elevating how that mission is communicated online.\n\nThe redesign introduced a full curriculum section, allowing prospective students to explore the academy's programs in detail, from Data Analytics and Data Science to Frontend Development, UI/UX Design, Digital Marketing, and a dedicated Kids Coding program. The updated site is built with performance and discoverability in mind, leveraging Next.js's App Router pattern, font optimization via Geist, and a clean component architecture that makes future content updates straightforward for the client.",
    challenge:
      "The primary challenge was improving substantially on my own prior work. Having built v.1, I had to approach v.2 with fresh eyes, identifying what wasn't working for users (especially first-time visitors who weren't tech-savvy) and making deliberate design decisions to address those gaps. Translating a diverse set of course offerings into a curriculum section that felt organized and approachable, rather than overwhelming, required multiple iterations. Migrating from React to Next.js also meant rethinking the component structure and data flow from the ground up.",
    gains:
      "Rebuilding Ridot v.2 reinforced an important lesson: iterating on your own previous work is one of the most honest forms of growth. Seeing clearly what v.1 got wrong, and having the skills to fix it, was deeply satisfying. For the academy, v.2 significantly strengthened their digital presence, giving prospective students a clearer picture of what the programs offer. Technically, this project deepened my experience with Next.js App Router patterns and gave me practice designing information architecture for non-technical audiences.",
    isFeatured: true,
  },
  {
    id: 26,
    name: "Launch with Rahmlad",
    description:
      "A streamlined CAC business registration platform that handles documentation and compliance for Nigerian businesses, enabling founders to register in minutes.",
    slug: "launch-with-rahmlad",
    projectUrl: "https://launch.rahmlad.com",
    framedImage: launch,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258407/portfolio/images/Projects/Launch/launch-overview_x3klcu.webp",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258408/portfolio/images/Projects/Launch/launch-referral_olk5fw.webp",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258405/portfolio/images/Projects/Launch/launch-home_lcombj.webp",
    category: "personal",
    repo: "https://github.com/rahmlad-aramide/cac-with-rahmlad",
    languages: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "Cloudinary",
      "Paystack",
    ],
    platform: "web",
    type: "Business Services",
    status: "Completed",
    detail:
      "Launch with Rahmlad is a full-service CAC (Corporate Affairs Commission) business registration platform built under Rahmlad Solutions, designed to make formal business registration in Nigeria fast, clear, and accessible. The CAC registration process is traditionally opaque and bureaucratic, Launch turns it into a guided digital workflow that any founder can complete in minutes.\n\nUsers select their registration type (Business Name, Limited Company, NGO/Incorporated Trustees, Annual Returns, TIN setup), then move through a multi-step form wizard with conditional fields tailored to their specific service. Required documents are submitted digitally, and payment is handled through Paystack integration. A secure personal dashboard allows users to track their application's progress through each processing stage and retrieve their official documents once registration is complete. An admin order management interface gives the accredited CAC agent team a clear queue to process applications efficiently. The platform also features a referral programme offering 3% commission and a ₦500 signup bonus. The backend started on Supabase and has since moved to a standalone Fastify API with its own Postgres database, Redis-backed sessions, and Cloudinary for document storage.",
    challenge:
      "The core UX challenge was designing a multi-step form that felt simple to users who were navigating legal paperwork, often for the first time, while correctly handling the different field requirements across registration types. On the technical side, tying together the Paystack payment flow, document upload pipeline, application status tracking, and user dashboard into a coherent state model required careful orchestration. Ensuring that a completed payment reliably triggered the correct application state, with no gaps where a user could pay but their order not register, was critical to trust. Moving the backend off Supabase and onto a self-hosted Fastify API later on meant rebuilding auth, sessions, and document storage from scratch without touching the live application state mid-migration — a different kind of trust problem from the payment flow, but just as unforgiving of a gap.",
    gains:
      "Launch taught me to design for users who are stressed and unfamiliar with a process, where clarity and trust matter more than feature density. Integrating Paystack for real transactional flows and building secure document handling gave me practical experience with the full stack of a commercial SaaS product. More personally, seeing the platform help Nigerian entrepreneurs formalize their businesses, something that was previously confusing and time-consuming, made this one of the most directly impactful projects I've shipped under Rahmlad Solutions. Rebuilding the backend on Fastify once Supabase's defaults stopped fitting the project also taught me to recognise that moment — when a BaaS's conventions are costing more than they save — before it becomes an emergency.",
    isFeatured: true,
  },
  {
    id: 27,
    name: "Plitrak",
    description:
      "An all-in-one workspace to track scholarships, internships, fellowships, and jobs, with deadline heatmaps, smart reminders, and interview rate analytics.",
    slug: "plitrak",
    projectUrl: "https://plitrak.rahmlad.com",
    framedImage: plitrak,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258425/portfolio/images/Projects/Plitrak/plitrak-dashboard_mgstcx.webp",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258428/portfolio/images/Projects/Plitrak/plitrak-import_oo0a0z.webp",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1783258427/portfolio/images/Projects/Plitrak/plitrak-home_nji5te.webp",
    category: "personal",
    repo: "https://github.com/rahmlad-aramide/applitrack",
    languages: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
    ],
    platform: "web",
    type: "Productivity Tool",
    status: "Completed",
    detail:
      "Plitrak was born from a real personal problem: managing dozens of simultaneous scholarship, internship, fellowship, and job applications with no single place to track them all. Most people rely on scattered spreadsheets or mental notes, losing opportunities to missed deadlines or forgotten follow-ups.\n\nPlitrak provides a centralized workspace where each application is logged with its opportunity type, deadline, current status, and relevant notes. Users can also import an existing record of applications from a CSV file, and the system automatically parses the file and creates the records for them. Deadline heatmaps surface urgency at a glance, showing which applications need attention today versus next week. Smart email reminders, interview rate analytics, and global timezone synchronization ensure no deadline slips and users can understand their own conversion rates across different opportunity types. It started as a fullstack Next.js app with Supabase handling auth, storage, and server-side automation through SQL functions and triggers, but has since moved to its own Hono/Drizzle API on a self-managed PostgreSQL database, with reminder scheduling rebuilt as scheduled cron jobs.",
    challenge:
      "The central technical challenge, early on, was making Supabase's BaaS capabilities work seamlessly within a fullstack Next.js App Router application — leaning on SQL functions and database triggers to drive behaviour at the database level, and bridging that Supabase-native approach with Next.js Server Actions and middleware. Later, as the project outgrew what Supabase's defaults made easy, the harder challenge became migrating off it without a visible seam: replacing Supabase Auth with a self-issued session scheme, rebuilding the trigger-driven reminder logic as explicit cron jobs against a plain Postgres database via Drizzle, and doing all of it while the tool stayed in daily personal use, so nothing could silently regress mid-migration.",
    gains:
      "Plitrak pushed me significantly deeper into Supabase's advanced capabilities early on, writing PostgreSQL functions and triggers directly within the database to drive application behaviour, which reframed how I think about backend architecture — sometimes the most elegant and performant solution lives at the database layer, not in application code. Migrating it later to a custom Hono/Drizzle API taught me the opposite lesson just as clearly: logic that lived invisibly in database triggers is logic nobody can read, test, or step through, and moving reminder scheduling into explicit, ordinary cron jobs made the system easier to reason about even though it meant writing more code myself. Building a tool I actively use myself also sharpened my instinct for UX decisions throughout both versions: when you feel the friction firsthand, you fix it faster.",
    isFeatured: true,
  },
  {
    id: 20,
    name: "Xpacy Mobile",
    framedImage: langueageai,
    projectUrl: "https://xpacy.com/",
    repo: "https://github.com/rahmlad-aramide/xpacy-mobile",
    type: "Real Estate & Facility Management",
    status: "Completed",
    version: "v.1.2.0",
    slug: "xpacy-mobile",
    description:
      "A comprehensive real estate ecosystem for seamless property renting, buying, and professional facility management services.",
    detail:
      "Xpacy is a high-performance mobile application designed to bridge the gap between property owners, seekers, and service providers. It serves as a one-stop shop where users can list properties for sale or rent, browse verified listings with advanced price filtering, and execute secure transactions. Beyond standard real estate, Xpacy integrates a unique 'Service Request' module, allowing returning users to book facility management services like maintenance, space planning, and security. The app features a robust payment gateway for service fees and rental deposits, alongside a user-centric dashboard for tracking property status and service history.",
    languages: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Paystack SDK",
      "Tanstack Query",
    ],
    category: "organizations",
    challenge:
      "The most complex hurdle was architecting a dual-flow system that caters to both property seekers and existing tenants requesting services. Balancing the real estate marketplace with a maintenance booking system required a highly flexible state management strategy that could handle the dynamic environments. Furthermore, ensuring secure, PCI-compliant payment processing within a mobile environment while maintaining a smooth UI during heavy data fetching (e.g., high-resolution property images) demanded significant performance optimization and caching strategies.",
    gains:
      "Building Xpacy Mobile allowed me to master the business side of tech—specifically the integration of financial systems and service-level agreements (SLAs) into a mobile product. I refined my skills in building scalable products and gained deep insights into mobile-first user retention strategies. This project also tested my ability to handle complex API integrations for map services and automated property verification workflows, ultimately delivering a production-ready tool that solves real-world housing and maintenance challenges.",
    isFeatured: true,
    platform: "mobile",
    demoVideo: "https://www.youtube.com/embed/6swESqNItlQ?si=VZAWIkQi001ujGdb",
  },
  {
    id: 19,
    name: "Reciplorer Mobile",
    framedImage: reciplorer,
    projectUrl: "https://reciplorer.rahmlad.com/",
    repo: "https://github.com/rahmlad-aramide/reciplorer",
    type: "Global Problem Solving",
    status: "Completed",
    version: "v.1",
    slug: "reciplorer-mobile",
    description:
      "A cross-platform mobile recipe application providing ingredients, quantities, and step-by-step guides to preparing global meals.",
    detail:
      "Reciplorer Mobile is a recipe exploring application which provides ingredients, quantity, and a step-by-step guide to preparing the meal with the selected recipe. Designed to bring seamless recipe discovery to the kitchen counter, it offers a touch-optimized interface for browsing a wide variety of recipes. Users can access comprehensive ingredient lists and follow gesture-friendly instructions directly on their devices.",
    languages: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind (Tailwind CSS)",
      "TheMealDB API",
      "Tanstack Query",
    ],
    category: "personal",
    challenge:
      "The primary challenge was translating the rich data density of the Reciplorer web experience into a compact mobile UI without sacrificing usability. This required a deep dive into mobile-specific navigation patterns and optimizing image assets for varying mobile bandwidths.",
    gains:
      "This project enhanced my expertise in cross-platform development and mobile UI/UX principles. I gained significant experience in managing mobile-specific states and optimizing API calls for reduced data consumption.",
    isFeatured: true,
    platform: "mobile",
    demoVideo: "https://youtube.com/embed/Q9aqe9U5y40",
  },
  {
    id: 22,
    name: "Joinda Quest Mobile",
    framedImage: joindaQuest,
    projectUrl: "https://joindaquest.io/",
    repo: "https://github.com/joindaio/quest-mobile",
    type: "Social Engagement",
    status: "Completed",
    version: "v.2",
    slug: "joinda-quest-mobile",
    description:
      "A native Expo shell that brings Joinda Quest's web app — quests, tasks, and rewards — to mobile via a WebView bridge, rather than a from-scratch native rebuild.",
    detail:
      "Joinda Quest Mobile wraps the Joinda Quest web app in a native Expo shell instead of reimplementing the product natively. A react-native-webview instance loads the web app directly, with a thin native layer around it: a progress-driven splash screen that tracks the WebView's own load progress instead of a fixed timer, Android hardware back-button handling that first tries the WebView's own navigation history before offering an exit confirmation, and a message bridge for actions the web app can't do on its own, like triggering a native file download.",
    languages: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "React Navigation",
      "react-native-webview",
      "react-native-reanimated",
    ],
    category: "organizations",
    challenge:
      "The main challenge was making a WebView feel like a native app rather than a browser tab pinned to the home screen: getting Android's hardware back button to navigate the web app's own history before falling back to an exit prompt, and building a loading screen driven by real WebView progress events rather than a guessed splash duration. The web-to-native bridge needed its own care too — the web app can't trigger a native file download directly, so it posts a structured message that the native shell listens for and acts on.",
    gains:
      "This project was a useful lesson in picking the right tool for a mobile wrapper: when a product's real complexity already lives in its web app, a thin native WebView shell with careful back-button and download bridging gets you to app-store distribution far faster than a full native rewrite, at the cost of some native look-and-feel. It sharpened my sense of exactly where that tradeoff is worth making and where it isn't.",
    isFeatured: false,
    platform: "mobile",
    demoVideo: "https://www.youtube.com/embed/1cvStJFUe2c",
  },
  {
    id: 21,
    name: "AppOwe",
    framedImage: appOwe,
    projectUrl: "https://appowe.vercel.app/",
    repo: "https://github.com/rahmlad-aramide/appowe",
    type: "Cultural Preservation",
    status: "Completed",
    version: "v.1",
    slug: "appowe",
    description:
      "An innovative mobile application designed to preserve and promote Yoruba culture through an interactive collection of timeless proverbs, meanings, and translations.",
    detail:
      "AppOwe (Proverb App (yor.)) bridges the generational gap in Yoruba linguistic heritage. It provides a modern platform for users to discover daily proverbs, access English translations, and explore deep cultural explanations. Key features include social sharing, bookmarking favorites via local storage, and offline access, making it a vital tool for academics, language learners, and cultural enthusiasts. The app contributes to SDG 4 (Quality Education) by fostering linguistic learning and cultural exchange.",
    languages: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Huggingface API",
    ],
    category: "personal",
    challenge:
      "The primary challenge was ensuring the profound metaphors of Yoruba proverbs were accurately represented in a digital format. Implementing an offline-first experience for local storage while maintaining a lightweight app footprint required careful architectural planning. Additionally, creating a seamless social sharing system that generates clean, readable text versions of proverbs for platforms like WhatsApp and Twitter was a key technical focus.",
    gains:
      "This project allowed me to combine my technical expertise in React Native with a passion for cultural preservation. I gained deep experience in internationalization, background tasks for daily updates, and building accessible UIs for diverse age groups. It also served as a case study for Rahmlad Solutions on how technology can drive social impact and preserve heritage.",
    isFeatured: false,
    platform: "mobile",
    demoVideo: "https://www.youtube.com/embed/ORBLGY-YlF0",
  },
  {
    id: 1,
    name: "Language AI",
    framedImage: langueageai,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715176691/portfolio/images/Projects/LanguageAI/Desktop_wmeyyc.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199739/portfolio/images/Projects/LanguageAI/image2_wvv5mn.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199738/portfolio/images/Projects/LanguageAI/image3_lb7prv.png",
    projectUrl: "https://languageai.rahmlad.com",
    repo: "https://github.com/rahmlad-aramide/languageai",
    type: "Global Problem Solving",
    status: "Completed",
    version: "v.2 in progress",
    slug: "language-ai",
    description:
      "A language-learning and translation platform supporting 130+ languages — text and document translation, OCR translation from photos, an AI chat tutor, and flashcard-based practice.",
    detail:
      "In a world increasingly driven by globalization, the ability to communicate across languages matters more than ever. LanguageAI started as a text-and-document translator built on the Microsoft Azure translation model, supporting 130+ languages, document uploads via React Dropzone, and downloadable translated files.\n\nIt has since grown into a fuller language-learning platform for v2: user accounts (Prisma over SQLite, with their own session-based auth) unlock translation history, a dashboard, and account settings; an image-translation feature uses Tesseract.js OCR to pull text out of a photo before translating it; and an AI chat tutor sits alongside dedicated tools for rewriting, summarizing, and extracting keywords from text, plus a grammar-correction feature. A flashcard-based learning section turns past translations into spaced practice material, and the interface itself is localized via next-intl, with right-to-left layout support, rather than only translating the content a user submits.",
    languages: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "React Dropzone",
      "Tesseract.js (OCR)",
      "next-intl",
      "Microsoft Azure translation model",
      "Vercel",
    ],
    category: "personal",
    challenge:
      "One of the earliest hurdles was finding a document-translation API that was accurate across formats and language variety without imposing fees on users — I settled on the Microsoft Azure translation model after testing several alternatives. As the project grew into v2, the harder problem became architectural: layering real user accounts, an OCR pipeline, and several distinct AI-assisted writing tools (chat, rewrite, summarize, corrections) onto what had been a stateless, account-free tool, without the product sprawling into a dozen unrelated features. Supporting right-to-left languages properly in the interface itself, not just as translation output, also meant revisiting layout assumptions I'd made when the app only needed to display Latin-script UI text.",
    gains:
      "LanguageAI is designed to empower users with an accessible translation tool across 130+ languages, which has proven particularly useful in education, where students and educators need learning materials in different languages. Building v2 — accounts, OCR, an AI chat tutor, flashcard-based learning, and proper i18n/RTL support — pushed the project well beyond its original translate-and-download scope and taught me how differently a product has to be designed once it needs to remember a user across sessions instead of treating every visit as a clean slate. It's also where I got hands-on with OCR via Tesseract.js, and with designing several small, focused AI tools rather than one do-everything prompt.",
    isFeatured: !true,
    platform: "web",
  },
  {
    id: 2,
    name: "Reciplorer",
    framedImage: reciplorer,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1746913337/portfolio/images/Projects/Reciplorer/reciplorer2_enmjbg.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1746913336/portfolio/images/Projects/Reciplorer/reciplorer1_seql8k.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1746913337/portfolio/images/Projects/Reciplorer/reciplorer3_z682h3.png",
    projectUrl: "https://reciplorer.rahmlad.com",
    repo: "https://github.com/rahmlad-aramide/reciplorer",
    type: "Global Problem Solving",
    status: "Completed (v.2 underway)",
    version: "v.2 in progress",
    slug: "reciplorer",
    description:
      "A recipe explorer web application providing access to several recipes with ingredients, step-by-step guides, and video tutorials.",
    detail:
      "Reciplorer is a web application designed to simplify and enhance the user's experience of discovering and managing recipes. Recognizing the need for a centralized platform where users can easily find cooking inspiration, access detailed recipe information, and even contribute their own culinary creations, Reciplorer offers a user-friendly interface with several key features. Users can browse a wide variety of recipes, view comprehensive lists of ingredients, follow clear step-by-step preparation instructions, and often find embedded video tutorials for visual guidance. The platform also includes robust search and filtering capabilities, allowing users to quickly find recipes based on keywords, ingredients, cuisine types, dietary restrictions, and more. Furthermore, registered users have the ability to add their own recipes to the collection, fostering a community of home cooks and recipe enthusiasts (coming soon!).",
    languages: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "TheMealDB API",
      "Vercel",
    ],
    category: "personal",
    challenge:
      "A significant challenge encountered during the development of Reciplorer was effectively integrating and managing data from the TheMealDB API while ensuring a seamless and responsive user experience. This involved handling asynchronous data fetching, structuring the data in a user-friendly format, and implementing efficient search and filtering functionality to quickly process a potentially large number of recipes. Another key hurdle was designing an intuitive interface for users to add their own recipes, including handling ingredient input, step-by-step instructions, and potentially media uploads, while maintaining data integrity and security. Balancing feature richness with ease of use and performance optimization across different devices also presented a considerable design and development challenge.",
    gains:
      "Developing Reciplorer has provided me with valuable experience in building a complete web application from scratch with a focus on user interaction and data management. I've gained practical skills in integrating third-party APIs like TheMealDB, handling complex backend data, and implementing client-side routing and state management with NextJS and React. The implementation of search and filtering functionality has deepened my understanding of effective optimization for efficient data retrieval. Furthermore, building the recipe submission feature has enhanced my knowledge of form handling and data validation. This project has significantly improved my proficiency in front-end development with TypeScript, Tailwind CSS, and UI libraries like Shadcn UI, as well as deployment on platforms like Vercel. Overall, Reciplorer represents a tangible demonstration of my ability to create functional and user-friendly web applications from concept to deployment.",
    isFeatured: !true,
    platform: "web",
  },
  {
    id: 3,
    name: "WApp",
    framedImage: wapp,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715176775/portfolio/images/Projects/Weather%20App/Desktop_tzvl3y.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199772/portfolio/images/Projects/Weather%20App/image_o2ss62.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715199770/portfolio/images/Projects/Weather%20App/image2_f6gsw6.png",
    projectUrl: "https://wapp.rahmlad.com/",
    repo: "https://github.com/rahmlad-aramide/wapp",
    type: "Global Problem Solving",
    status: "Completed",
    version: "v.1",
    slug: "wapp",
    description:
      "An advanced weather forecasting web application with data visualization tools.",
    detail:
      "WApp (Weather App) is an advanced weather forecasting platform designed to provide real-time weather data, forecasts, and visual analytics through interactive charts and geographical data maps. This application caters to a wide range of users, from weather enthusiasts and researchers to the general public, enabling them to access detailed and accurate weather predictions effortlessly. It utilizes cutting-edge meteorological data from the openweathermap api and modern web technologies: Next.js, Tailwind and Apexcharts and data maps to deliver a responsive and intuitive user experience. The application features dynamic, interactive charts that visualize weather trends like temperature fluctuations etc. over time, alongside data maps that offer geographical visualizations of varying weather conditions. This integration of real-time data ensures that users receive the most current and reliable weather forecasts available.",
    languages: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Apex Charts",
      "Openweathermap API",
      "Layer Maps",
      "Vercel",
    ],
    category: "personal",
    challenge: `A major challenge in the development of R-WAPP was integrating live weather data effectively into the application's data visualization components, such as interactive charts and maps. The real-time nature of the data required robust, dynamic updates to visual elements without sacrificing performance or user experience. Each piece of incoming data had to be processed and reflected accurately in real-time on the charts, necessitating sophisticated state management and update mechanisms to ensure that the visual representations were both current and accurate.
  
      Additionally, without a predefined design template or Figma file, I was tasked with creating the design components, color schemes, and overall aesthetic from scratch. This challenge involved not only a deep understanding of user interface design principles but also an ability to envision a user-friendly and aesthetically pleasing layout that would make complex data accessible and understandable. Selecting colors that would represent various weather conditions clearly and distinctly, designing a layout that would accommodate detailed data without overwhelming users, and ensuring the interface scaled well across multiple devices were all critical considerations that I managed throughout the design process.
      
      These challenges not only tested my technical abilities but also demanded a high level of creativity and foresight in both design and functionality, pushing me to develop a comprehensive skill set that spans across coding, design, and user experience.`,
    gains: `Developing this project has significantly enhanced my technical skills, particularly in handling live data feeds and integrating complex weather forecasting models into a user-friendly interface. The experience has also improved my problem-solving abilities, especially in dealing with the scalability of data and ensuring the application performs optimally under different user loads. This project has been instrumental in sharpening my skills in using Next.js and in understanding the intricacies of reactive state management and API integration in a real-world application.
  
      Anticipated User Benefits:
      The application is expected to make weather-related information more accessible, providing users with tools necessary for planning and decision-making based on weather conditions. Its educational potential is significant, offering a practical resource for students and educators in meteorological studies. For researchers, WApp provides a platform for data analysis and weather pattern observation. Additionally, by delivering timely and accurate weather warnings, it enhances community safety and preparedness for adverse weather conditions.`,
    isFeatured: !true,
    platform: "web",
  },
  {
    id: 4,
    name: "Ridot v.1",
    framedImage: ridot,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715176727/portfolio/images/Projects/Ridot/Desktop_ymhvn8.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715201476/portfolio/images/Projects/Ridot/image2_o9idjm.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1715201478/portfolio/images/Projects/Ridot/image_cbnyzm.png",
    projectUrl: "https://v1.ridot.org/",
    repo: "https://github.com/rahmlad-aramide/ridot-software-academy",
    type: "Landing Page Website",
    status: "Completed and being Maintained",
    version: "v.1",
    slug: "ridot-v1",
    description:
      "A software academy website that includes their pricing and subscription information.",
    detail: `Ridot Software Academy is a transformative educational platform dedicated to enabling and encouraging women to start and advance their careers in technology. Positioned at ridot.tech, the platform offers a range of courses, resources, and mentorship opportunities tailored specifically for women who are new to tech or looking to deepen their existing tech skills. By fostering a supportive community, Ridot Software Academy aims to break down the barriers that women often face in the tech industry.
        The platform is designed with user-friendly interfaces that cater specifically to those who are beginners in technology, ensuring that learning materials are accessible and engaging. The curriculum covers everything from basic programming concepts to advanced software development, data science, and more, all structured to facilitate a supportive learning environment for women.
        `,
    languages: ["React", "Tailwind CSS", "Netlify"],
    category: "organizations",
    challenge: `Developing Ridot Software Academy presented a unique challenge: the absence of a predefined design template. This required crafting a user-friendly, engaging, and inclusive design from scratch, which had to resonate with a diverse audience and ensure ease of use for tech newcomers. Balancing aesthetic appeal with functional design, all while creating an environment that promotes learning and interaction, was paramount.`,
    gains: `On a personal level, the development of Ridot Software Academy has been profoundly rewarding. It has allowed me to contribute positively by advocating for greater inclusivity in the tech field. Creating a platform that directly addresses and supports the underrepresented group of women in tech has deepened my commitment to social impact within the tech industry. This project has not only enhanced my technical skills but also enriched my perspective on the transformative power of technology as a tool for empowerment.

      For the community, Ridot Software Academy has become a pivotal force in promoting diversity in the tech world. It empowers women by providing the necessary skills and confidence to succeed in tech roles, thereby fostering a more inclusive industry. The success of academy participants helps challenge stereotypes and inspires a broader cultural shift towards equality in tech, encouraging more women to pursue and excel in technology careers.`,
    isFeatured: !true,
    platform: "web",
  },
  {
    id: 5,
    name: "Adorn",
    framedImage: adorn,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1684597972/portfolio/images/Projects/Adorn/adorn_desktop_xmpyru.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582004/portfolio/images/Projects/Adorn/adorn3_pbds5e.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582004/portfolio/images/Projects/Adorn/adorn2_jat9ma.png",
    projectUrl: "https://adorn.netlify.app/",
    repo: "https://github.com/rahmlad-aramide/adorn",
    type: "Local Problem Solving",
    status: "In progress",
    slug: "adorn",
    description:
      "A furniture company ecommerce website project to ease the purchase of home & office furnitures.",
    detail:
      "As a problem solver, I took it up as a challenge to provide a solution to a local problem using my skills, which led me to focus on a skilled craftsman in my area who owns a furniture company but lacks an online presence. This means customers can currently only view his products at his company showroom, which isn't ideal in this digital age. Hence, I decided to help his brand create a website where customers can shop and check out their products directly and even have them delivered to their doorstep, as the company possesses a vehicle for transporting their purchased products. Behind the storefront sits a real Express/MongoDB API with its own product catalog, order, and review models, JWT-based auth, and Stripe wired up for checkout.",
    languages: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Firebase",
      "Netlify",
    ],
    category: "personal",
    challenge: `A major problem that I am faced with in this design and development stage is obtaining high-quality pictures of his products to display in the website catalog and categories section. Therefore, I am tentatively using placeholder images until the project is launched. The backend itself — products, orders, reviews, and Stripe checkout — is further along than the storefront's presentation, which is still waiting on real product photography before it can go live.`,
    gains: `As it's still a work in progress, the major gain I'm looking forward to is seeing that I can solve a local problem. I was inspired to do this because I was impressed by the quality of his work. Additionally, since his company owns a vehicle used to transport products to customers, this website will further bring his brand to the attention of potential clients and eliminate the need for them to visit the showroom before making a purchase. Building the backend ahead of the final storefront design was also a useful reminder that "content-blocked" and "incomplete" aren't the same thing — the checkout flow works end to end even while the catalog is still waiting on real photos.`,
    isFeatured: !true,
    platform: "web",
  },
  {
    id: 6,
    name: "Scissor",
    framedImage: scissor,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690571255/scissor/scissor-desktop_cclmcj.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690581870/scissor/scissor3_d2t2bc.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690581870/scissor/scissor2_kkfwo6.png",
    projectUrl: "https://scissor.rahmlad.com",
    repo: "https://github.com/rahmlad-aramide/scissor",
    type: "Captstone Project",
    status: "Completed",
    slug: "scissor",
    description:
      "A URL Shortening app that allows users to shorten & create custom links, generate QR Code for the links and tracks the links performance.",
    detail:
      "In today's world, it's important to keep things as short as possible, and this applies to more concepts than you may realize. From music, speeches, to wedding receptions, brief is the new black. Scissor is a simple tool which makes URLs as short as possible. It was submitted as my Frontend Engineering Diploma Program Capstone Project at AltSchool Africa, School of Software Engineering. A v2 rebuild of the backend is underway, moving click analytics onto a BullMQ/Redis queue and adding Google sign-in, TOTP-based two-factor auth, QR code generation, geo-IP lookups, and rate limiting.",
    languages: [
      "Typescript",
      "React",
      "Tailwind CSS",
      "Firebase",
      "Vite",
      "Unit Testing",
      "Component Testing",
      "API",
    ],
    category: "personal",
    challenge: `I was required to use TypeScript for the project which I've not learned before, so I had to learn the basics of it on the go because of the deadline, even though I started it with React JSX then later converted it to TypeScript TSX. Also, I was required to write a few components and unit testing, I had to learn the basics of it as well so as to be able to make my submission before the deadline.`,
    gains: `It gave me a chance to work within a short timeframe/a tight deadline while ensuring I submit a quality work and a chance to add and improve my skills.`,
    isArchived: false,
    isFeatured: true,
    platform: "web",
  },
  {
    id: 7,
    name: "PVC-Pipe",
    framedImage: pvcpipe,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1684583582/portfolio/images/Projects/PVC-Pipe/pvc-pipe-desktop_pgigqr.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582155/portfolio/images/Projects/PVC-Pipe/pvc-pipe3_hq1suf.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582155/portfolio/images/Projects/PVC-Pipe/pvc-pipe2_bstch8.png",
    projectUrl: "https://pvc-pipe.org",
    repo: "https://github.com/rahmlad-aramide/pvc-pipe",
    type: "National Problem Solving",
    status: "Completed",
    slug: "pvc-pipe",
    description:
      "A permanent voters card tracking and delivery app built for my fellow citizens finding it difficult to get their permanent voters card",
    detail:
      "During the last election process for the Nigeria National Election in February 2023, I was informed that my Permanent Voter's Card (PVC) is available for collection whereas I wasn't around then, so for security purpose, it can't be given to someone else on my behalf, hence the need for me to come back to get it myself, had it been that this kind of service is already in existence, it would have been easier for me to get my card delivered to me easily. Likewise, the project was submitted as an internship project delivered by my team while interning with Enoverlab, a team of 2 developers, 2 product managers and 2 designers.",
    languages: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Cloud OTP",
      "React Toastify",
      "Paystack",
      "Randomuser API",
    ],
    category: "internships",
    challenge: `As there's not backend engineer on the team, we had to result into using some already built libraries and technologies within our reach. Also, we don't have access to the National database that houses the voters information, we had to make use of random user and/or random number where applicable in which we believe will give us an avenue to get it adopted and get needed real data and resources to make it available for use by all.`,
    gains: `It greatly made me to realize that I may not always have access to all the needed resources to execute projects completely which I need to make as such that it doesn't turn into obstacles while working on the project, therefore we had to look for some other alternatives and other possible approaches that we can take to get the job done. Also, my teamwork and team communication skills improved, as well as coding styles and learning, relearning, and unlearning through interactions with others on the team.`,
    isArchived: true,
    platform: "web",
  },
  {
    id: 8,
    name: "Yieldvest",
    framedImage: yieldvest,
    image:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582284/portfolio/images/Projects/Yieldvest/Yieldvest1_hwoh94.png",
    image2:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582282/portfolio/images/Projects/Yieldvest/Yieldvest2_xrn2sw.png",
    image3:
      "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1690582282/portfolio/images/Projects/Yieldvest/yieldvest3_phiiog.png",
    projectUrl: "https://yieldvest.app",
    repo: "https://github.com/workshopapps/investment.web",
    type: "Internship",
    status: "Completed",
    slug: "yieldvest",
    description:
      "A stock recommendation app built for tracking, analyzing and recommending stocks through the use of fundamental analysis to reduce investment risks.",
    detail:
      "Colaborated with my team during the 2022 cohort of HNG Internship [HNGi9] where I led the Frontend Developers through thick and thin, we were able to build and deploy Yieldvest at the end of the internship.",
    languages: [
      "Next JS",
      "React",
      "Tailwind CSS",
      "Prop Types",
      "Unit Testing",
      "API",
    ],
    category: "internships",
    challenge: `As the Frontend Team Lead, one of the challenges I faced was managing my team members, especially during times of deviation from the given instruction(s). Additionally, on a personal level, being in an internship program that overlapped with my examination period, the erratic state of power supply, coupled with my PC's damaged battery, presented serious challenges while working on the project.`,
    gains: `Indeed, after difficulty comes ease. Despite all the hurdles, it later turned out to be something that prepared me for similar obstacles that I may encounter at a later time, because for me to be able to scale through successfully, it simply ignites my spirit of not giving up, which is greatly helpful. Also, teamwork and team management skills improved, as well as coding styles and learning, relearning, and unlearning through interactions with others.`,
    isArchived: true,
    platform: "web",
  },
  {
    id: 9,
    name: "Hackade",
    description:
      "A platform designed to help data scientists develop practical skills, build a strong portfolio, and connect with industry professionals.",
    slug: "",
    projectUrl: "https://hackade.net",
    framedImage: hackade,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS", "Shadcn"],
    platform: "web",
  },
  {
    id: 10,
    name: "RAIN Hackathon",
    description:
      "The official website for the RAIN Hackathon 1.0, calling on Africa's brightest minds in Robotics and AI to innovate and shape the future of technology on the continent.",
    slug: "",
    projectUrl: "https://hackathon.rainigeria.com/",
    framedImage: rainHackathon,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
    platform: "web",
  },
  {
    id: 11,
    name: "RAIN Summit",
    description:
      "The website for post-hackathon event for Robotics and AI in Africa, featuring experts, discussions, and the advancement of innovative solutions.",
    slug: "",
    projectUrl: "https://summit.rainigeria.com/",
    framedImage: rainSummit,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
    platform: "web",
  },
  {
    id: 12,
    name: "Flutterbytes Conf. '24",
    description:
      "The official website for FlutterBytes, a premier conference for Flutter developers and enthusiasts to connect, learn, and explore the latest advancements in the framework.",
    slug: "",
    projectUrl: "https://www.flutterbytesconf.com/",
    framedImage: flutterbytes,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
    platform: "web",
  },
  {
    id: 13,
    name: "Devfest Ogbomoso",
    description:
      "The platform for a community-led developer conference by the Google Developer Group, offering opportunities to learn about Google technologies, network with fellow developers, and grow the local tech ecosystem.",
    slug: "",
    projectUrl: "https://devfestogbomoso.com/",
    framedImage: devfest,
    category: "communities",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
    platform: "web",
  },
  {
    id: 14,
    name: "JOIN",
    description:
      " A blockchain-powered platform merging gaming, social interaction, and rewards, allowing users to connect, play, and earn securely.",
    slug: "",
    projectUrl: "https://thejoin.io/",
    framedImage: join,
    category: "organizations",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
    platform: "web",
  },
  {
    id: 15,
    name: "Nugapay",
    description:
      "NugaPay — a personal and corporate banking platform with consumer and business-admin web apps for transfers, cards, and account management.",
    slug: "",
    projectUrl: "https://nugapay.com/",
    framedImage: nugapay,
    category: "organizations",
    repo: "https://github.com/uverustech/pay-webapp",
    languages: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
    ],
    platform: "web",
  },
  {
    id: 16,
    name: "Treesoft Academy",
    description:
      "A software academy that is transforming tech journeys by providing the skills to master tomorrow's technology, from frontend to UI/UX.",
    slug: "",
    projectUrl: "https://treesoft.vercel.app/",
    framedImage: treesoft,
    category: "organizations",
    repo: "",
    languages: ["Next JS", "Tailwind CSS", "Shadcn UI"],
    platform: "web",
  },
  {
    id: 17,
    name: "Uverus",
    description:
      "The website for Uverus Technologies, a financial and healthcare infrastructure company behind a family of banking, payments, and health products used by 12,000+ businesses and 240,000+ consumers across 15+ African markets.",
    slug: "",
    projectUrl: "https://uverus.com/",
    framedImage: uverus,
    category: "organizations",
    repo: "https://github.com/thejoinio/uverus-website",
    languages: ["Next JS", "Tailwind CSS", "Framer Motion"],
    platform: "web",
  },
  {
    id: 18,
    name: "AO Foundation",
    description:
      "The website for a dynamic non-profit organization committed to creating opportunities, fostering empowerment, and promoting sustainable development.",
    slug: "",
    projectUrl: "https://aofounda.org/",
    framedImage: aofounda,
    category: "organizations",
    repo: "",
    languages: ["Next JS", "Tailwind CSS"],
    platform: "web",
    type: "NGO",
  },

  // {
  //   id: 5,
  //   name: "LAUMGA Membapp",
  //   framedImage: 'https://res.cloudinary.com/dh4rm7b7b/image/upload/v1680001660/portfolio/images/Projects/Yieldvest/Yieldvest-Frame_uugts9.png',
  //   image:
  //     "https://res.cloudinary.com/dh4rm7b7b/image/upload/v1679304758/portfolio/images/Projects/Project-Yieldvest_xlcytz.png",
  //   image2: '',
  //   image3: '',
  //   projectUrl: "https://yieldvest.app",
  //   repo: "https://github.com/workshopapps",
  //   type: "Internship Final Project",
  //   status: "Completed and still being maintained",
  //   description: "A stock recommendation app built for those dealing with stocks through the use of fundamental analysis to reduce risks",
  //   detail:
  //     "Colaborated with my team during the 2022 cohort of HNG Internship [HNGi9] where I led the Frontend Developers through thick and thin, we were able to build and deploy Yieldvest at the end of the internship.",
  //   languages: [
  //     {
  //       name: "Next JS",
  //       url: "images/Assets/next-js-seeklogo.com.svg",
  //     },
  //     {
  //       name: "React",
  //       url: "images/Assets/react-seeklogo.com.svg",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       url: "images/Assets/tailwind-css-seeklogo.com.svg",
  //     },
  //     {
  //       name: "Prop Types",
  //     },
  //     {
  //       name: "Unit Testing",
  //     },
  //     {
  //       name: "API",
  //       url: "images/Assets/api.svg",
  //     },
  //   ],
  //   challenge: `As the Frontend Team Lead, one of the challenges I faced was managing my team members, especially during times of deviation from the given instruction(s). Additionally, on a personal level, being in an internship program that overlapped with my examination period, the erratic state of power supply, coupled with my PC's damaged battery, presented serious challenges while working on the project.`,
  //   gains: `Indeed, after difficulty comes ease. Despite all the hurdles, it later turned out to be something that prepared me for similar obstacles that I may encounter at a later time, because for me to be able to scale through successfully, it simply ignites my spirit of not giving up, which is greatly helpful. Also, teamwork and team management skills improved, as well as coding styles and learning, relearning, and unlearning through interactions with others.`
  // },
];
