import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="border-b px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold tracking-wide">
          DailyPress
        </h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/world">World</Link>
          <Link href="/politics">Politics</Link>
          <Link href="/sports">Sports</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 text-center">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Error 404
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
            This page didn’t make the front page
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            The article you’re looking for may have been moved, deleted, or
            never existed. Let’s get you back to the latest headlines.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              Go to Homepage
            </Link>

            <Link
              href="/latest"
              className="px-6 py-3 border rounded-md text-sm font-medium hover:bg-gray-100 transition"
            >
              View Latest News
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} DailyPress. All rights reserved.
      </footer>
    </div>
  );
}
