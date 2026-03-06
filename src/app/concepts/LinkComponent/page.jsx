export const metadata = {
  title: "Link Component in Next.js",
  description:
    "Understand how the Link component works in Next.js with real-world examples",
};

export default function LinkComponentConcept() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Link Component in Next.js
      </h1>

      <p className="mb-3 text-gray-600">
        The <code>Link</code> component in Next.js is used for client-side
        navigation between pages. It improves performance by avoiding
        full page reloads.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        What is the Link Component?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        <code>Link</code> is a built-in Next.js component that enables fast,
        seamless navigation between routes created using the App Router.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`import Link from "next/link";

<Link href="/about">Go to About</Link>`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Why Use Link Instead of &lt;a&gt;?
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Unlike a normal <code>&lt;a&gt;</code> tag, the <code>Link</code> component
        performs client-side navigation, making transitions faster.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`<!-- Normal anchor -->
<a href="/about">About</a>

<!-- Next.js Link -->
<Link href="/about">About</Link>`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        How Link Works Internally
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        Next.js prefetches the linked page in the background when the link
        appears in the viewport. This makes navigation almost instant.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Real World Example
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        In an e-commerce site, clicking a product link loads the product page
        instantly without reloading the entire website.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`<Link href="/products/123">
  View Product
</Link>`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Important Props of Link
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-3">
        The <code>href</code> prop defines the destination route.
        Additional props like <code>replace</code> and <code>scroll</code>
        control navigation behavior.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">
        Interview Tip
      </h2>

      <p className="text-sm md:text-base text-gray-600">
        Always use <code>Link</code> for internal navigation in Next.js
        to get better performance and prefetching.
      </p>
    </article>
  );
}
