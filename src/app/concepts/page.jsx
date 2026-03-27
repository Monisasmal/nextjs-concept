import Link from "next/link";

const concepts = [
  {name: "What is Nextjs?", path:"/concepts/deepdiveNextjs"},
  {name: "What is Routing?", path: "/concepts/routing" },
  {name: "What is Rendering?", path: "/concepts/rendering" },
  {name: "page.js VS layout.js", path:"/concepts/pageVSlayout"},
  {name:  "What is Nested Routing?", path:"/concepts/nestedRouting"},
  {name:  "What is Nested Layout?", path:"/concepts/NestedLayout"},
  {name:  "What is Link Component?", path:"/concepts/LinkComponent"},
  {name:  "What is Route Groups()?", path:"/concepts/RouteGroups"},
  {name:  "What is Image Component?", path:"/concepts/ImageComponent"},
  {name:  "How does Next.js handle fonts, SEO, metadata, and favicon?", path:"concepts/FontSEOMetadataFavicon"},
  {name:  "Difference between React Server Components and Client Components", path:"concepts/ServerVsClientComponent"},
  {name:  "Understanding use client and Async Components in Next.js", path:"concepts/useClient&AsyncServerComponent"},
  {name:  "What is params and searchParams?", path:"concepts/params&searchParams"},
  {name:  "What is Dynamic Routing ?", path:"concepts/DynamicRouting"},
  {name:  "What is useSearchParams?", path:"concepts/useSearchParams"},
  {name:  "What is a Catch-All Segment?", path:"concepts/CatchAllSegments"},
  {name:  "What is Server Side Data Fetching?", path:"concepts/ServerSideDataFetching"},
  {name:  "What is Client Side Data Fetching?", path: "concepts/ClientSideDataFetching"},
  {name:  "What is Suspense in Next.js?", path:"concepts/Suspense"},
  {name:  "What is  CSR vs SSR ?", path:"concepts/CSRvsSSR"},
  {name:  "What is  Static Site Generation (SSG) ?", path:"concepts/StaticSiteGeneration"},
  {name: "What is Incremental Static Regeneration?", path:"concepts/ISR"},
  {name: "What is Static vs Dynamic Pages?", path:"concepts/StaticVsDynamic"},
  {name: "What is Cache?", path:"concepts/CacheConcept"},
  {name: "What is not-found-js?", path:"concepts/NotFound"},
  {name: "What is generate Static Params?", path:"concepts/generateStaticParams"},
  // {name: "What is use Server?", path:"concepts/useServer"},
  // {name: "What is use of useActionState?", path:"concepts/useActionState"},
  // {name: "What is use of useFormStatus()?", path:"concepts/useFormStatus"},
  // {name: "What is use of Redirect()?", path:"concepts/Redirect"},
  // {name: "What is use of useRouter()?", path:"concepts/useRouter"},
  // {name: "What is Revalidate Path?", path:"concepts/RevalidatePath"},
  // {name: "What is onDemand Revalidation and revalidation?", path:"concepts/RevalidationVsOn-DemandRevalidation"},
  // {name: "What is need of loading.js?", path:"concepts/LoadingConcept"},
  // {name: "What is need of error.js?", path:"concepts/ErrorConcept"},
  // {name: "What is Middleware?", path:"concepts/MiddlewareConcept "},
  // {name: "What is Hydration?", path:"concepts/Hydration"},
  // {name: "What is Auth-guard?", path:"concepts/Auth-guard"},
  // {name: "What is Streaming?", path:"concepts/Streaming"},
  // {name: "What is difference between next VS react?", path:"concepts/NextVsReact"},
  // {name: "What is Build VS Runtime?", path:"concepts/BuildVsRuntime"},
];

export default function Concepts() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Next.js Concepts</h1>

      <ul className="grid gap-4 sm:grid-cols-3">
        {concepts.map(c => (
          <li key={c.name} className="bg-white p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
