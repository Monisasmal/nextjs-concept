// export const metadata = {
//   title: "useRouter() in Next.js",
//   description:
//     "Understand how useRouter enables client-side navigation and routing control in Next.js.",
// };

"use client";

import { useRouter } from "next/navigation";

export default function UseRouterConcept() {
  const router = useRouter();

  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        useRouter() in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <strong>useRouter()</strong> is a client navigation hook in Next.js
that lets you control routing programmatically without page reloads.

      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is useRouter()?
      </h2>

      <p className="text-gray-600 mb-4">
        It gives you navigation control inside client components — letting you
        move between pages based on logic instead of only clicking links.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`const router = useRouter();

router.push("/");`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        Router methods instantly change routes without a full browser reload.
      </p>

      {/* METHODS */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Router Methods
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li><strong>push()</strong> → Navigate to a new page</li>
        <li><strong>replace()</strong> → Replace current history entry</li>
        <li><strong>back()</strong> → Go to previous page</li>
        <li><strong>forward()</strong> → Move forward in history</li>
        <li><strong>refresh()</strong> → Reload server data</li>
      </ul>

      {/* EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example — Button Navigation
      </h2>

      <button
        onClick={() => router.push("/dashboard")}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Go to Dashboard
      </button>

      <p className="text-gray-600 mb-6">
        Clicking the button navigates instantly without reloading the page.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use useRouter()?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Navigation after form submission</li>
        <li>Authentication redirects</li>
        <li>Dynamic UI navigation</li>
        <li>Smooth SPA experience</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        After login, users are automatically sent to their dashboard without
        refreshing the browser.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        useRouter enables programmatic client navigation and history control,
        allowing smooth route changes without full reloads.
      </p>

      {/* EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example — Navigation Buttons
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">

        <button
          onClick={() => router.push("/dashboard")}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Push
        </button>

        <button
          onClick={() => router.replace("/")}
          className="bg-gray-700 text-white px-3 py-2 rounded"
        >
          Replace
        </button>

        <button
          onClick={() => router.back()}
          className="bg-gray-600 text-white px-3 py-2 rounded"
        >
          Back
        </button>

        <button
          onClick={() => router.forward()}
          className="bg-gray-600 text-white px-3 py-2 rounded"
        >
          Forward
        </button>

        <button
          onClick={() => router.refresh()}
          className="bg-green-600 text-white px-3 py-2 rounded"
        >
          Refresh
        </button>

      </div>

      <p className="text-gray-600 mb-6">
        Each button controls navigation without a full page reload.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use router methods?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Dynamic navigation after actions</li>
        <li>History control</li>
        <li>Refresh server data</li>
        <li>Smooth SPA experience</li>
      </ul>


    </article>
  );
}
