import { useState, useEffect } from "react";
import { Loader, Github, Link, Circle } from "lucide-react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //  fetch data from Github public API with cache and rate limits
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);

        const cachedData = localStorage.getItem("githubProjects");
        const cacheTime = localStorage.getItem("githubProjectsTime");
        const oneHourInMs = 60 * 60 * 1000; // 1 hour
        const now = Date.now();

        // Use cache if available and less than 1 hour old
        if (cachedData && cacheTime && now - Number(cacheTime) < oneHourInMs) {
          console.log("Using cached GitHub data");
          const parsedData = JSON.parse(cachedData);
          prepareProjectsForDisplay(parsedData);
          return;
        }

        // Fetch fresh data if cache is missing or expired
        const response = await fetch(
          "https://api.github.com/users/jbrannelid/repos"
        );

        if (!response.ok) {
          throw new Error("Could not fetch projects from GitHub");
        }

        const data = await response.json();

        // Save to cache with timestamp
        localStorage.setItem("githubProjects", JSON.stringify(data));
        localStorage.setItem("githubProjectsTime", String(now));

        prepareProjectsForDisplay(data);
      } catch (error) {
        setError("Failed to load projects. Please try again later.");
        console.error("Error loading projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Helper function to prepare projects data
    const prepareProjectsForDisplay = (data) => {
      // Filter to only show specific projects
      const filteredProjects = data.filter((repo) =>
        ["TWCounters", "SchoolSystem", "ChessBoard"].includes(repo.name)
      );

      // Add additional information to each project
      const projectsWithDetails = filteredProjects.map((repo) => ({
        ...repo,
        category: getProjectCategory(repo.name),
        colorTheme: getColorTheme(repo.name),
      }));

      setProjects(projectsWithDetails);
    };

    fetchProjects();
  }, []);

  // Helper function to determine project category
  const getProjectCategory = (name) => {
    const categories = {
      TWCounters: "Web Application",
      SchoolSystem: "Backend System",
    };
    return categories[name] || "Other";
  };

  // Helper function to assign color theme
  const getColorTheme = (name) => {
    const themes = {
      TWCounters: "from-blue-500/30 to-purple-500/40",
      SchoolSystem: "from-green-500/30 to-teal-500/40",
      ChessBoard: "from-orange-500/30 to-red-500/40",
    };
    return themes[name] || "from-gray-500/20 to-slate-500/40";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-[var(--accent-orange-color)]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="text-red-500 text-center max-w-md p-4 bg-red-500/10 rounded-lg">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[var(--accent-orange-color)] rounded-lg hover:bg-[var(--accent1-orange-color)] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-90">
          Explore my selected projects from GitHub, each representing key
          milestones in my development journey
        </p>
      </header>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-r ${project.colorTheme} 
    p-6 transform transition-all duration-300 hover:scale-[1.03] flex flex-col
    border border-white/10 backdrop-blur-sm hover:border-[var(--accent-orange-color)]/50`}
          >
            <div className="mb-4">
              {/* Project name */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                  {project.category}
                </span>
                <span className="text-sm opacity-60">
                  {new Date(project.created_at).toLocaleDateString()}
                </span>
              </div>
              {/* Project Title */}
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-sm opacity-80 mb-4">
                {/* Fallback if no description is available from GitHub */}
                {project.description || "No description available"}
              </p>
            </div>
            {/* Most common language in the project */}
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-2">
                {/* orange dot */}
                <div className="h-3 w-3 rounded-full bg-[var(--accent-orange-color)]" />
                <span className="text-sm">{project.language}</span>
              </div>

              {/* herf link to GitHub*/}
              <div className="flex items-center gap-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 
                    hover:bg-white/20 transition-colors duration-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>

                {/* herf link to Homepage if available */}
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 
                      hover:bg-white/20 transition-colors duration-300"
                  >
                    <Link size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
