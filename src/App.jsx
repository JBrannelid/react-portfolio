import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import { NavigationProvider } from "./context/NavigationContext";

// Lazy load 404 page
const NotFound = lazy(() => import("./components/NotFound"));

// Loading spinner component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <NavigationProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main route for all portfolio sections */}
              <Route path="/*" element={<Layout />} />
              {/* Catch-all route for 404 errors */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </NavigationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
