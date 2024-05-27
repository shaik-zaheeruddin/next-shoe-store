import { useEffect } from 'react';
import Link from 'next/link';

export default function ContentMissing() {
  useEffect(() => {
    document.title = 'Page Not Available';
  }, []);

  return (
    <div className="flex h-screen flex-col bg-white">
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We're currently working on this page.
          </h1>

          <p className="mt-4 text-gray-500">
            We'll be right back when it's done.
          </p>

          <Link href="/">
            <span className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring">
              Go Back Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
