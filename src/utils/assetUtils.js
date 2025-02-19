// Returns the correct path for assets
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // For assets that already include the assets/ prefix
  if (cleanPath.startsWith("assets/")) {
    return `/${cleanPath}`;
  } else {
    // For assets that need the prefix added
    return `/assets/${cleanPath}`;
  }
}
