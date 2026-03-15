export const metadata = {
  title: "Dynamic Routing in Next.js",
  description:
    "Learn what dynamic routes are in Next.js, why they are used, and how to implement them with real-world examples.",
};

export default function DynamicRoutePage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Dynamic Routing in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Dynamic routing allows pages to be generated based on URL values.
        Instead of creating separate files for every page, Next.js uses
        dynamic folders to handle variable routes.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is a Dynamic Route?
      </h2>

      <p className="text-gray-600 mb-4">
        A dynamic route is a route that changes based on URL parameters.
        It is created using square brackets in the folder name.
      </p>

      {/* STRUCTURE */}
      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 └── blog/
     └── [slug]/
         └── page.jsx`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        The <code>[slug]</code> folder represents a dynamic value.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export default function BlogPage({ params }) {
  return <h1>Post: {params.slug}</h1>;
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        Visiting <code>/blog/react</code> gives:
        <br />
        <code>params.slug = react</code>
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use Dynamic Routing?
      </h2>

      <p className="text-gray-600 mb-4">
        It allows one page template to handle many URLs, making apps scalable
        and easier to maintain.
      </p>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        A blog website uses dynamic routes so every article loads from the
        same template using a unique slug.
      </p>

      <p className="text-gray-600 mb-4">
        Example URLs:
      </p>

      <ul className="text-gray-600 mb-6">
        <li>/blog/nextjs-routing</li>
        <li>/blog/react-hooks</li>
        <li>/blog/web-performance</li>
      </ul>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Dynamic routing in Next.js allows reusable page templates that adapt
        to URL parameters using bracket-based folders.
      </p>
    </article>
  );
}
