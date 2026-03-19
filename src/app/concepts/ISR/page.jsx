export const metadata = {
  title: "Incremental Static Regeneration (ISR) in Next.js",
  description:
    "Learn how ISR allows static pages to update automatically without rebuilding the entire site.",
};

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 10 }, // regenerate every 10 seconds
    }
  );

  return res.json();
}

export default async function ISRPage() {
  const posts = await getPosts();

  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Incremental Static Regeneration (ISR)
      </h1>

      <p className="mb-4 text-gray-600">
        ISR allows static pages to update automatically after deployment
        without rebuilding the entire site.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is ISR?
      </h2>

      <p className="text-gray-600 mb-4">
        ISR combines static generation with background updates. Pages are
        pre-built, but refreshed periodically when new requests arrive.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`fetch("API", {
  next: { revalidate: 10 }
});`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        The first request uses cached static content. After the revalidation
        time passes, Next.js regenerates the page in the background.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use ISR?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
    <li>Fast static performance</li>
    <li>Automatic content freshness</li>
    <li>No full rebuild needed</li>
    <li>Scales well</li>
    </ul>


      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        An e-commerce product page updates prices every few minutes without
        redeploying the site.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        ISR allows static pages to regenerate in the background after a set
        interval, combining performance with fresh data.
      </p>

      {/* Example output */}
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        {posts.slice(0, 3).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </article>
  );
}
