import { useState, useEffect } from "react";
import { Loader, Github, Link } from "lucide-react";
import { SectionHeading } from "../../components/ui/SectionHeading";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchProjects = async () => {
    try {
      // Show loading state while fetching
      setIsLoading(true);

      // Fetches GitHub repositories with caching to avoid overload API
      const cachedData = localStorage.getItem("githubProjects");
      const cacheTime = localStorage.getItem("githubProjectsTime");
      const oneHourInMs = 60 * 60 * 1000;
      const now = Date.now();

      // If we have cache that isn't expired, use it
      if (cachedData && cacheTime) {
        const cacheAge = now - Number(cacheTime);

        if (cacheAge < oneHourInMs) {
          // Parse JSON data
          const parsedData = JSON.parse(cachedData);

          // Process the data with our helper functions
          const filteredProjects = filterProjectsByName(parsedData);
          const projectsWithDetails = addDetailsToProjects(filteredProjects);

          // Update the state with our processed projects
          setProjects(projectsWithDetails);
          setIsLoading(false); // return if we have cached data
          return;
        }
      }

      // Fetch fresh data
      const response = await fetch(
        "https://api.github.com/users/jbrannelid/repos"
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Could not fetch projects from GitHub");
      }

      // Parse the JSON response
      const data = await response.json();

      // Save the fresh data to cache along with the current timestamp
      localStorage.setItem("githubProjects", JSON.stringify(data));
      localStorage.setItem("githubProjectsTime", String(now));

      // Process the data with our helper functions
      const filteredProjects = filterProjectsByName(data);
      const projectsWithDetails = addDetailsToProjects(filteredProjects);

      // Update the state with our processed projects
      setProjects(projectsWithDetails);
    } catch (error) {
      setError("Failed to load projects. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const filterProjectsByName = (repositories) => {
    // Filtered repositories name I want to showcast
    const projectsToShow = [
      "TWCounters",
      "SchoolSystem",
      "ChessBoard",
      "REST_API_ResumeHandler",
    ];

    return repositories.filter((repo) => projectsToShow.includes(repo.name));
  };

  // Adds category and color theme information to each project
  const addDetailsToProjects = (filteredProjects) => {
    return filteredProjects.map((repo) => ({
      ...repo, // Keep all original properties
      category: determineProjectCategory(repo.name),
      colorTheme: assignColorTheme(repo.name),
    }));
  };

  const determineProjectCategory = (projectName) => {
    const categories = {
      REST_API_ResumeHandler: "Backend System",
      TWCounters: "Web Application",
      SchoolSystem: "Backend System",
      ChessBoard: "",
    };

    return categories[projectName] || "Other";
  };

  const assignColorTheme = (projectName) => {
    // Define color themes for known projects
    const themes = {
      REST_API_ResumeHandler: "",
      TWCounters: "from-blue-500/40 to-purple-500/40",
      SchoolSystem: "from-green-500/40 to-teal-500/40",
      ChessBoard: "from-orange-500/40 to-red-500/40",
    };

    // Return the matching theme or a default gray theme if no match
    return themes[projectName] || "from-gray-500/20 to-slate-500/40";
  };

  // Fetch projects when component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  // Loading state display
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-accent-orange" />
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4">
      <SectionHeading
        title="Featured Projects"
        subtitle="Explore my selected projects from GitHub, each representing key
          milestones in my development journey"
      />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-r ${project.colorTheme} 
    p-6 transform transition-all duration-300 hover:scale-[1.01] flex flex-col
    border border-white/10  `}
          >
            <div className="mb-4">
              {/* Project name */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                  {project.category}
                </span>
                <span className="text-sm opacity-80">
                  {new Date(project.created_at).toLocaleDateString()}
                </span>
              </div>
              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm opacity-90 mb-4">
                {/* Fallback if no description is available from GitHub */}
                {project.description || "No description available"}
              </p>
            </div>
            {/* Most common language in the project */}
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-2">
                {/* orange dot */}
                <div className="h-3 w-3 rounded-full bg-accent-orange" />
                <span className="text-sm">{project.language}</span>
              </div>

              {/* href link to GitHub*/}
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

                {/* href link to Homepage if available */}
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
