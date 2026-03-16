export const metadata = {
  title: "Catch-all Segments in Next.js",
  description:
    "Learn what catch-all segments are in Next.js, why they are used, and how they handle multiple dynamic route parts.",
};

export default function CatchAllRoutePage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Catch-All Segments in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        A catch-all segment allows a route to match multiple URL parts using
        a single dynamic folder. It captures all remaining segments as an
        array.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is a Catch-All Segment?
      </h2>

      <p className="text-gray-600 mb-4">
        It is created using three dots inside square brackets:
        <code>[...slug]</code>. This folder captures multiple path values.
      </p>

      {/* STRUCTURE */}
      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 └── docs/
     └── [...slug]/
         └── page.jsx`}
        </code>
      </pre>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export default function DocsPage({ params }) {
  return <p>{JSON.stringify(params.slug)}</p>;
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        Visiting this URL:
        <br />
        <code>/docs/react/hooks/useState</code>
        <br />
        Produces:
        <br />
        <code>[react, hooks, useState]</code>
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use Catch-All Segments?
      </h2>

      <p className="text-gray-600 mb-4">
        They allow flexible nested routing without creating many folders.
      </p>

      <ul className="text-gray-600 mb-6">
        <li>Documentation systems</li>
        <li>Nested categories</li>
        <li>File explorers</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        A documentation website captures unlimited sections like:
      </p>

      <ul className="text-gray-600 mb-6">
        <li>/docs/react/hooks</li>
        <li>/docs/nextjs/routing/dynamic</li>
      </ul>

      <p className="text-gray-600">
        All handled by one catch-all route.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Catch-all segments allow a single route to capture multiple dynamic
        path parts as an array using the <code>[...segment]</code> syntax.
      </p>
    </article>
  );
}
