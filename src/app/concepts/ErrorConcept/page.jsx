export const metadata = { title: "error.js in Next.js" };

export default function ErrorConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-3xl font-bold mb-3">Error.js</h1>

      <p className="text-gray-600 mb-4">
        error.js handles runtime failures inside routes.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Definition
      </h2>
      <p className="text-gray-600 mb-4">
        error.js is a route-level error boundary.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Why we use it
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Prevents app crash</li>
        <li>Graceful error recovery</li>
      </ul>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        When to use
      </h2>
      <p className="text-gray-600 mb-4">
        Whenever routes fetch critical data.
      </p>

      <pre className="bg-slate-900 p-4 text-slate-100 mb-4 overflow-x-auto">
        <code>{`"use client";

export default function Error({ error, reset }) {
  return <button onClick={reset}>Retry</button>;
}`}</code>
      </pre>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Real-World Example
      </h2>
      <p className="text-gray-600 mb-4">
        Payment failure screen with retry option.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Interview Tip
      </h2>
      <p className="text-gray-600">
        error.js isolates route failures without crashing the app.
      </p>

    </article>
  );
}