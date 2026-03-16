export const metadata = {
  title: "Server-Side Data Fetching in Next.js",
  description:
    "Understand how server-side data fetching works in Next.js with real-world examples.",
};

export default function ServerDataFetchingPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Server-Side Data Fetching in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Server-side data fetching means retrieving data on the server before
        sending the page to the browser.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is Server-Side Data Fetching?
      </h2>

      <p className="text-gray-600 mb-4">
        In Next.js, Server Components can fetch data directly using async
        functions. The server prepares the content before the user sees it.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function Page() {
  const users = await getUsers();

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
        The data is fetched on the server, rendered into HTML, and sent to
        the browser — faster and SEO-friendly.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use Server-Side Data Fetching?
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Better SEO</li>
        <li>Faster initial page load</li>
        <li>Secure data handling</li>
        <li>No client loading state needed</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        An e-commerce site loads product data on the server so users see
        ready-to-view products immediately without waiting for browser fetches.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Server-side data fetching allows Next.js to fetch and render data on
        the server before sending HTML to the browser, improving performance
        and SEO.
      </p>
    </article>
  );
}
