export const metadata = {
  title: "Revalidation vs On-Demand Revalidation in Next.js",
  description:
    "Learn the difference between automatic revalidation and on-demand revalidation in Next.js caching.",
};

import { revalidatePath } from "next/cache";

export default function RevalidationConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Revalidation vs On-Demand Revalidation
      </h1>

      <p className="mb-4 text-gray-600">
        In <strong>revalidation</strong>,  controls when cached pages
        refresh. It ensures users see updated data without losing performance.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is Revalidation?
      </h2>

      <p className="text-gray-600 mb-4">
        Revalidation automatically refreshes cached data after a fixed time.
        Next.js rebuilds the page in the background when the cache expires.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export const revalidate = 60; // refresh every 60 seconds`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        After 60 seconds, the next visitor triggers a fresh server render.
      </p>

      {/* ON DEMAND */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is On-Demand Revalidation?
      </h2>

      <p className="text-gray-600 mb-4">
        On-demand revalidation refreshes cache manually when data changes —
        instead of waiting for a timer.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`async function updateData() {
  "use server";

  await saveChanges();
  revalidatePath("/dashboard");
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        The cache clears instantly after the update.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use them?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Keep cached pages updated</li>
        <li>Improve performance</li>
        <li>Avoid stale UI</li>
        <li>Control refresh timing</li>
      </ul>

      {/* DIFFERENCE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Key Difference
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li><strong>Revalidation</strong> → automatic timed refresh</li>
        <li><strong>On-demand</strong> → manual refresh when data changes</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        A news site updates articles every minute automatically, while an admin
        dashboard refreshes immediately after publishing new content.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Revalidation refreshes cached content automatically by time, while
        on-demand revalidation manually invalidates cache after data updates.
      </p>

    </article>
  );
}
