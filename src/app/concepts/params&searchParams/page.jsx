export const metadata = {
  title: "params and searchParams in Next.js",
  description:
    "Understand what params and searchParams are in Next.js, why they are used, and how they work with real-world examples.",
};

export default function ParamsVsSearchParamsPage({ params, searchParams }) {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        params and searchParams in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Next.js provides <code>params</code> and <code>searchParams</code> to
        read dynamic values from the URL. They serve different purposes and
        are used in different scenarios.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is <code>params</code>?
      </h2>

      <p className="text-gray-600 mb-4">
        <code>params</code> contains dynamic route values that come from the
        URL path itself. These values are defined using dynamic folders.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 └── blog/
     └── [slug]/
         └── page.jsx`}
        </code>
      </pre>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export default function BlogPage({ params }) {
  return <h1>Blog: {params.slug}</h1>;
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        URL: <code>/blog/nextjs-routing</code>  
        <br />
        Result: <code>params.slug = nextjs-routing</code>
      </p>

      {/* WHY PARAMS */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why do we use <code>params</code>?
      </h2>

      <p className="text-gray-600 mb-4">
        <code>params</code> is used when content is identified by a fixed
        structure, such as blog posts, product pages, or user profiles.
      </p>

      {/* SEARCH PARAMS */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is <code>searchParams</code>?
      </h2>

      <p className="text-gray-600 mb-4">
        <code>searchParams</code> represents query string values that appear
        after the <code>?</code> in the URL.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`URL: /products?category=shoes&page=2`}
        </code>
      </pre>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export default function ProductsPage({ searchParams }) {
  return (
    <p>
      Category: {searchParams.category} <br />
      Page: {searchParams.page}
    </p>
  );
}`}
        </code>
      </pre>

      {/* WHY SEARCH */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why do we use <code>searchParams</code>?
      </h2>

      <p className="text-gray-600 mb-4">
        <code>searchParams</code> is used for optional values like filters,
        pagination, sorting, and search queries.
      </p>

      {/* WHERE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Where do we use <code>params</code> and <code>searchParams</code>?
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Server Components (recommended)</li>
        <li>Page components inside the <code>app</code> directory</li>
        <li>Layouts (for route-based data)</li>
      </ul>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How do they work together?
      </h2>

      <p className="text-gray-600 mb-4">
        A single page can use both <code>params</code> and
        <code>searchParams</code>.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`URL: /blog/react?sort=latest

params.slug = "react"
searchParams.sort = "latest"`}
        </code>
      </pre>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        An e-commerce site uses <code>params</code> for product IDs and
        <code>searchParams</code> for filters like price, size, and brand.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Use <code>params</code> for required route values and
        <code>searchParams</code> for optional query values.
      </p>
    </article>
  );
}
