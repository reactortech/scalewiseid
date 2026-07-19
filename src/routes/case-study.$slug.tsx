import { createFileRoute, notFound } from "@tanstack/react-router";
import { caseSlugs, type CaseSlug } from "@/lib/i18n";
import { CaseStudyDashboard } from "@/components/site/CaseStudyDashboard";

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
  return <CaseStudyDashboard slug={slug} />;
}