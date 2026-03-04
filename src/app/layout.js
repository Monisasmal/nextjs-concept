import "./globals.css";
import Link from "next/link";

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
        <footer className="text-center text-sm py-6 text-gray-500">
          © 2026 Next.js Guide by MANASWINI
        </footer>
      </body>
    </html>
  );
}
