export const metadata = {
  title: "Hydration in Next.js",
};

export default function HydrationConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold mb-3">
        Hydration in Next.js
      </h1>

      <p className="text-gray-600 mb-4">
        Hydration connects server-rendered HTML with client-side JavaScript.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Definition
      </h2>
      <p className="text-gray-600 mb-6">
        Hydration is the process where React attaches event listeners to
        server-rendered HTML to make it interactive in the browser.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Why We Use Hydration
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Enable interactivity</li>
        <li>Improve SEO with server rendering</li>
        <li>Faster first page load</li>
      </ul>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        When To Use
      </h2>
      <p className="text-gray-600 mb-6">
        Automatically happens when using Client Components in Next.js.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        How It Works
      </h2>

      <pre className="bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>{`Server → Sends HTML → Browser loads JS → React hydrates → Interactive UI`}</code>
      </pre>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Real-World Example
      </h2>
      <p className="text-gray-600 mb-6">
        A blog page loads instantly from server HTML, then like buttons
        become clickable after hydration.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Interview Tip
      </h2>
      <p className="text-gray-600">
        Hydration makes server-rendered HTML interactive by attaching
        React event listeners in the browser.
      </p>

    </article>
  );
}