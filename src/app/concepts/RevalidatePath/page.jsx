export const metadata = {
  title: "revalidatePath() in Next.js",
  description:
    "Understand how revalidatePath refreshes cached data and pages in Next.js.",
};

import { revalidatePath } from "next/cache";

export default function RevalidatePathConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        revalidatePath() in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <strong>revalidatePath()</strong> is a cache control function in that forces a page to refresh its server data
        instead of using stale cached content.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is revalidatePath()?
      </h2>

      <p className="text-gray-600 mb-4">
        It tells Next.js to invalidate cached data for a specific route so the
        next visit fetches fresh data from the server.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`import { revalidatePath } from "next/cache";

revalidatePath("/dashboard");`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        The specified route cache is cleared, forcing fresh server rendering
        on the next request.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use revalidatePath()?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Update UI after database changes</li>
        <li>Refresh dashboard content</li>
        <li>Keep cached pages accurate</li>
        <li>Improve performance with smart caching</li>
      </ul>

      {/* EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example — Refresh After Save
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`async function saveData() {
  "use server";

  await updateDatabase();
  revalidatePath("/dashboard");
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        After saving data, the dashboard cache refreshes automatically.
      </p>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        When a user updates their profile, the profile page refreshes to show
        the latest information instead of cached data.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        revalidatePath() invalidates cached routes so Next.js fetches fresh
        server data, ensuring UI accuracy after updates.
      </p>

    </article>
  );
}
