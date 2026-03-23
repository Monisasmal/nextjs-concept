export const metadata = {
  title: "Caching in Next.js",
  description: "Understand how caching works in Next.js with examples and real-world explanation",
};

export default function CacheConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Caching in Next.js
      </h1>

      <p className="mb-3 text-gray-600">
        Caching stores previously fetched data so it can be reused instead of
        requesting it again. This improves performance, speed, and scalability
        in Next.js applications.
      </p>

      {/* -------------------- Basic Idea -------------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Basic Idea
      </h2>

      <p className="text-gray-600 mb-3">
        Instead of fetching data every time a user visits a page, Next.js can
        save the response and reuse it.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`await fetch("https://api.example.com/data", {
  cache: "force-cache",
});`}</code>
      </pre>

      <p className="text-gray-600 mb-6">
        This tells Next.js to reuse stored data when possible.
      </p>

      {/* -------------------- Types of Cache -------------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Types of Caching
      </h2>

      <h3 className="font-semibold">1️⃣ Static Cache (Default)</h3>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-4 overflow-x-auto">
        <code>{`fetch("API", { cache: "force-cache" });`}</code>
      </pre>

      <p className="text-gray-600 mb-4">
        Data is cached and reused. Ideal for blogs, docs, and static content.
      </p>

      <h3 className="font-semibold">2️⃣ Dynamic (No Cache)</h3>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-4 overflow-x-auto">
        <code>{`fetch("API", { cache: "no-store" });`}</code>
      </pre>

      <p className="text-gray-600 mb-4">
        Always fetches fresh data. Best for dashboards or live content.
      </p>

      <h3 className="font-semibold">3️⃣ Revalidated Cache</h3>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`fetch("API", {
  next: { revalidate: 10 },
});`}</code>
      </pre>

      <p className="text-gray-600 mb-6">
        Cached data updates automatically after a time interval.
      </p>

      {/* -------------------- Server vs Client -------------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Server vs Client Caching
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>
          ✅ Server Components → Full Next.js automatic caching support
        </li>
        <li>
          ⚠ Client Components → Browser/manual caching only
        </li>
      </ul>

      <p className="text-gray-600 mb-6">
        Next.js caching mainly works on the server because Server Components
        run before HTML is sent to the browser.
      </p>

      {/* -------------------- Real World Example -------------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Real World Example
      </h2>

      <p className="text-gray-600 mb-6">
        Imagine ordering coffee. Without caching, it’s prepared every time.
        With caching, the result is saved and served instantly — faster and
        more efficient.
      </p>

      {/* -------------------- Why Cache Matters -------------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why Caching Matters
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>⚡ Faster page loads</li>
        <li>📉 Reduced server/API load</li>
        <li>📈 Better scalability</li>
        <li>✨ Improved user experience</li>
      </ul>

      {/* -------------------- Interview Tip -------------------- */}

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Next.js caching stores fetched data on the server so it can be reused,
        improving performance and scalability while reducing unnecessary API
        requests.
      </p>

    </article>
  );
}
