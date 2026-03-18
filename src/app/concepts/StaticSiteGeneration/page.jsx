export const metadata = {
  title: "Static Site Generation (SSG) in Next.js",
  description:
    "Learn what Static Site Generation is, how it works, and why it improves performance.",
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function SSGPage() {
  const posts = await getPosts();

  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Static Site Generation (SSG) in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Static Site Generation builds pages at build time — before any user
        visits the website.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is SSG?
      </h2>

      <p className="text-gray-600 mb-4">
        SSG pre-renders pages into static HTML during deployment. These files
        are served instantly when users request them.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export default async function Page() {
  const data = await fetch("API", { cache: "force-cache" });
  return <div>{data.title}</div>;
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        The page is generated once during build and reused for every visitor.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use SSG?
      </h2>

      <ul className="text-gray-600 mb-6">
        <li>Extremely fast loading</li>
        <li>SEO friendly</li>
        <li>Low server cost</li>
        <li>Great scalability</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        Blog posts, documentation pages, and landing pages that rarely change
        are perfect candidates for SSG.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        SSG generates pages at build time and serves static HTML for maximum
        performance and SEO.
      </p>

      {/* Example Output */}
      <ul className="text-gray-600">
        {posts.slice(0, 3).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </article>
  );
}
