export const metadata = {
  title: "not-found.js in Next.js",
  description: "Understand how custom 404 handling works using not-found.js in Next.js",
};

export default function NotFoundConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        not-found.js in Next.js
      </h1>

      <p className="mb-3 text-gray-600">
        <strong>not-found.js</strong> is a special file in Next.js that lets
        you show a custom UI when a route or requested data does not exist.
        It replaces the default 404 page with your own design.
      </p>

      {/* ---------------- Basic Idea ---------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Basic Idea
      </h2>

      <p className="text-gray-600 mb-3">
        When Next.js cannot find a page or resource, it automatically renders
        the nearest <code>not-found.js</code>.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`app/not-found.js`}</code>
      </pre>

      <p className="text-gray-600 mb-6">
        This file acts as a custom 404 handler.
      </p>

      {/* ---------------- Example ---------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Example
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`export default function NotFound() {
  return (
    <div>
      <h1>404 — Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}`}</code>
      </pre>

      <p className="text-gray-600 mb-6">
        Whenever an invalid route is accessed, this UI appears.
      </p>

      {/* ---------------- Programmatic Usage ---------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Triggering Not Found Programmatically
      </h2>

      <p className="text-gray-600 mb-3">
        You can manually show the not-found page when data is missing.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`import { notFound } from "next/navigation";

export default async function Page() {
  const data = null;

  if (!data) {
    notFound();
  }

  return <div>Data loaded</div>;
}`}</code>
      </pre>

      <p className="text-gray-600 mb-6">
        This is useful when a database record or API response doesn’t exist.
      </p>

      {/* ---------------- Real World Example ---------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Real World Example
      </h2>

      <p className="text-gray-600 mb-6">
        Imagine clicking a product link that no longer exists. Instead of a
        broken screen, users see a helpful message guiding them back.
      </p>

      {/* ---------------- Why It Matters ---------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why not-found.js Matters
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Improves user experience</li>
        <li>Prevents broken navigation</li>
        <li>Provides clear feedback</li>
        <li>Supports SEO-friendly 404 handling</li>
      </ul>

      {/* ---------------- Interview Tip ---------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        not-found.js allows developers to create custom 404 experiences and
        can be triggered automatically or programmatically using the 
        <code>notFound()</code> function.
      </p>

    </article>
  );
}
