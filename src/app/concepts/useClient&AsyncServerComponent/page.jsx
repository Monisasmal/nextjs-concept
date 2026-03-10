export const metadata = {
  title: "Why use use client in Next.js",
  description:
    "Understand why the use client directive is required in Next.js and why async components are used only on the server.",
};

export default function UseClientPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Why do we use <code>use client</code> in Next.js?
      </h1>

      <p className="mb-4 text-gray-600">
        In Next.js App Router, components are Server Components by default.
        The <code>use client</code> directive is used to mark components
        that must run in the browser.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What does use client do?
      </h2>

      <p className="text-gray-600 mb-4">
        It tells Next.js to send the component’s JavaScript to the browser
        so it can handle state, events, and browser APIs.
      </p>

      {/* CLIENT EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Client Component Example
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
        </code>
      </pre>

      {/* ASYNC */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why is <code>async</code> used only in Server Components?
      </h2>

      <p className="text-gray-600 mb-4">
        In Next.js, <code>async</code> components are intended for Server
        Components because data fetching happens on the server before the
        page is sent to the browser.
      </p>

      <p className="text-gray-600 mb-4">
        Server Components can safely fetch data from databases, private APIs,
        and environment variables without exposing them to the client.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`// Server Component
export default async function Page() {
  const data = await fetch("https://api.example.com/data");
  return <h1>{data.title}</h1>;
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        Client Components cannot be async because they run in the browser,
        where data fetching must be handled using hooks like
        <code> useEffect</code> or libraries such as React Query.
      </p>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        A blog page fetches posts on the server using an async Server
        Component, while the comment form is a Client Component using
        <code>use client</code>.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Server Components can be async for data fetching, while Client
        Components handle interactivity and must use hooks instead of async
        rendering.
      </p>
    </article>
  );
}
