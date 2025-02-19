import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load 404 page
const NotFound = lazy(() => import("./components/NotFound"));

// Loading spinner component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-[var(--accent-orange-color)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="app-background">
        <BrowserRouter basename="/react-portfolio">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/*" element={<Layout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
