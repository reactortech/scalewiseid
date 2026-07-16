export type Lang = "id" | "en";

type Stat = { v: number; suf?: string; pre?: string; l: string; full?: string };
type Service = { t: string; b: string; badge?: string; soon?: boolean };
type Metric = { k: string; v: string };
type CaseItem = { platform: string; industry: string; metrics: Metric[]; body: string };
type Step = { t: string; b: string };
type Member = { r: string; d: string };

type Dict = {
  nav: { services: string; cases: string; how: string; team: string; contact: string; cta: string };
  hero: { badge: string; line1: string; line2: string; sub: string; cta1: string; cta2: string; trusted: string };
  stats: Stat[];
  problem: { eyebrow: string; headline1: string; headline2: string; c1t: string; c1b: string; c2t: string; c2b: string; close: string };
  cases: { eyebrow: string; headline1: string; headline2: string; items: CaseItem[] };
  how: { eyebrow: string; headline1: string; headline2: string; steps: Step[] };
  services: { eyebrow: string; headline1: string; headline2: string; items: Service[] };
  team: { eyebrow: string; headline1: string; headline2: string; members: Member[] };
  contact: {
    headline1: string; headline2: string; sub: string;
    f: { name: string; email: string; wa: string; brand: string; platform: string; platformOpts: string[]; challenge: string; submit: string; success: string };
  };
  footer: { tagline: string; nav: string; contact: string; office: string };
};

export const dict: Record<Lang, Dict> = {
  id: {
    nav: { services: "Layanan", cases: "Studi Kasus", how: "Cara Kerja", team: "Tim", contact: "Kontak", cta: "Audit Gratis" },
    hero: {
      badge: "Growth Strategist & Programmatic Ads untuk Consumer Brands",
      line1: "Iklanmu bilang kamu menang.",
      line2: "Profitmu bilang sebaliknya.",
      sub: "Scalewise adalah growth partner berbasis AI untuk brand FMCG & consumer. Kami menutup jarak antara ad spend dan pertumbuhan revenue yang nyata — dengan strategi, data, dan eksekusi.",
      cta1: "Klaim Audit Gratis",
      cta2: "Lihat Studi Kasus",
      trusted: "Dipercaya oleh brand-brand seperti",
    },
    stats: [
      { v: 40, suf: "+", l: "Klien yang Pernah Dikelola" },
      { v: 15, pre: "Rp", suf: " M+", l: "Ad Spend Dikelola", full: "Rp15 Miliar+" },
      { v: 95, suf: "%", l: "Client Retention" },
      { v: 12, l: "Industri Consumer Brand" },
      { v: 5, l: "Platform Iklan" },
    ],
    problem: {
      eyebrow: "MASALAHNYA",
      headline1: "Dashboard hijau,",
      headline2: "profit masih belum hijau?",
      c1t: "Agensi tradisional",
      c1b: "Fokus mengoptimalkan performa campaign: ROAS, CTR, CPM. Berhenti di dashboard.",
      c2t: "Yang pemilik bisnis butuhkan",
      c2b: "Profit yang berkelanjutan dan revenue yang bisa diprediksi — bukan sekadar metrik iklan.",
      close: "Scalewise berdiri di celah itu: strategist + eksekusi programmatic ads dalam satu tim.",
    },
    cases: {
      eyebrow: "STUDI KASUS",
      headline1: "Bukti,",
      headline2: "bukan janji.",
      items: [
        {
          platform: "TikTok", industry: "Skincare",
          metrics: [
            { k: "ROI", v: "5x → 9.66x" },
            { k: "Revenue", v: "Rp272 Jt → Rp5,8 M" },
            { k: "CPA", v: "-46%" },
          ],
          body: "ROI stagnan di 5x dan CPA naik setiap budget dinaikkan. Kami revamp seluruh creative ke angle conversion-driven, optimalkan GMV Max, dan scaling bertahap pada winning campaign. Hasil: 102.748 order, ad spend tumbuh 11,8x tetap profitable.",
        },
        {
          platform: "Meta", industry: "Fashion",
          metrics: [
            { k: "ROAS", v: "8.80 → 20.12" },
            { k: "Order", v: "+61%" },
            { k: "Purchase Value", v: "Rp13,6 Jt → Rp250,9 Jt" },
          ],
          body: "ROAS rendah dan struktur campaign tidak efisien. Kami sederhanakan struktur, alokasikan budget ke campaign terbaik, dan optimasi berbasis data funnel (ATC → Purchase), bukan sekadar CTR.",
        },
        {
          platform: "Google Ads", industry: "Lead Generation (SG & MY)",
          metrics: [
            { k: "CPA", v: "SGD 22.11 → 17.59" },
            { k: "Conv. Rate", v: "6,33% → 9,56%" },
            { k: "CTR", v: "7,98% → 10,31%" },
          ],
          body: "CPA tinggi di pasar Singapura & Malaysia dengan kualitas lead rendah. Kami tingkatkan quality score, restrukturisasi keyword, ubah target konversi dari CTWA ke contact form, dan optimasi search term berkala. Kualitas lead naik signifikan.",
        },
        {
          platform: "Shopee", industry: "Fashion",
          metrics: [
            { k: "Revenue", v: "~2x → Rp1,2 M" },
            { k: "Order", v: "+71%" },
            { k: "ROAS", v: "stabil 15x+" },
          ],
          body: "ROAS stagnan meski budget terus naik. Kami restrukturisasi campaign berdasarkan objective & kategori produk, optimasi keyword, dan scaling hanya pada campaign ber-ROAS terbaik. ROAS tetap di atas 15x meski budget di-scale 2x.",
        },
      ],
    },
    how: {
      eyebrow: "CARA KERJA",
      headline1: "Sistem yang terukur,",
      headline2: "dari audit sampai scaling.",
      steps: [
        { t: "Audit & Rencana Strategi", b: "Analisis performa ads & toko, evaluasi creative, benchmarking kompetitor, dan roadmap strategi custom. Dilakukan sebelum kontrak." },
        { t: "Take Over & Kick-Off", b: "Setup akses, integrasi pixel & analytics, alignment goals & KPI, dan timeline eksekusi." },
        { t: "Intensive Testing", b: "Launch campaign, uji respons pasar, identifikasi winning creative & audience di minggu pertama." },
        { t: "Optimization & Scaling", b: "Scaling budget bertahap pada winner, efisiensi biaya, dan optimasi ROAS & profit." },
        { t: "Evaluation & Reporting", b: "Laporan performa mingguan, review KPI, dan rekomendasi strategis berkelanjutan." },
      ],
    },
    services: {
      eyebrow: "LAYANAN",
      headline1: "Ekosistem layanan",
      headline2: "yang bikin scaling terukur.",
      items: [
        { t: "Audit & Advisory", b: "Breakdown funnel toko, audit menyeluruh, dan forecasting. Gratis, slot terbatas.", badge: "Gratis" },
        { t: "Ads Management", b: "Pengelolaan penuh Google Ads, Meta, TikTok, dan Shopee dengan laporan mingguan yang transparan." },
        { t: "Corporate Training", b: "Upskill tim internal untuk ads & AI. Segera hadir.", soon: true, badge: "Coming Soon" },
        { t: "AI & Automation", b: "Otomasi workflow marketing dengan solusi AI. Segera hadir.", soon: true, badge: "Coming Soon" },
      ],
    },
    team: {
      eyebrow: "TIM",
      headline1: "Orang-orang",
      headline2: "di balik angkanya.",
      members: [
        { r: "Co-Founder", d: "Growth & AI Marketing Strategist" },
        { r: "Co-Founder", d: "Strategic Finance" },
        { r: "Co-Founder", d: "TikTok & Meta Ads Expert, 5+ tahun" },
        { r: "Co-Founder", d: "Google, Meta & TikTok Ads Expert, 5+ tahun" },
      ],
    },
    contact: {
      headline1: "Jadwalkan sesi hari ini.",
      headline2: "Mari rekayasa profitmu.",
      sub: "Klaim slot Free Growth Audit: kami bedah funnel, ads, dan peluang scaling bisnismu — tanpa komitmen.",
      f: {
        name: "Nama Lengkap", email: "Email", wa: "No. WhatsApp", brand: "Nama Brand",
        platform: "Platform iklan utama", platformOpts: ["Meta", "Google", "TikTok", "Shopee", "Belum beriklan"],
        challenge: "Ceritakan tantangan bisnismu", submit: "Kirim & Klaim Audit",
        success: "Terima kasih! Tim kami akan menghubungi kamu segera.",
      },
    },
    footer: {
      tagline: "Di balik setiap brand yang scalable, ada growth system yang bisa diulang. Kami bantu membangunnya dengan strategi, data, eksekusi, dan AI.",
      nav: "Navigasi", contact: "Kontak", office: "Head Office",
    },
  },
  en: {
    nav: { services: "Services", cases: "Case Studies", how: "How We Work", team: "Team", contact: "Contact", cta: "Free Audit" },
    hero: {
      badge: "Growth Strategist & Programmatic Ads for Consumer Brands",
      line1: "Your ads say you're winning.",
      line2: "Your profit says otherwise.",
      sub: "Scalewise is an AI-powered growth partner for FMCG & consumer brands. We close the gap between ad spend and real revenue growth — through strategy, data, and execution.",
      cta1: "Claim Free Audit",
      cta2: "See Case Studies",
      trusted: "Trusted by brands like",
    },
    stats: [
      { v: 40, suf: "+", l: "Clients Collaborated" },
      { v: 15, pre: "Rp", suf: "B+", l: "Ad Spend Managed", full: "Rp15B+" },
      { v: 95, suf: "%", l: "Client Retention" },
      { v: 12, l: "Consumer Brand Industries" },
      { v: 5, l: "Ad Platforms" },
    ],
    problem: {
      eyebrow: "THE PROBLEM",
      headline1: "Dashboard's green.",
      headline2: "Is your profit?",
      c1t: "Traditional agencies",
      c1b: "Optimize campaign performance: ROAS, CTR, CPM. It stops at the dashboard.",
      c2t: "What business owners need",
      c2b: "Sustainable profit and predictable revenue — not just ad metrics.",
      close: "Scalewise sits in that gap: strategist + programmatic ads execution in one team.",
    },
    cases: {
      eyebrow: "CASE STUDIES",
      headline1: "Proof,",
      headline2: "not promises.",
      items: [
        {
          platform: "TikTok", industry: "Skincare",
          metrics: [
            { k: "ROI", v: "5x → 9.66x" },
            { k: "Revenue", v: "Rp272M → Rp5.8B" },
            { k: "CPA", v: "-46%" },
          ],
          body: "ROI was stuck at 5x and CPA rose with every budget increase. We revamped all creatives to conversion-driven angles, optimized GMV Max, and scaled winning campaigns gradually. Result: 102,748 orders, 11.8x ad spend growth while staying profitable.",
        },
        {
          platform: "Meta", industry: "Fashion",
          metrics: [
            { k: "ROAS", v: "8.80 → 20.12" },
            { k: "Order", v: "+61%" },
            { k: "Purchase Value", v: "Rp13.6M → Rp250.9M" },
          ],
          body: "Low ROAS and inefficient campaign structure. We simplified the structure, reallocated budget to top performers, and optimized on funnel data (ATC → Purchase), not just CTR.",
        },
        {
          platform: "Google Ads", industry: "Lead Generation (SG & MY)",
          metrics: [
            { k: "CPA", v: "SGD 22.11 → 17.59" },
            { k: "Conv. Rate", v: "6.33% → 9.56%" },
            { k: "CTR", v: "7.98% → 10.31%" },
          ],
          body: "High CPA in the Singapore & Malaysia markets with poor lead quality. We improved quality scores, restructured keywords, shifted the conversion target from CTWA to contact forms, and ran regular search-term optimization. Lead quality rose significantly.",
        },
        {
          platform: "Shopee", industry: "Fashion",
          metrics: [
            { k: "Revenue", v: "~2x → Rp1.2B" },
            { k: "Order", v: "+71%" },
            { k: "ROAS", v: "steady 15x+" },
          ],
          body: "Stagnant ROAS despite rising budgets. We restructured campaigns by objective & product category, optimized keywords, and scaled only top-ROAS campaigns. ROAS held above 15x even as budget scaled 2x.",
        },
      ],
    },
    how: {
      eyebrow: "HOW WE WORK",
      headline1: "A measurable system,",
      headline2: "from audit to scaling.",
      steps: [
        { t: "Audit & Strategy Plan", b: "Ads & store performance analysis, creative evaluation, competitor benchmarking, and a custom strategy roadmap. Done before any contract." },
        { t: "Take Over & Kick-Off", b: "Access setup, pixel & analytics integration, goals & KPI alignment, and execution timeline." },
        { t: "Intensive Testing", b: "Campaign launch, market response testing, winning creative & audience identification in week one." },
        { t: "Optimization & Scaling", b: "Gradual budget scaling on winners, cost efficiency, and ROAS & profit optimization." },
        { t: "Evaluation & Reporting", b: "Weekly performance reports, KPI reviews, and continuous strategic recommendations." },
      ],
    },
    services: {
      eyebrow: "SERVICES",
      headline1: "A service ecosystem",
      headline2: "built for measurable scale.",
      items: [
        { t: "Audit & Advisory", b: "Store funnel breakdown, full audit, and forecasting. Free, limited slots.", badge: "Free" },
        { t: "Ads Management", b: "Full management of Google Ads, Meta, TikTok, and Shopee with transparent weekly reporting." },
        { t: "Corporate Training", b: "Upskill your team on ads & AI. Coming soon.", soon: true, badge: "Coming Soon" },
        { t: "AI & Automation", b: "Automate marketing workflows with AI solutions. Coming soon.", soon: true, badge: "Coming Soon" },
      ],
    },
    team: {
      eyebrow: "TEAM",
      headline1: "The people",
      headline2: "behind the numbers.",
      members: [
        { r: "Co-Founder", d: "Growth & AI Marketing Strategist" },
        { r: "Co-Founder", d: "Strategic Finance" },
        { r: "Co-Founder", d: "TikTok & Meta Ads Expert, 5+ years" },
        { r: "Co-Founder", d: "Google, Meta & TikTok Ads Expert, 5+ years" },
      ],
    },
    contact: {
      headline1: "Schedule a session today.",
      headline2: "Let's engineer your profit.",
      sub: "Claim a Free Growth Audit slot: we break down your funnel, ads, and scaling opportunities — no commitment.",
      f: {
        name: "Full Name", email: "Email", wa: "WhatsApp Number", brand: "Brand Name",
        platform: "Main ad platform", platformOpts: ["Meta", "Google", "TikTok", "Shopee", "Not advertising yet"],
        challenge: "Tell us your business challenge", submit: "Submit & Claim Audit",
        success: "Thank you! Our team will reach out shortly.",
      },
    },
    footer: {
      tagline: "Behind every scalable brand is a repeatable growth system. We help you build it with strategy, data, execution, and AI.",
      nav: "Navigation", contact: "Contact", office: "Head Office",
    },
  },
};

export const clients = ["Joylab", "Kenmaster", "Beatrice Clothing", "3Mongkis", "Boga Group", "Nama Kids", "Environesia", "Lucienne"];