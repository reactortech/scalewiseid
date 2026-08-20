import { createFileRoute, notFound } from "@tanstack/react-router";
import { caseSlugs, type CaseSlug } from "@/lib/i18n";
import { CaseStudyDashboard } from "@/components/site/CaseStudyDashboard";
import metaBefore from "@/assets/meta-fashion-before.png.asset.json";
import metaAfter from "@/assets/meta-fashion-after.png.asset.json";

const caseImages: Partial<Record<CaseSlug, { before: string; after: string }>> = {
  "meta-fashion": { before: metaBefore.url, after: metaAfter.url },
};

export const Route = createFileRoute("/case-study/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Case Study — ${params.slug} | Scalewise.id` },
      { name: "description", content: "Studi kasus growth & programmatic ads Scalewise.id — angka nyata, strategi berbasis data." },
      { property: "og:title", content: `Case Study — ${params.slug} | Scalewise.id` },
    ],
  }),
  loader: ({ params }) => {
    if (!caseSlugs.includes(params.slug as CaseSlug)) throw notFound();
    return { slug: params.slug as CaseSlug };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useLoaderData();
  const imgs = caseImages[slug];
  return <CaseStudyDashboard slug={slug} beforeImage={imgs?.before} afterImage={imgs?.after} />;
}