import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export const metadata = {
  title: "Next.js Complete Guide",
  description: "Learn Next.js concepts with real-world examples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* HEADER */}
        <header className="bg-white shadow sticky top-0 z-50 border-gray-300 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
            <h1 className="font-bold text-xl">Next.js Guide</h1>
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/concepts">Concepts</Link>
              <Link href="/projects">Projects</Link>
            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t mt-16 py-6  border-gray-300 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Left */}
        <p className="text-gray-600 text-sm">
          © 2026 React Mastery Guide. All rights reserved.
        </p>

        {/* Center Icons */}
        <div className="flex gap-6 text-xl text-gray-600">

          <a
            href="https://github.com/Monisasmal"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manaswini-sasmal-b77a21162/"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://manaswini-portfolio.vercel.app/"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaGlobe />
          </a>

        </div>

        {/* Right */}
        <p className="text-gray-600 text-sm">
          Built with ❤️ by Manaswini
        </p>

      </div>
    </footer>
      </body>
    </html>
  );
}
