export const metadata = {
  title: "What is Next.js – Complete Guide",
  description:
    "Learn what Next.js is, why and when to use it, its advantages, disadvantages, and who invented it.",
};

export default function NextJSConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        What is Next.js?
      </h1>

      <p className="mb-4 text-gray-600">
        Next.js is a full-stack React framework that helps developers build
        fast, SEO-friendly, and production-ready web applications.
        It provides built-in features like routing, server-side rendering,
        static site generation, API routes, and performance optimization.
      </p>

      {/* WHO INVENTED */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Who Invented Next.js?
      </h2>

      <p className="text-gray-600 mb-6">
        Next.js was created by Vercel (previously called Zeit) in 2016.
        It was developed to solve performance and SEO problems found in
        traditional React single-page applications.
      </p>

      {/* WHY */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why We Use Next.js?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Improves SEO with server-side rendering</li>
        <li>Faster initial page load</li>
        <li>Built-in file-based routing</li>
        <li>Backend and frontend in one project</li>
        <li>Automatic code splitting</li>
        <li>Image optimization</li>
        <li>Streaming and caching support</li>
      </ul>

      {/* WHEN */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        When Should We Use Next.js?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>When SEO is important (blog, news, e-commerce)</li>
        <li>When fast performance is required</li>
        <li>When building scalable production apps</li>
        <li>When both frontend and backend are needed together</li>
        <li>When server-side rendering is required</li>
      </ul>

      {/* MERITS */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Merits (Advantages)
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>SEO friendly</li>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>File-based routing</li>
        <li>Built-in API routes</li>
        <li>Image optimization</li>
        <li>Automatic performance optimization</li>
        <li>Middleware support</li>
        <li>Streaming support</li>
      </ul>

      {/* DEMERITS */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Demerits (Disadvantages)
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>More complex than plain React</li>
        <li>Learning curve for beginners</li>
        <li>Build time may increase in large projects</li>
        <li>Overkill for small simple apps</li>
        <li>Requires proper understanding of server vs client components</li>
      </ul>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-6">
        An e-commerce website uses Next.js to load product pages quickly,
        improve SEO rankings, and handle dynamic data like pricing,
        reviews, and cart updates efficiently.
      </p>

      {/* INTERVIEW */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Next.js is a React framework created by Vercel that provides
        server-side rendering, static site generation, and built-in routing
        to build fast, SEO-friendly web applications.
      </p>

    </article>
  );
}