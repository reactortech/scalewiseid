import type { Lang } from "./i18n";
import type { CaseSlug } from "./i18n";

export type HeroStat = {
  label: { id: string; en: string };
  value: string;
  sub?: { id: string; en: string };
};

export type CaseDashboard = {
  niche: { id: string; en: string };
  platform: string;
  title: { id: string; en: string }; // gold accent second line
  titleAccent: { id: string; en: string };
  period: { id: string; en: string };
  heroStats: HeroStat[];
  problem: { id: string[]; en: string[] };
  strategy: { id: string[]; en: string[] };
};

export const caseDashboards: Record<CaseSlug, CaseDashboard> = {
  "tiktok-skincare": {
    niche: { id: "SKINCARE", en: "SKINCARE" },
    platform: "TikTok",
    title: { id: "TikTok Shop Ads", en: "TikTok Shop Ads" },
    titleAccent: { id: "Growth & Profitability", en: "Growth & Profitability" },
    period: { id: "1 Okt 2025 – 28 Feb 2026", en: "Oct 1, 2025 – Feb 28, 2026" },
    heroStats: [
      { label: { id: "ROI", en: "ROI" }, value: "5x → 9,66x" },
      { label: { id: "Revenue", en: "Revenue" }, value: "Rp272Jt → Rp5,8M" },
      { label: { id: "CPA", en: "CPA" }, value: "−46%", sub: { id: "Rp10.844 → Rp5.892", en: "Rp10,844 → Rp5,892" } },
      { label: { id: "Total Order", en: "Total Orders" }, value: "102.748" },
      { label: { id: "Ad Spend", en: "Ad Spend" }, value: "+11,8x", sub: { id: "Rp51Jt → Rp605Jt", en: "Rp51M → Rp605M" } },
    ],
    problem: {
      id: [
        "ROI stagnan di kisaran 5x.",
        "Sulit scaling budget karena khawatir performa turun.",
        "CPA terus meningkat saat budget dinaikkan.",
      ],
      en: [
        "ROI stuck around 5x.",
        "Hard to scale budget without performance dropping.",
        "CPA kept rising as budget increased.",
      ],
    },
    strategy: {
      id: [
        "Revamp total creative dengan angle conversion-driven.",
        "Fokus konten before-after, product texture & honest review.",
        "Optimasi fase learning GMV Max campaign.",
        "Scaling budget bertahap pada winning campaign.",
        "Tekan CPA lewat optimasi creative & struktur campaign.",
      ],
      en: [
        "Full creative revamp with conversion-driven angles.",
        "Focus on before-after, product texture & honest reviews.",
        "Optimize the learning phase of GMV Max campaigns.",
        "Scale budget gradually on winning campaigns.",
        "Drive down CPA via creative & campaign structure tuning.",
      ],
    },
  },
  "meta-fashion": {
    niche: { id: "FASHION", en: "FASHION" },
    platform: "Meta",
    title: { id: "Meta Ads", en: "Meta Ads" },
    titleAccent: { id: "Growth & Profitability", en: "Growth & Profitability" },
    period: { id: "Jun 2025 – Sep 2025", en: "Jun 2025 – Sep 2025" },
    heroStats: [
      { label: { id: "ROAS", en: "ROAS" }, value: "8,80 → 20,12", sub: { id: "+28%", en: "+28%" } },
      { label: { id: "Order", en: "Orders" }, value: "613 → 985", sub: { id: "+61%", en: "+61%" } },
      { label: { id: "Purchase Value", en: "Purchase Value" }, value: "Rp13,65Jt → Rp250,9Jt" },
      { label: { id: "Add to Cart", en: "Add to Cart" }, value: "3K → 4,6K", sub: { id: "+50%", en: "+50%" } },
    ],
    problem: {
      id: [
        "ROAS rendah & inkonsisten.",
        "Cost per purchase tinggi.",
        "Struktur campaign belum efisien.",
        "Campaign scalable terbatas.",
      ],
      en: [
        "Low & inconsistent ROAS.",
        "High cost per purchase.",
        "Inefficient campaign structure.",
        "Limited scalable campaigns.",
      ],
    },
    strategy: {
      id: [
        "Sederhanakan struktur campaign & alokasikan budget ke performa terbaik.",
        "Uji creative, audience & placement.",
        "Scale bertahap pada ROAS tinggi, matikan campaign tidak efisien.",
        "Monitoring harian CPP / ROAS / CVR / Add to Cart.",
        "Optimasi berbasis funnel (ATC → Purchase), bukan hanya CTR/CPM.",
      ],
      en: [
        "Simplify campaign structure & shift budget to best performers.",
        "Test creative, audience & placement.",
        "Scale gradually on high ROAS, kill inefficient campaigns.",
        "Daily monitoring of CPP / ROAS / CVR / Add to Cart.",
        "Optimize by funnel (ATC → Purchase), not just CTR/CPM.",
      ],
    },
  },
  "google-ads-leadgen": {
    niche: { id: "LEAD GENERATION (SG/MY)", en: "LEAD GENERATION (SG/MY)" },
    platform: "Google Ads",
    title: { id: "Google Ads", en: "Google Ads" },
    titleAccent: { id: "Lead Generation Efficiency", en: "Lead Generation Efficiency" },
    period: { id: "Apr 2026 – Mei 2026", en: "Apr 2026 – May 2026" },
    heroStats: [
      { label: { id: "CPA", en: "CPA" }, value: "SGD 22,11 → 17,59" },
      { label: { id: "Conv. Rate", en: "Conv. Rate" }, value: "6,33% → 9,56%" },
      { label: { id: "CTR", en: "CTR" }, value: "7,98% → 10,31%" },
    ],
    problem: {
      id: [
        "Pasar Singapore & Malaysia dengan CPA tinggi.",
        "CTR rendah, traffic kurang maksimal.",
        "Kualitas lead rendah karena memakai CTWA.",
      ],
      en: [
        "Singapore & Malaysia markets with high CPA.",
        "Low CTR, traffic underutilized.",
        "Poor lead quality from CTWA.",
      ],
    },
    strategy: {
      id: [
        "Naikkan quality score tiap campaign untuk impresi lebih baik.",
        "Perbaiki ads, grouping & target keyword yang lebih konversi.",
        "Ubah target konversi dari CTWA ke contact form.",
        "Bidding budget ke device yang lebih menghasilkan konversi.",
        "Optimasi search term secara berkala.",
      ],
      en: [
        "Raise each campaign's quality score for better impressions.",
        "Refine ads, grouping & keyword targeting toward conversion.",
        "Switch conversion goal from CTWA to contact form.",
        "Bid budget toward higher-converting devices.",
        "Regular search term optimization.",
      ],
    },
  },
  "shopee-fashion": {
    niche: { id: "FASHION", en: "FASHION" },
    platform: "Shopee",
    title: { id: "Shopee Ads", en: "Shopee Ads" },
    titleAccent: { id: "Scaling & Profitability", en: "Scaling & Profitability" },
    period: { id: "1 – 30 Nov", en: "Nov 1 – 30" },
    heroStats: [
      { label: { id: "Revenue", en: "Revenue" }, value: "~2x → Rp1,2M" },
      { label: { id: "Order", en: "Orders" }, value: "+71%" },
      { label: { id: "Impression", en: "Impressions" }, value: "+60%" },
      { label: { id: "ROAS", en: "ROAS" }, value: "15x+", sub: { id: "budget di-scale 2x", en: "budget scaled 2x" } },
    ],
    problem: {
      id: [
        "ROAS stagnan meski budget terus meningkat.",
        "Struktur campaign belum efisien, budget terdistribusi kurang optimal.",
        "Banyak keyword & placement performa rendah masih menyerap biaya.",
      ],
      en: [
        "ROAS stagnant even as budget kept rising.",
        "Inefficient campaign structure, suboptimal budget distribution.",
        "Low-performing keywords & placements still burning spend.",
      ],
    },
    strategy: {
      id: [
        "Restructure Shopee Ads campaign berdasarkan objective & kategori produk.",
        "Optimasi keyword (bid adjustment, negative & long-tail keyword).",
        "Scale budget hanya pada campaign dengan ROAS terbaik.",
        "Daily monitoring CTR / CVR / CPC / ROAS.",
        "Optimasi produk hero + A/B testing berkala.",
      ],
      en: [
        "Restructure Shopee Ads by objective & product category.",
        "Keyword optimization (bid adjustment, negative & long-tail).",
        "Scale budget only on best-ROAS campaigns.",
        "Daily monitoring of CTR / CVR / CPC / ROAS.",
        "Hero product optimization + regular A/B testing.",
      ],
    },
  },
};

export const dashboardCopy = {
  back: { id: "← Kembali ke Studi Kasus", en: "← Back to Case Studies" },
  before: { id: "BEFORE HANDLE", en: "BEFORE HANDLE" },
  after: { id: "AFTER HANDLE", en: "AFTER HANDLE" },
  problem: { id: "PROBLEM", en: "PROBLEM" },
  strategy: { id: "STRATEGY", en: "STRATEGY" },
  period: { id: "Campaign Period", en: "Campaign Period" },
  cta: { id: "Klaim Audit Gratis", en: "Claim Free Audit" },
  placeholder: { id: "Screenshot dashboard", en: "Dashboard screenshot" },
};

export function pick<T>(v: { id: T; en: T }, lang: Lang): T {
  return v[lang];
}