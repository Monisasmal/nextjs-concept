export const metadata = {
  title: "CSR vs SSR in Next.js",
  description:
    "Understand the difference between Client-Side Rendering and Server-Side Rendering in Next.js.",
};

export default function CSRvsSSRPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        CSR vs SSR in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        CSR and SSR are two different ways of rendering web content — either
        in the browser or on the server.
      </p>

      {/* CSR */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is Client-Side Rendering (CSR)?
      </h2>

      <p className="text-gray-600 mb-4">
        CSR renders the page in the browser after JavaScript loads. Data is
        fetched client-side and the UI updates dynamically.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`"use client";

useEffect(() => {
  fetch("/api/data").then(res => res.json());
}, []);`}
        </code>
      </pre>

      {/* SSR */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is Server-Side Rendering (SSR)?
      </h2>

      <p className="text-gray-600 mb-4">
        SSR renders the page on the server first. The browser receives ready
        HTML with data already included.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export default async function Page() {
  const data = await fetch("/api/data").then(r => r.json());
  return <div>{data.title}</div>;
}`}
        </code>
      </pre>

      {/* DIFFERENCE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Key Differences
      </h2>

      <ul className="text-gray-600 mb-6">
        <li><strong>CSR:</strong> Browser renders after loading JS</li>
        <li><strong>SSR:</strong> Server renders before sending page</li>
        <li><strong>CSR:</strong> Slower first load</li>
        <li><strong>SSR:</strong> Faster initial content</li>
        <li><strong>CSR:</strong> Less SEO friendly</li>
        <li><strong>SSR:</strong> SEO optimized</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        CSR is great for dashboards and logged-in apps. SSR is ideal for blogs
        and e-commerce pages where SEO matters.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        CSR renders content in the browser, while SSR renders content on the
        server before sending it to the client, improving SEO and load speed.
      </p>
    </article>
  );
}
