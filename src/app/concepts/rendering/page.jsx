export const metadata = {
  title: "Rendering in Next.js",
  description: "Learn how rendering works in Next.js with real-world examples",
};

export default function RenderingPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Rendering in Next.js
      </h1>

      <p className="mb-3 text-gray-600">
        Rendering is the process of converting React components into HTML
        that the browser can display.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why Rendering Matters?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-4">
        Rendering affects performance, SEO, and user experience.
        Different pages require different rendering strategies.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Static Rendering (SSG)
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Static pages are generated at build time and reused for every user.
        This is the fastest and most SEO-friendly option.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export default function Page() {
  return <h1>Static Page</h1>;
}`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Server-Side Rendering (SSR)
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Pages are rendered on every request.
        This ensures users always see fresh data.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export const dynamic = "force-dynamic";

export default async function Page() {
  return <h1>Server Rendered Page</h1>;
}`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Client-Side Rendering (CSR)
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Rendering happens in the browser after the page loads.
        Used for interactive and user-specific features.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real World Use Case
      </h2>

      <p className="text-sm md:text-base text-gray-600">
        Blog and documentation pages use static rendering,
        news pages use server-side rendering,
        and dashboards rely on client-side rendering.
      </p>
    </article>
  );
}
