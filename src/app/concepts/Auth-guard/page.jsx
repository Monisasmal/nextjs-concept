export const metadata = {
  title: "Auth Guard in Next.js",
};

export default function AuthGuardConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl font-bold mb-3">
        Auth Guard in Next.js
      </h1>

      <p className="text-gray-600 mb-4">
        Auth Guard protects routes from unauthorized access.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Definition
      </h2>
      <p className="text-gray-600 mb-6">
        Auth Guard is a logic pattern used to restrict access
        to certain pages based on authentication.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Why We Use
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Protect private pages</li>
        <li>Secure admin routes</li>
      </ul>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        When To Use
      </h2>
      <p className="text-gray-600 mb-6">
        When only logged-in users should access a route.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Example Code
      </h2>

      <pre className="bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`import { redirect } from "next/navigation";

export default function Dashboard({ user }) {
  if (!user) {
    redirect("/login");
  }

  return <h1>Welcome</h1>;
}`}</code>
      </pre>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Real-World Example
      </h2>
      <p className="text-gray-600 mb-6">
        Banking dashboard accessible only after login.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Interview Tip
      </h2>
      <p className="text-gray-600">
        Auth Guard restricts route access using conditional redirect logic.
      </p>

    </article>
  );
}