export const metadata = {
  title: "Next.js Concepts & Projects",
  description:
    "Learn Next.js concepts with clear explanations, real-world examples, and practical projects.",
};

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Learn Next.js the Right Way
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Clear explanations of core concepts, real-world examples, and
          production-ready projects to help you master Next.js.
        </p>

        
      </section>

      {/* Why this site */}
      <section className="grid gap-8 md:grid-cols-3 mb-20">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Clear Concepts
          </h3>
          <p className="text-sm text-gray-600">
            Each topic is explained step by step with simple language and real
            use cases.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Real Examples
          </h3>
          <p className="text-sm text-gray-600">
            Learn how Next.js features are used in real applications, not just
            theory.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Practical Projects
          </h3>
          <p className="text-sm text-gray-600">
            See complete projects with routing, SEO, performance, and best
            practices.
          </p>
        </div>
      </section>

      {/* Learning path */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Structured Learning Path
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Start with fundamentals, move to advanced routing and rendering, and
          finish with production-level projects.
        </p>

        <Link
          href="/concepts"
          className="text-blue-600 font-medium hover:underline"
        >
          Start learning →
        </Link>
      </section>
    </main>
  );
}
