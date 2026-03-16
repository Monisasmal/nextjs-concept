// export const metadata = {
//   title: "useSearchParams in Next.js",
//   description:
//     "Learn what useSearchParams is in Next.js, why it is used, and how to read query parameters in client components.",
// };

"use client";

import { useSearchParams } from "next/navigation";

export default function UseSearchParamsPage() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const page = searchParams.get("page");

  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        useSearchParams in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <code>useSearchParams</code> is a client-side hook used to read query
        values from the URL inside interactive components.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What does useSearchParams do?
      </h2>

      <p className="text-gray-600 mb-4">
        It lets client components access URL query parameters without
        reloading the page.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`URL:
/products?category=shoes&page=2

const params = useSearchParams();

params.get("category") → "shoes"
params.get("page") → "2"`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        The hook reads values directly from the browser URL.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use useSearchParams?
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Filtering products</li>
        <li>Pagination controls</li>
        <li>Sorting data</li>
        <li>Search inputs</li>
      </ul>

      {/* LIVE OUTPUT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example Output
      </h2>

      <p className="text-gray-600 mb-4">
        Category: <strong>{category || "None"}</strong>
        <br />
        Page: <strong>{page || "None"}</strong>
      </p>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        An e-commerce filter panel updates the URL when users select
        categories. The UI reads those filters using
        <code> useSearchParams</code>.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        <code>useSearchParams</code> is a client hook for reading URL query
        values, while <code>searchParams</code> is used in server components.
      </p>
    </article>
  );
}
