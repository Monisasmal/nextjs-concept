export const metadata = {
  title: "redirect() in Next.js",
  description:
    "Understand how redirect() works in Next.js for server-side navigation and route protection.",
};

import { redirect } from "next/navigation";

export default function RedirectConcept() {
//   const isLoggedIn = false;

//   if (!isLoggedIn) {
//     redirect("/login");
//   }

  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        redirect() in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <strong>redirect()</strong> is a server-side navigation function in
        that instantly sends users to another route
        before rendering the page.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is redirect()?
      </h2>

      <p className="text-gray-600 mb-4">
        It stops the current rendering process and immediately navigates the
        user to a different page.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`import { redirect } from "next/navigation";

redirect("/login");`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        When called, rendering stops and the user is instantly redirected.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use redirect()?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Protect private routes</li>
        <li>Handle authentication checks</li>
        <li>Redirect invalid users</li>
        <li>Control navigation flow</li>
      </ul>

      {/* EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example — Protected Page
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`if (!isLoggedIn) {
  redirect("/login");
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        If the user is not logged in, they are immediately sent to the login page.
      </p>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        An expired session automatically redirects users to login instead of
        showing broken or restricted content.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        redirect() is a server-side navigation tool used to instantly reroute
        users, commonly for authentication and protected routes.
      </p>

    </article>
  );
}
