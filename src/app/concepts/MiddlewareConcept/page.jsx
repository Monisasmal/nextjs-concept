export const metadata = {
  title: "Middleware in Next.js",
  description: "Understand how Middleware works before route execution.",
};

export default function MiddlewareConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Middleware in Next.js
      </h1>

      <p className="text-gray-600 mb-4">
        Middleware runs before a request reaches a route. It allows you to
        control, redirect, or block requests globally.
      </p>

      {/* Definition */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Definition
      </h2>

      <p className="text-gray-600 mb-6">
        Middleware is a special function that executes before a page or API
        route loads. It intercepts incoming requests and decides whether to
        allow, modify, or redirect them.
      </p>

      {/* Why */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why We Use Middleware
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Protect private routes</li>
        <li>Handle authentication checks</li>
        <li>Redirect users based on conditions</li>
        <li>Apply global request logic</li>
        <li>Improve security</li>
      </ul>

      {/* When */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        When To Use Middleware
      </h2>

      <p className="text-gray-600 mb-6">
        Use Middleware when logic must run before every request or before
        specific routes load, such as checking login status or redirecting
        users.
      </p>

      {/* How it Works */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How It Works
      </h2>

      <p className="text-gray-600 mb-4">
        Request Flow:
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`User → Middleware → Route/Page`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        Middleware runs first. Based on conditions, it either:
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Allows request (NextResponse.next())</li>
        <li>Redirects request</li>
        <li>Rewrites request</li>
      </ul>

      {/* Example Code */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example Code
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        If the user is not logged in, they are redirected to the login page.
      </p>

      {/* Real World */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        In an admin dashboard, Middleware checks if a user has admin access
        before allowing entry to /admin. If not, the user is redirected to
        /login or /unauthorized.
      </p>

      {/* Interview Tip */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Middleware in Next.js runs before a request reaches a route and is
        commonly used for authentication, redirects, and global request
        handling.
      </p>

    </article>
  );
}