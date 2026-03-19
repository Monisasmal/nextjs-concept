export const metadata = {
  title: "Static vs Dynamic Pages in Next.js",
  description:
    "Understand the difference between static and dynamic rendering in Next.js.",
};

async function getStaticData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache", // static
  });
  return res.json();
}

async function getDynamicData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    cache: "no-store", // dynamic
  });
  return res.json();
}

export default async function StaticVsDynamicPage() {
  const staticData = await getStaticData();
  const dynamicData = await getDynamicData();

  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Static vs Dynamic Pages in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Next.js pages can be rendered statically at build time or dynamically
        on each request depending on data needs.
      </p>

      {/* STATIC */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Static Page
      </h2>

      <p className="text-gray-600 mb-4">
        Static pages are generated once and cached. Every user sees the same
        content instantly.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-4 overflow-x-auto">
        <code>
{`fetch("API", { cache: "force-cache" });`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        Example static data: <strong>{staticData.title}</strong>
      </p>

      {/* DYNAMIC */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Dynamic Page
      </h2>

      <p className="text-gray-600 mb-4">
        Dynamic pages fetch fresh data on every request.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-4 overflow-x-auto">
        <code>
{`fetch("API", { cache: "no-store" });`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        Example dynamic data: <strong>{dynamicData.title}</strong>
      </p>

      {/* DIFFERENCE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Key Differences
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Static = pre-rendered and cached</li>
        <li>Dynamic = rendered per request</li>
        <li>Static = faster delivery</li>
        <li>Dynamic = always fresh data</li>
        <li>Static = scalable</li>
        <li>Dynamic = flexible</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        Static pages suit blogs or docs. Dynamic pages suit dashboards or live
        inventory systems.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Static pages are built once and cached, while dynamic pages fetch data
        on each request for real-time updates.
      </p>
    </article>
  );
}
