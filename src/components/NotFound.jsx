import React from "react";
import { Link } from "react-router-dom";
// Icon imports
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-5 bg-[var(--primary-bg)]">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <div className="text-8xl font-bold text-[var(--accent-orange-color)]">
            404
          </div>
          <h1 className="text-3xl mb-4">Page Not Found</h1>
          <p className="mb-8 opacity-80">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-[var(--accent-orange-color)] text-white hover:bg-[var(--accent1-orange-color)] transition-colors duration-300"
        >
          <ChevronLeft size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
