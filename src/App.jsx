import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, memo } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load 404 page
const NotFound = lazy(() => import("./components/NotFound"));

// Memoize the Layout component
const MemoizedLayout = memo(Layout);

// Loading spinner component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-[var(--accent-orange-color)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="app-root min-h-screen bg-[var(--primary-bg)] transition-colors duration-300">
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/*" element={<MemoizedLayout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
