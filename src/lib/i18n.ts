export type Lang = "id" | "en";

type Stat = { v: number; suf?: string; pre?: string; l: string; full?: string };
type Service = { t: string; b: string; badge?: string; soon?: boolean };
type Metric = { k: string; v: string };
type CaseItem = { slug: string; platform: string; industry: string; metrics: Metric[]; body: string; title: string; strategy: string[]; context: string; execution: string[] };
type Step = { t: string; b: string };
type Member = { r: string; d: string };

type Dict = {
  nav: { services: string; cases: string; how: string; team: string; contact: string; cta: string };
  hero: { badge: string; line1: string; line2: string; sub: string; cta1: string; cta2: string; trusted: string };
  stats: Stat[];
  problem: { eyebrow: string; headline1: string; headline2: string; c1t: string; c1b: string; c2t: string; c2b: string; close: string };
  cases: { eyebrow: string; headline1: string; headline2: string; headlineFull: string; subtitle: string; detailCta: string; items: CaseItem[] };
  how: { eyebrow: string; headline1: string; headline2: string; steps: Step[] };
  services: { eyebrow: string; headline1: string; headline2: string; items: Service[] };
  team: { eyebrow: string; headline1: string; headline2: string; members: Member[] };
  contact: {
    headline1: string; headline2: string; sub: string;
    f: { name: string; email: string; wa: string; brand: string; platform: string; platformOpts: string[]; challenge: string; submit: string; success: string };
  };
  caseDetail: {
    back: string;
    context: string; before: string; strategy: string; execution: string; results: string;
    beforePlaceholder: string; afterPlaceholder: string; timelinePlaceholder: string;
    ctaTitle: string; ctaSub: string; ctaBtn: string;
  };
  audit: {
    eyebrow: string; title1: string; title2: string; sub: string; ctaScroll: string;
    whatEyebrow: string; whatTitle: string; benefits: { t: string; b: string }[];
    howEyebrow: string; howTitle: string; howSteps: { t: string; b: string }[];
    forEyebrow: string; forTitle: string; forWhom: string[];
    formEyebrow: string; formTitle: string;
  };
  footer: { tagline: string; nav: string; contact: string; office: string };
};

const SLUGS = ["tiktok-skincare", "meta-fashion", "google-ads-leadgen", "shopee-fashion"] as const;
export type CaseSlug = typeof SLUGS[number];
export const caseSlugs: readonly CaseSlug[] = SLUGS;

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
      eyebrow: "PORTOFOLIO & CASE STUDIES",
      headline1: "Bukti,",
      headline2: "bukan janji.",
      headlineFull: "Dari strategi berbasis data dan proses yang selalu bertumbuh, hasil yang nyata.",
      subtitle: "4 studi kasus lintas platform dengan angka yang bisa diverifikasi. Setiap keputusan berbasis data, untuk hasil yang terukur.",
      detailCta: "Lihat Detail",
      items: [
        {
          slug: "tiktok-skincare",
          title: "Skincare × TikTok: ROI dari 5x menuju 9,66x",
          platform: "TikTok", industry: "Skincare",
          metrics: [
            { k: "ROI", v: "5x → 9.66x" },
            { k: "Revenue", v: "Rp272 Jt → Rp5,8 M" },
            { k: "CPA", v: "-46%" },
          ],
          body: "ROI stagnan di 5x dan CPA naik setiap budget dinaikkan. Kami revamp seluruh creative ke angle conversion-driven, optimalkan GMV Max, dan scaling bertahap pada winning campaign. Hasil: 102.748 order, ad spend tumbuh 11,8x tetap profitable.",
          context: "Brand skincare lokal dengan produk unggulan di kategori acne care. Sudah beriklan di TikTok Shop namun ROI stagnan meski creative dan budget bertambah.",
          strategy: [
            "Revamp seluruh creative dari brand awareness ke angle conversion-driven berbasis pain point pelanggan.",
            "Optimalkan GMV Max dengan struktur campaign yang bersih dan produk winner sebagai fokus.",
            "Scaling bertahap: naikkan budget hanya pada campaign dengan ROI > target.",
            "A/B test creative mingguan berbasis metrik CTR, CVR, dan blended ROI.",
          ],
          execution: [
            "Minggu 1–2: audit akun & produksi 20 creative baru.",
            "Minggu 3–4: launch campaign GMV Max + testing audience.",
            "Bulan 2: identifikasi winning creative, scaling budget 3x.",
            "Bulan 3+: scaling agresif dengan tetap menjaga ROI di atas 8x.",
          ],
        },
        {
          slug: "meta-fashion",
          title: "Fashion × Meta: ROAS dari 8,80 menuju 20,12",
          platform: "Meta", industry: "Fashion",
          metrics: [
            { k: "ROAS", v: "8.80 → 20.12" },
            { k: "Order", v: "+61%" },
            { k: "Purchase Value", v: "Rp13,6 Jt → Rp250,9 Jt" },
          ],
          body: "ROAS rendah dan struktur campaign tidak efisien. Kami sederhanakan struktur, alokasikan budget ke campaign terbaik, dan optimasi berbasis data funnel (ATC → Purchase), bukan sekadar CTR.",
          context: "Brand fashion lokal dengan katalog luas, running di Meta Ads namun ROAS rendah dan struktur campaign kompleks.",
          strategy: [
            "Sederhanakan struktur campaign, kurangi overlap audience.",
            "Alokasikan budget ke campaign dengan funnel data terbaik (ATC → Purchase).",
            "Optimasi berbasis data funnel, bukan sekadar CTR.",
            "Refresh creative mingguan untuk melawan ad fatigue.",
          ],
          execution: [
            "Minggu 1: audit & konsolidasi campaign.",
            "Minggu 2–4: shift budget ke winners.",
            "Bulan 2: scale-up dengan CBO & lookalike segar.",
          ],
        },
        {
          slug: "google-ads-leadgen",
          title: "Google Ads × Lead Gen: CPA turun, kualitas lead naik",
          platform: "Google Ads", industry: "Lead Generation (SG & MY)",
          metrics: [
            { k: "CPA", v: "SGD 22.11 → 17.59" },
            { k: "Conv. Rate", v: "6,33% → 9,56%" },
            { k: "CTR", v: "7,98% → 10,31%" },
          ],
          body: "CPA tinggi di pasar Singapura & Malaysia dengan kualitas lead rendah. Kami tingkatkan quality score, restrukturisasi keyword, ubah target konversi dari CTWA ke contact form, dan optimasi search term berkala. Kualitas lead naik signifikan.",
          context: "Brand jasa dengan target pasar Singapura & Malaysia. Google Ads berjalan tapi kualitas lead rendah dan CPA tinggi.",
          strategy: [
            "Tingkatkan quality score dengan restrukturisasi ad group dan keyword.",
            "Ubah target konversi dari click-to-WhatsApp ke contact form berkualitas.",
            "Optimasi search term & negative keyword berkala.",
            "Landing page copy diarahkan ke kualifikasi lead.",
          ],
          execution: [
            "Minggu 1: audit search term & restrukturisasi keyword.",
            "Minggu 2: switch konversi ke contact form + landing update.",
            "Bulan 2+: optimasi mingguan, scale-up di keyword winning.",
          ],
        },
        {
          slug: "shopee-fashion",
          title: "Shopee × Fashion: ROAS 15x stabil di scaling 2x",
          platform: "Shopee", industry: "Fashion",
          metrics: [
            { k: "Revenue", v: "~2x → Rp1,2 M" },
            { k: "Order", v: "+71%" },
            { k: "ROAS", v: "stabil 15x+" },
          ],
          body: "ROAS stagnan meski budget terus naik. Kami restrukturisasi campaign berdasarkan objective & kategori produk, optimasi keyword, dan scaling hanya pada campaign ber-ROAS terbaik. ROAS tetap di atas 15x meski budget di-scale 2x.",
          context: "Brand fashion dengan performa Shopee yang stagnan meski budget iklan terus dinaikkan.",
          strategy: [
            "Restrukturisasi campaign berdasarkan objective & kategori produk.",
            "Optimasi keyword berkala berbasis performa & bid strategy.",
            "Scaling hanya pada campaign dengan ROAS terbaik.",
            "Cross-selling & bundling untuk naikkan AOV.",
          ],
          execution: [
            "Minggu 1: audit + rebuild struktur campaign.",
            "Minggu 2–4: keyword optimization + scaling bertahap.",
            "Bulan 2+: maintain ROAS di atas 15x sambil scale-up 2x.",
          ],
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
    caseDetail: {
      back: "Kembali ke Beranda",
      context: "Konteks Brand",
      before: "Kondisi Awal",
      strategy: "Diagnosa & Strategi",
      execution: "Eksekusi",
      results: "Hasil",
      beforePlaceholder: "Screenshot kondisi awal (before) — placeholder.",
      afterPlaceholder: "Screenshot hasil akhir (after) — placeholder.",
      timelinePlaceholder: "Timeline eksekusi",
      ctaTitle: "Mau hasil seperti ini di bisnismu?",
      ctaSub: "Klaim Free Growth Audit — kami bedah funnel & peluang scaling brand kamu tanpa komitmen.",
      ctaBtn: "Klaim Audit Gratis",
    },
    audit: {
      eyebrow: "FREE GROWTH AUDIT",
      title1: "Audit gratis untuk melihat",
      title2: "peluang scaling brandmu.",
      sub: "Kami bedah performa ads, funnel toko, dan peluang pertumbuhan bisnismu — dalam 3–5 hari kerja, tanpa komitmen.",
      ctaScroll: "Ajukan Audit Sekarang",
      whatEyebrow: "APA YANG ANDA DAPATKAN",
      whatTitle: "7 hal yang kami kupas.",
      benefits: [
        { t: "Ads Performance Analysis", b: "Bedah performa campaign lintas platform: struktur, ROAS, blended metric." },
        { t: "Store Performance Review", b: "Review funnel & conversion rate toko/marketplace." },
        { t: "Creative Asset Evaluation", b: "Evaluasi creative winning, ad fatigue, dan angle baru." },
        { t: "Competitor Benchmarking", b: "Benchmark kompetitor: pricing, creative, positioning." },
        { t: "Customer & Audience Insights", b: "Insight pelanggan dan segmen audience paling profitable." },
        { t: "Growth Opportunity Mapping", b: "Peta peluang scaling: channel, produk, dan revenue baru." },
        { t: "Custom Strategy Roadmap", b: "Roadmap strategi custom 30–90 hari, siap eksekusi." },
      ],
      howEyebrow: "CARA KERJA",
      howTitle: "3 langkah, tanpa ribet.",
      howSteps: [
        { t: "Isi Form", b: "Ceritakan brand kamu dan tantangan bisnismu di form audit." },
        { t: "Kami Analisis", b: "Tim kami analisis performa & peluang selama 3–5 hari kerja." },
        { t: "Audit + Strategy Call", b: "Kamu terima laporan audit dan sesi strategi 1-on-1." },
      ],
      forEyebrow: "UNTUK SIAPA",
      forTitle: "Audit ini cocok untuk kamu jika...",
      forWhom: [
        "Brand FMCG & consumer di Indonesia.",
        "Omzet minimum Rp300 juta / bulan.",
        "Sudah punya tim konten (in-house atau outsource).",
      ],
      formEyebrow: "AJUKAN AUDIT",
      formTitle: "Isi form di bawah untuk mulai.",
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
      eyebrow: "PORTFOLIO & CASE STUDIES",
      headline1: "Proof,",
      headline2: "not promises.",
      headlineFull: "From data-driven strategy and a process that keeps evolving, real results.",
      subtitle: "4 case studies across platforms with verifiable numbers. Every decision data-driven, every result measurable.",
      detailCta: "View Details",
      items: [
        {
          slug: "tiktok-skincare",
          title: "Skincare × TikTok: ROI from 5x to 9.66x",
          platform: "TikTok", industry: "Skincare",
          metrics: [
            { k: "ROI", v: "5x → 9.66x" },
            { k: "Revenue", v: "Rp272M → Rp5.8B" },
            { k: "CPA", v: "-46%" },
          ],
          body: "ROI was stuck at 5x and CPA rose with every budget increase. We revamped all creatives to conversion-driven angles, optimized GMV Max, and scaled winning campaigns gradually. Result: 102,748 orders, 11.8x ad spend growth while staying profitable.",
          context: "A local skincare brand with a hero product in acne care. Already running TikTok Shop ads but ROI stuck despite more creatives and budget.",
          strategy: [
            "Revamp all creatives from awareness to conversion-driven pain-point angles.",
            "Clean up GMV Max structure focused on winning products.",
            "Gradual scaling: raise budget only on campaigns hitting the ROI target.",
            "Weekly creative A/B testing based on CTR, CVR, and blended ROI.",
          ],
          execution: [
            "Weeks 1–2: account audit & 20 new creatives.",
            "Weeks 3–4: launch GMV Max + audience testing.",
            "Month 2: identify winners, 3x budget scaling.",
            "Month 3+: aggressive scaling while holding ROI above 8x.",
          ],
        },
        {
          slug: "meta-fashion",
          title: "Fashion × Meta: ROAS from 8.80 to 20.12",
          platform: "Meta", industry: "Fashion",
          metrics: [
            { k: "ROAS", v: "8.80 → 20.12" },
            { k: "Order", v: "+61%" },
            { k: "Purchase Value", v: "Rp13.6M → Rp250.9M" },
          ],
          body: "Low ROAS and inefficient campaign structure. We simplified the structure, reallocated budget to top performers, and optimized on funnel data (ATC → Purchase), not just CTR.",
          context: "A local fashion brand with a wide catalog running Meta Ads with low ROAS and a complex campaign structure.",
          strategy: [
            "Simplify campaign structure and reduce audience overlap.",
            "Reallocate budget to funnel-best campaigns (ATC → Purchase).",
            "Optimize on funnel data, not just CTR.",
            "Weekly creative refresh to fight ad fatigue.",
          ],
          execution: [
            "Week 1: audit & campaign consolidation.",
            "Weeks 2–4: shift budget to winners.",
            "Month 2: scale-up with CBO & fresh lookalikes.",
          ],
        },
        {
          slug: "google-ads-leadgen",
          title: "Google Ads × Lead Gen: CPA down, lead quality up",
          platform: "Google Ads", industry: "Lead Generation (SG & MY)",
          metrics: [
            { k: "CPA", v: "SGD 22.11 → 17.59" },
            { k: "Conv. Rate", v: "6.33% → 9.56%" },
            { k: "CTR", v: "7.98% → 10.31%" },
          ],
          body: "High CPA in the Singapore & Malaysia markets with poor lead quality. We improved quality scores, restructured keywords, shifted the conversion target from CTWA to contact forms, and ran regular search-term optimization. Lead quality rose significantly.",
          context: "A service brand targeting Singapore & Malaysia. Google Ads was running but lead quality was low and CPA was high.",
          strategy: [
            "Raise quality score by restructuring ad groups and keywords.",
            "Shift conversion target from click-to-WhatsApp to qualified contact forms.",
            "Regular search-term & negative keyword optimization.",
            "Landing copy tuned for lead qualification.",
          ],
          execution: [
            "Week 1: search-term audit & keyword restructure.",
            "Week 2: switch conversion to contact form + landing update.",
            "Month 2+: weekly optimization, scale-up on winning keywords.",
          ],
        },
        {
          slug: "shopee-fashion",
          title: "Shopee × Fashion: 15x ROAS held while scaling 2x",
          platform: "Shopee", industry: "Fashion",
          metrics: [
            { k: "Revenue", v: "~2x → Rp1.2B" },
            { k: "Order", v: "+71%" },
            { k: "ROAS", v: "steady 15x+" },
          ],
          body: "Stagnant ROAS despite rising budgets. We restructured campaigns by objective & product category, optimized keywords, and scaled only top-ROAS campaigns. ROAS held above 15x even as budget scaled 2x.",
          context: "A fashion brand with stagnant Shopee performance despite ever-rising ad budgets.",
          strategy: [
            "Restructure campaigns by objective & product category.",
            "Regular keyword optimization based on performance & bid strategy.",
            "Scale only campaigns with best ROAS.",
            "Cross-selling & bundling to lift AOV.",
          ],
          execution: [
            "Week 1: audit + rebuild campaign structure.",
            "Weeks 2–4: keyword optimization + gradual scaling.",
            "Month 2+: hold ROAS above 15x while scaling 2x.",
          ],
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
    caseDetail: {
      back: "Back to Home",
      context: "Brand Context",
      before: "Starting Point",
      strategy: "Diagnosis & Strategy",
      execution: "Execution",
      results: "Results",
      beforePlaceholder: "Before screenshot — placeholder.",
      afterPlaceholder: "After screenshot — placeholder.",
      timelinePlaceholder: "Execution timeline",
      ctaTitle: "Want results like this for your brand?",
      ctaSub: "Claim a Free Growth Audit — we'll break down your funnel & scaling opportunities, no commitment.",
      ctaBtn: "Claim Free Audit",
    },
    audit: {
      eyebrow: "FREE GROWTH AUDIT",
      title1: "A free audit to spot",
      title2: "your brand's scaling gaps.",
      sub: "We break down your ads, store funnel, and growth opportunities — within 3–5 business days, no commitment.",
      ctaScroll: "Request Audit Now",
      whatEyebrow: "WHAT YOU GET",
      whatTitle: "7 things we unpack.",
      benefits: [
        { t: "Ads Performance Analysis", b: "Cross-platform campaign breakdown: structure, ROAS, blended metrics." },
        { t: "Store Performance Review", b: "Funnel & conversion-rate review of your store/marketplace." },
        { t: "Creative Asset Evaluation", b: "Evaluation of winning creatives, ad fatigue, and new angles." },
        { t: "Competitor Benchmarking", b: "Competitor pricing, creative, and positioning benchmark." },
        { t: "Customer & Audience Insights", b: "Customer insights and most profitable audience segments." },
        { t: "Growth Opportunity Mapping", b: "A map of scaling opportunities: channels, products, new revenue." },
        { t: "Custom Strategy Roadmap", b: "A custom 30–90 day strategy roadmap, ready to execute." },
      ],
      howEyebrow: "HOW IT WORKS",
      howTitle: "3 steps, no fuss.",
      howSteps: [
        { t: "Submit the Form", b: "Tell us about your brand and your business challenge." },
        { t: "We Analyze", b: "Our team analyzes your performance & opportunities in 3–5 business days." },
        { t: "Audit + Strategy Call", b: "You receive the audit report and a 1-on-1 strategy session." },
      ],
      forEyebrow: "WHO IT'S FOR",
      forTitle: "This audit fits you if...",
      forWhom: [
        "You're an FMCG or consumer brand in Indonesia.",
        "You have a minimum revenue of Rp300M / month.",
        "You already have a content team (in-house or outsourced).",
      ],
      formEyebrow: "REQUEST AUDIT",
      formTitle: "Fill out the form below to get started.",
    },
  },
};

export const clients = ["Joylab", "Kenmaster", "Beatrice Clothing", "3Mongkis", "Boga Group", "Nama Kids", "Environesia", "Lucienne"];