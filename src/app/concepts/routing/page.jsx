export const metadata = {
  title: "Routing in Next.js",
  description: "Understand file-based routing in Next.js with examples",
};

export default function RoutingPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className = "text-2xl md:text-3xl font-bold text-gray-900 mb-3">Routing in Next.js</h1>

      <p className="mb-3 text-gray-600">
        Next.js uses a file-based routing system where folders define routes.
      </p>

      <h2 className = "text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">Basic Example</h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6">
        <code>
{`app/
 ├── page.js        → /
 ├── blog/
 │   └── page.js    → /blog`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">Real World Use Case</h2>
      <p className="text-sm md:text-base text-gray-600">
        Large applications use nested routes to separate dashboards, blogs,
        and documentation sections.
      </p>
    </article>
  );
}
