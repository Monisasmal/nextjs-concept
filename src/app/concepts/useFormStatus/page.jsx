"use client";

import { useFormStatus } from "react-dom";
import { submitForm } from "./action";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function UseFormStatusConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        useFormStatus in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <strong>useFormStatus</strong> is a React hook that tracks the status
        of a server form submission. It lets you show loading states without
        manual state management.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is useFormStatus?
      </h2>

      <p className="text-gray-600 mb-4">
        It tells your UI when a form is being submitted to a server action.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`const { pending } = useFormStatus();`}</code>
      </pre>

      <p className="text-gray-600 mb-6">
        The <strong>pending</strong> state becomes true while the server
        action is running.
      </p>

      {/* EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example — Loading Button
      </h2>

      <form action={submitForm} className="space-y-2 mb-6">
        <input
          name="name"
          placeholder="Enter name"
          className="border p-2 rounded"
        />

        <SubmitButton />
      </form>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use it?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Automatic loading indicators</li>
        <li>No manual state tracking</li>
        <li>Cleaner server form UX</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        A checkout form disables the submit button while payment is processing.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        useFormStatus provides real-time form submission status for server
        actions, improving UX without extra state logic.
      </p>

    </article>
  );
}
