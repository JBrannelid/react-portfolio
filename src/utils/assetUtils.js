// Returns the correct path for assets based on environment and URL
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Check if we're in development but accessing via the production path
  const isDevelopmentWithProductionPath =
    import.meta.env.DEV &&
    window.location.pathname.includes("/react-portfolio");

  // Determine base path based on environment and current URL
  let basePath;
  if (import.meta.env.PROD) {
    // Production environment
    basePath = "/react-portfolio/";
  } else if (isDevelopmentWithProductionPath) {
    // Development but accessed via /react-portfolio/ path
    basePath = "/react-portfolio/";
  } else {
    // Standard development environment
    basePath = "/";
  }

  // Handle assets path consistently
  if (cleanPath.startsWith("assets/")) {
    return `${basePath}${cleanPath}`;
  } else {
    return `${basePath}assets/${cleanPath}`;
  }
}
