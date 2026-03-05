export const metadata = {
  title: "Nested Layouts in Next.js",
  description:
    "Understand how nested layouts work in Next.js App Router with real-world examples",
};

export default function NestedLayoutConcept() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Nested Layouts in Next.js
      </h1>

      <p className="mb-3 text-black-600">
        Nested layouts allow you to define layouts inside layouts.
        Each layout applies to all routes inside its folder
        while inheriting the parent layout.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        What is a Nested Layout?
      </h2>

      <p className="text-sm md:text-base text-black-600 mb-3">
        A nested layout is a <code>layout.js</code> file placed inside a nested
        folder. It wraps all pages and layouts inside that folder.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 ├── layout.js                 → Root layout
 ├── dashboard/
 │   ├── layout.js             → Dashboard layout
 │   ├── page.js               → /dashboard
 │   └── settings/
 │       └── page.js           → /dashboard/settings`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        How Nested Layouts Work
      </h2>

      <p className="text-sm md:text-base text-black-600 mb-4">
        When a page is rendered, Next.js combines layouts from the root
        down to the deepest nested layout before rendering the page content.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`Root Layout
 └── Dashboard Layout
     └── Page Content`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Real World Example
      </h2>

      <p className="text-sm md:text-base text-black-600 mb-3">
        Think of a company office building.
      </p>

      <p className="text-sm md:text-base text-black-600 mb-3">
        The building has a common entrance and security.
        Each department has its own internal layout.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`Root Layout       → Building entrance
Nested Layout      → Department floor
Page               → Individual room`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why Nested Layouts are Important
      </h2>

      <p className="text-sm md:text-base text-black-600 mb-3">
        Nested layouts help reuse UI like sidebars and navigation,
        reduce code duplication,
        and improve performance by preserving layout state.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Key Difference from page.js
      </h2>

      <p className="text-sm md:text-base text-black-600">
        Pages change during navigation,
        but layouts persist and do not re-render unless necessary.
      </p>
    </article>
  );
}
