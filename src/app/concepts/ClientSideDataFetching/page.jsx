export const metadata = {
  title: "Client-Side Data Fetching in Next.js",
  description:
    "Learn how client-side data fetching works in Next.js with practical examples.",
};

export default function ClientDataFetchingPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Client-Side Data Fetching in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Client-side data fetching happens inside the browser after the page
        loads. It is used when data is dynamic or user-driven.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is Client-Side Data Fetching?
      </h2>

      <p className="text-gray-600 mb-4">
        A Client Component fetches data using browser-side tools like
        <code>useEffect</code>. The UI updates after the data arrives.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        The browser loads the page first, then fetches data and updates the UI.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use Client-Side Data Fetching?
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Interactive dashboards</li>
        <li>User-triggered updates</li>
        <li>Live or frequently changing data</li>
        <li>Form-based fetching</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        A social media feed loads additional posts after login or when a user
        clicks “Load More”.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Client-side data fetching runs in the browser after rendering, ideal
        for interactive or user-driven data updates.
      </p>
    </article>
  );
}
