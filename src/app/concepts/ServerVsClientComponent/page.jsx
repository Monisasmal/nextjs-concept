export const metadata = {
  title: "Server vs Client Components in Next.js",
  description:
    "Understand the difference between React Server Components and Client Components in Next.js with real-world examples.",
};

export default function ServerVsClientPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Server Components vs Client Components
      </h1>

      <p className="mb-4 text-gray-600">
        Next.js (App Router) uses React Server Components by default.
        Client Components are used only when interactivity is required.
      </p>

      {/* SERVER COMPONENT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is a Server Component?
      </h2>

      <p className="text-gray-600 mb-4">
        A Server Component runs only on the server. Its code is never sent
        to the browser, which makes the application faster and more secure.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`// app/page.jsx (Server Component by default)
export default function Page() {
  return <h1>Welcome</h1>;
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        You can fetch data directly from a database or API inside a Server
        Component without exposing secrets.
      </p>

      {/* CLIENT COMPONENT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is a Client Component?
      </h2>

      <p className="text-gray-600 mb-4">
        A Client Component runs in the browser and is required for user
        interactions like clicks, forms, state, and effects.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>;
}`}
        </code>
      </pre>

      {/* KEY DIFFERENCES */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Key Differences
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Server Components do not support state or effects</li>
        <li>Client Components support interactivity and browser APIs</li>
        <li>Server Components reduce JavaScript sent to the browser</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        An e-commerce product page uses Server Components to fetch product
        data and Client Components for the “Add to Cart” button.
      </p>

      {/* WHEN TO USE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        When to Use Which?
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Use Server Components for data fetching and static UI</li>
        <li>Use Client Components only where interaction is required</li>
      </ul>

      {/* INTERVIEW TIP */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        In Next.js, Server Components are default and improve performance,
        while Client Components are used selectively for interactivity.
      </p>
    </article>
  );
}
