export const metadata = {
  title: "Build vs Runtime in Next.js",
};

export default function BuildRuntimeConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl font-bold mb-3">
        Build vs Runtime
      </h1>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Definition
      </h2>

      <p className="text-gray-600 mb-6">
        Build time is when Next.js generates static pages before deployment.
        Runtime is when pages render dynamically during user requests.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Why Important
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Performance optimization</li>
        <li>Choose correct rendering strategy</li>
      </ul>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        When It Happens
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Build → During deployment</li>
        <li>Runtime → During user request</li>
      </ul>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        Blog posts generated at build time,
        dashboard data rendered at runtime.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Build time improves speed via static pages,
        runtime enables dynamic content.
      </p>

    </article>
  );
}