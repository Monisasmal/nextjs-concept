export const metadata = {
  title: "Suspense in Next.js",
  description:
    "Understand how Suspense works in Next.js to handle loading states smoothly.",
};

import { Suspense } from "react";

async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function SuspensePage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Suspense in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Suspense allows parts of a page to load independently while showing a
        fallback UI during data fetching.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is Suspense?
      </h2>

      <p className="text-gray-600 mb-4">
        Suspense is a React feature used by Next.js to pause rendering of a
        component until data is ready, while displaying a loading indicator.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`<Suspense fallback={<p>Loading posts...</p>}>
  <Posts />
</Suspense>`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        While <code>Posts</code> fetches data, the fallback UI appears. Once
        ready, the real content replaces it.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use Suspense?
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Smoother loading experience</li>
        <li>Partial page rendering</li>
        <li>Better perceived performance</li>
        <li>Cleaner async UI handling</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        A dashboard loads charts and user data separately. Each section shows
        its own loading state instead of blocking the whole page.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Suspense allows components to wait for async data while showing a
        fallback UI, enabling progressive rendering.
      </p>
    </article>
  );
}
