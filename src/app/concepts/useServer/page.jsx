export const metadata = {
  title: '"use server" in Next.js',
  description:
    'Understand how server actions work using the "use server" directive in Next.js.',
};

async function fakeSave(data) {
  return `Saved: ${data}`;
}

export default function UseServerConcept() {
  async function saveAction(formData) {
    "use server";

    const result = await fakeSave(formData.get("name"));
    console.log(result);
  }

  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        &quot;use server&quot; in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <strong>&quot;use server&quot;</strong> tells Next.js that a function should run
        only on the server, not in the browser. It enables secure server
        actions like database writes or API calls.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is &quot;use server&quot;?
      </h2>

      <p className="text-gray-600 mb-4">
        It marks a function as a server action so sensitive logic runs safely
        on the backend.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`async function action(formData) {
  "use server";
  // server-only logic
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        The function executes on the server even when triggered from the UI.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use it?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Secure database operations</li>
        <li>Server-side API calls</li>
        <li>Authentication logic</li>
        <li>Performance optimization</li>
      </ul>

      {/* FORM EXAMPLE */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example — Server Form Action
      </h2>

      <form action={saveAction} className="space-y-2 mb-6">
        <input
          name="name"
          placeholder="Enter name"
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <p className="text-gray-600 mb-6">
        The form submits directly to a server action without exposing logic
        to the browser.
      </p>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        Submitting an order saves data securely on the server without exposing
        database credentials to the client.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        &quot;use server&quot; marks a function to execute only on the server,
        enabling secure server-side actions triggered from UI interactions.
      </p>

    </article>
  );
}
