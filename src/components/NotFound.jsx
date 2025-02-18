import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-5">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <div className="text-[8rem] font-bold bg-gradient-to-r from-[var(--accent-orange-color)] to-[var(--accent1-orange-color)] bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-3xl mb-4">Page Not Found</h1>
          <p className="mb-8 opacity-80">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec8b2a_0%,#ffd621_50%,#ec8b2a_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-orange-500/70 to-yellow-600/70 px-6 text-sm backdrop-blur-3xl transition-all duration-300 hover:bg-amber-600 gap-2">
            <FontAwesomeIcon icon="chevron-left" />
            Back to Home
          </span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
