export const metadata = {
  title: "Image Component in Next.js",
  description:
    "Understand why Next.js provides the Image component, how it optimizes images, and when to use it with real-world examples.",
};

import Image from "next/image";

export default function ImageComponentPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Image Component in Next.js
      </h1>

      <p className="mb-4 text-gray-600">
        The <code>Image</code> component in Next.js is used to automatically
        optimize images for better performance, faster loading, and improved
        user experience.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Why Not Use Normal &lt;img&gt; Tag?
      </h2>

      <p className="text-gray-600 mb-4">
        Using a normal <code>&lt;img&gt;</code> tag loads the full image size
        every time, which can slow down the page and negatively affect SEO and
        performance.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Basic Comparison
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`// ❌ Normal image
<img src="/banner.png" alt="banner" />

// ✅ Next.js Image
<Image src="/banner.png" alt="banner" width={600} height={400} />`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        What Problems Does Image Component Solve?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Automatically resizes images</li>
        <li>Lazy loads images by default</li>
        <li>Prevents layout shift</li>
        <li>Serves images in modern formats (WebP)</li>
        <li>Improves Core Web Vitals</li>
      </ul>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Real-World Example
      </h2>

      <p className="text-gray-600 mb-4">
        Imagine an e-commerce website showing product images.  
        Loading full-size images for every product would slow down the site.
        Next.js automatically serves optimized images based on device size.
      </p>

      <p className="text-gray-600 mb-4">
        Mobile users get smaller images, desktop users get higher resolution
        images — without extra effort from the developer.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        Example Usage
      </h2>

      <pre className="rounded-lg bg-slate-900 p-4 text-slate-100 mb-6 overflow-x-auto">
        <code>
{`<Image
  src="/profile.jpg"
  alt="Profile Image"
  width={200}
  height={200}
  className="rounded-full"
/>`}
        </code>
      </pre>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-3">
        SEO & Performance Benefits
      </h2>

      <p className="text-gray-600 mb-4">
        Faster image loading improves user experience and reduces bounce rate,
        which directly helps SEO rankings.
      </p>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-2">
        When Should You Use It?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Product images</li>
        <li>Profile pictures</li>
        <li>Blog thumbnails</li>
        <li>Landing page banners</li>
      </ul>

      <h2 className="text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-2">
        Interview Tip
      </h2>

      <p className="text-gray-600">
        The Next.js Image component optimizes images automatically for better
        performance, SEO, and user experience.
      </p>

      <h2 className="mt-4 text-2xl text-blue-600 border-l-4 border-blue-600 pl-4 mb-2">
        Summary
      </h2>

      <ul className="list-disc pl-6 text-gray-600">
        <li><code>width</code> & <code>height</code> prevent layout shift</li>
        <li><code>fill</code> fills the parent container. It is commonly used for banners, backgrounds, and hero sections.</li>
        <li><code>priority</code> loads images early. It should be used for images that appear above the fold.</li>
        <li><code>loading</code> controls lazy loading</li>
        <li><code>sizes</code> optimizes responsive images</li>
        <li><code>alt</code> improves SEO and accessibility</li>
      </ul>
    </article>
  );
}
