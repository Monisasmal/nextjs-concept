export const metadata = {
  title: "generateStaticParams in Next.js",
  description:
    "Understand how generateStaticParams pre-builds dynamic routes for static rendering.",
};

async function getPosts() {
  return [
    { id: "1", title: "First post" },
    { id: "2", title: "Second post" },
  ];
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(post => ({
    id: post.id,
  }));
}

export default async function GenerateStaticParamsConcept() {
  const posts = await getPosts();

  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        generateStaticParams in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        <strong>generateStaticParams</strong> allows Next.js to pre-build
        dynamic routes at build time instead of generating them on demand.
      </p>

      {/* WHAT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What is generateStaticParams?
      </h2>

      <p className="text-gray-600 mb-4">
        It tells Next.js which dynamic route values should be statically
        generated ahead of time.
      </p>

      {/* HOW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        How does it work?
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}`}
        </code>
      </pre>

      <p className="text-gray-600 mb-6">
        During build, Next.js creates static pages for each parameter.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why use it?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Faster page loading</li>
        <li>SEO-friendly static pages</li>
        <li>No runtime generation needed</li>
        <li>Better scalability</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        A blog site pre-builds pages for known articles so visitors see
        instant loading without server delay.
      </p>

      {/* SAMPLE OUTPUT */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example Data
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        generateStaticParams pre-builds dynamic routes during deployment,
        enabling static rendering and faster performance.
      </p>

    </article>
  );
}
