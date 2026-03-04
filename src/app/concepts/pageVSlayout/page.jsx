export const metadata = {
  title: "page.js vs layout.js in Next.js",
  description:
    "Understand the purpose of page.js and layout.js in Next.js with real-world examples",
};

export default function PageVsLayoutConcept() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        page.js and layout.js in Next.js
      </h1>

      <p className="mb-3 text-gray-600">
        In the Next.js App Router, <code>page.js</code> and <code>layout.js</code>
        play different roles. Understanding the difference is essential
        for building scalable and maintainable applications.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        What is page.js?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        <code>page.js</code> defines a route and represents the main content
        of a page. Every folder that contains a <code>page.js</code> becomes
        accessible as a URL in the browser.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/page.js        → /
app/blog/page.js   → /blog`}
        </code>
      </pre>

      <p className="text-sm md:text-base text-gray-600 mb-4">
        Each <code>page.js</code> is responsible only for the content of that
        specific route.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        What is layout.js?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        <code>layout.js</code> is used to define shared UI that persists
        across multiple pages, such as headers, footers, sidebars,
        or navigation menus.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/layout.js     → Root layout
app/blog/layout.js → Blog layout`}
        </code>
      </pre>

      <p className="text-sm md:text-base text-gray-600 mb-4">
        Layouts wrap around pages and remain mounted when navigating
        between routes.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Key Difference Between page.js and layout.js
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`page.js   → Defines route content
layout.js → Defines shared structure`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Real World Example
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Think of a website like a shopping mall.
      </p>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        The mall building, entrance, and elevators remain the same.
        Individual shops change as you move around.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`layout.js → Mall building (header, footer, sidebar)
page.js   → Individual shops (content)`} 
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why This Separation Matters
      </h2>

      <p className="text-sm md:text-base text-gray-600">
        Separating layout and page logic improves performance,
        keeps code organized, and makes large applications easier
        to maintain and scale.
      </p>
    </article>
  );
}
