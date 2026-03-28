"use client";

import { useActionState } from "react";
import { fakeSubmit } from "./action";

export default function UseActionStateConcept() {
  const [state, formAction, pending] = useActionState(fakeSubmit, {
    message: "",
  });

  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        useActionState in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <strong>useActionState</strong> connects server actions with UI state.
        It helps handle form submissions, validation, and feedback cleanly.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is useActionState?
      </h2>

      <p className="text-gray-600 mb-4">
        It manages server action results and automatically updates the UI after submission.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`const [state, action, pending] =
useActionState(serverAction, initialState);`}</code>
      </pre>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li><strong>state</strong> → latest server result</li>
        <li><strong>action</strong> → form handler</li>
        <li><strong>pending</strong> → loading indicator</li>
      </ul>

      {/* EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example — Form with Server Feedback
      </h2>

      <form action={formAction} className="space-y-2 mb-6">
        <input
          name="name"
          placeholder="Enter name"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={pending}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {pending ? "Saving..." : "Submit"}
        </button>
      </form>

      {state.message && (
        <p className="text-gray-600 mb-6">{state.message}</p>
      )}

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use it?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Clean server form handling</li>
        <li>Automatic UI updates</li>
        <li>Validation feedback</li>
        <li>Built-in loading state</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        A signup form validates data on the server and instantly shows success
        or error messages.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        useActionState links server actions with client UI state, simplifying modern form handling.
      </p>

    </article>
  );
}
