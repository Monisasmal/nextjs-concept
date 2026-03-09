export const metadata = {
  title: "Fonts, SEO, Metadata & Favicon in Next.js",
  description:
    "Understand how fonts, SEO, metadata, and favicon work in Next.js and why they are important for production apps.",
};

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SeoAndFontsPage() {
  return (
    <article className={`prose prose-slate max-w-none ${inter.className}`}>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Fonts, SEO, Metadata & Favicon in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        Next.js provides built-in features for font optimization, SEO,
        metadata management, and favicon handling to help build fast,
        accessible, and search-engine-friendly applications.
      </p>

      {/* FONT SIZE & FONTS */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Font Size & Fonts in Next.js
      </h2>

      <p className="text-gray-600 mb-4">
        Font size controls readability and user experience. In Next.js,
        fonts are optimized using the <code>next/font</code> module, which
        eliminates layout shift and improves performance.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

<body className={inter.className}>`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        Tailwind font sizes like <code>text-sm</code>, <code>text-base</code>,
        and <code>text-lg</code> help maintain consistency across devices.
      </p>

      {/* SEO */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        SEO in Next.js
      </h2>

      <p className="text-gray-600 mb-4">
        SEO (Search Engine Optimization) helps your website appear in search
        results. Next.js improves SEO by default using server rendering and
        static generation.
      </p>

      <p className="text-gray-600 mb-4">
        Faster pages, optimized images, and clean HTML output directly
        improve SEO rankings.
      </p>

      {/* METADATA */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Metadata in Next.js
      </h2>

      <p className="text-gray-600 mb-4">
        Metadata defines information about a page, such as title and
        description. Next.js allows defining metadata per page using the
        <code> metadata</code> export.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`export const metadata = {
  title: "Routing in Next.js",
  description: "Learn routing with examples",
};`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        This improves search visibility and controls how pages appear in
        Google results and social media previews.
      </p>

      {/* FAVICON */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Favicon in Next.js
      </h2>

      <p className="text-gray-600 mb-4">
        A favicon is the small icon shown in browser tabs. It helps users
        recognize your site quickly.
      </p>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`app/
 └── favicon.ico`}
        </code>
      </pre>

      <p className="text-gray-600 mb-4">
        Next.js automatically detects the favicon when placed in the
        <code> app</code> directory.
      </p>

      {/* REAL WORLD */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        A documentation website uses readable fonts, correct font sizes,
        proper metadata for SEO, and a favicon for brand identity.
        Together, these create a professional user experience.
      </p>

      {/* INTERVIEW TIP */}
      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        Fonts improve UX, metadata improves SEO, and favicon improves brand
        recognition — all are essential for production-ready Next.js apps.
      </p>
    </article>
  );
}
