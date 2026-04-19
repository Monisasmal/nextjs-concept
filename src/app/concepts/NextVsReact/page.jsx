export const metadata = {
  title: "Benefits of Next.js",
};

export default function BenefitsConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl font-bold mb-3">
        Benefits of Using Next.js
      </h1>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Definition
      </h2>
      <p className="text-gray-600 mb-6">
        Next.js is a full-stack React framework with built-in routing,
        server rendering, and optimization.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Why Choose Next.js Over React
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Built-in routing</li>
        <li>Server-side rendering</li>
        <li>Static generation</li>
        <li>Better SEO</li>
        <li>API routes</li>
      </ul>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        Blog website needing SEO ranking uses Next.js
        instead of plain React SPA.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Next.js extends React by adding routing,
        SSR, SSG, and backend capabilities.
      </p>

    </article>
  );
}