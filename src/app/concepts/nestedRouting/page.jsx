export const metadata = {
  title: "Nested Routing in Next.js",
  description:
    "Learn how nested routing works in Next.js App Router with real-world examples",
};

export default function NestedRoutingConcept() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Nested Routing in Next.js
      </h1>

      <p className="mb-3 text-gray-600">
        Nested routing allows you to create routes inside other routes
        by nesting folders in the <code>app</code> directory.
        Each folder represents a level in the URL structure.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        What is Nested Routing?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        In Next.js, nested routing means organizing routes in a hierarchical
        folder structure where child routes live inside parent routes.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 ├── page.js                → /
 ├── dashboard/
 │   ├── page.js            → /dashboard
 │   ├── settings/
 │   │   └── page.js        → /dashboard/settings
 │   └── profile/
 │       └── page.js        → /dashboard/profile`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        How Nested Routing Works
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-4">
        Each nested folder adds a new segment to the URL.
        The page inside that folder becomes accessible at the corresponding path.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Real World Example
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Think of nested routing like folders on your computer.
      </p>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        A main folder contains subfolders, and each subfolder has its own path.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`Documents/
 ├── Work/
 │   ├── Reports/
 │   └── Invoices/`}
        </code>
      </pre>

      <p className="text-sm md:text-base text-gray-600 mb-4">
        Similarly, Next.js builds URLs based on nested folders.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Nested Routing with layout.js
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Nested routing works closely with nested layouts.
        A layout applies to all pages inside its folder.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/dashboard/layout.js   → Dashboard layout
app/dashboard/page.js     → Dashboard home
app/dashboard/settings/page.js`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why Nested Routing is Important
      </h2>

      <p className="text-sm md:text-base text-gray-600">
        Nested routing helps organize large applications,
        improves code readability,
        and allows you to reuse layouts efficiently.
      </p>
    </article>
  );
}
