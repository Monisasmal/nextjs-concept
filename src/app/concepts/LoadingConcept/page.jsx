export const metadata = {
  title: "loading.js in Next.js",
};

export default function LoadingConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold mb-3">
        loading.js in Next.js
      </h1>

      <p className="text-gray-600 mb-4">
        loading.js provides instant UI feedback while a route is loading.
      </p>

      {/* Definition */}
      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Definition
      </h2>
      <p className="text-gray-600 mb-4">
        loading.js is a special file that shows fallback UI while data or
        components are loading.
      </p>

      {/* Why */}
      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Why we use it
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Improves perceived performance</li>
        <li>Avoids blank screens</li>
        <li>Enhances user experience</li>
      </ul>

      {/* When */}
      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        When to use
      </h2>
      <p className="text-gray-600 mb-4">
        When pages fetch data or load heavy components.
      </p>

      {/* Code */}
      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Example Code
      </h2>
      <pre className="bg-slate-900 p-4 text-slate-100 mb-4 overflow-x-auto">
        <code>{`// app/dashboard/loading.js
export default function Loading() {
  return <p>Loading...</p>;
}`}</code>
      </pre>

      {/* Real world */}
      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Real-World Example
      </h2>
      <p className="text-gray-600 mb-4">
        An analytics dashboard shows a spinner while fetching reports.
      </p>

      {/* Interview */}
      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Interview Tip
      </h2>
      <p className="text-gray-600">
        loading.js provides built-in Suspense fallback UI for smoother page
        transitions.
      </p>

    </article>
  );
}