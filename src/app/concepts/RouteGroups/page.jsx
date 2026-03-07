export const metadata = {
  title: "Route Groups in Next.js",
  description:
    "Understand what route groups are in Next.js and how they help organize routes",
};

export default function RouteGroupsConcept() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Route Groups in Next.js
      </h1>

      <p className="mb-3 text-gray-600">
        Route Groups allow you to organize routes in the <code>app</code>{" "}
        directory without affecting the URL structure.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        What is a Route Group?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        A route group is a folder wrapped in parentheses. The folder name is
        ignored in the URL path but used for structuring files.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 ├── (auth)/
 │   ├── login/
 │   │   └── page.js   → /login
 │   └── register/
 │       └── page.js   → /register`}
        </code>
      </pre>

      <p className="text-sm md:text-base text-gray-600 mb-4">
        Even though <code>(auth)</code> exists in the folder structure, it does
        not appear in the browser URL.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why Use Route Groups?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Route groups help you organize related routes without creating unwanted
        URL segments.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Real World Example
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Think of route groups like folders in your computer used only for
        organization.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`Desktop/
 ├── Work/
 └── Personal/`}
        </code>
      </pre>

      <p className="text-sm md:text-base text-gray-600 mb-4">
        The folder helps you stay organized but does not affect the file path.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Route Groups with Layouts
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Route groups are often used with layouts to apply different layouts
        to different sections of an app.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 ├── (auth)/
 │   ├── layout.js     → Auth layout
 │   ├── login/
 │   │   └── page.js
 │   └── register/
 │       └── page.js
 ├── (main)/
 │   ├── layout.js     → Main layout
 │   └── page.js`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why Route Groups Are Important
      </h2>

      <p className="text-sm md:text-base text-gray-600">
        Route groups improve project structure, allow layout separation,
        and keep URLs clean and user-friendly.
      </p>
    </article>
  );
}
