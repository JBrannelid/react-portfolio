import { useState, useEffect } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jbrannelid/repos") // fetch GitHub repo and return a promise
      .then((response) => response.json()) // return a promise that resolves to JSON data
      .then((data) => {
        console.log(data);
        // Showcast only TWCounters, ChessBoard & SchoolSystem
        const filteredData = data.filter(
          (repo) =>
            repo.name === "TWCounters" ||
            repo.name === "SchoolSystem" ||
            repo.name === "ChessBoard"
        );
        // sett project med bara filtered data
        setProjects(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); //handle error message
      });
  }, []);

  return (
    // Set container of projects section and Tailwind css styling for Title eand sections descriptions
    <main className="container mx-auto px-4 py-8 sm:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Featured Projects</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-90">
          Here are my featured projects from GitHub. Each one represents a
          significant milestone in my journey.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Itterate collected array stored in repo */}
        {projects.map((repo) => (
          <article
            key={repo.id} // Uniq element id
            className="group relative overflow-hidden rounded-xl bg-[var(--nav-bg)] p-6 transition-all duration-300 hover:scale-[1.02] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-orange-color)] to-[var(--accent1-orange-color)] opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-10"></div>
            {/* Display Name and Description */}
            <header className="mb-4">
              <h2 className="text-2xl font-bold text-[var(--accent-orange-color)]">
                {repo.name}
              </h2>
              <p className="mt-2 text-sm opacity-80">
                {repo.description || "No description available"}
              </p>
              <p className="mt-2 text-sm opacity-80">
                <FontAwesomeIcon
                  icon={["fa-solid", "plus"]}
                  className="h-4 w-4 text-[var(--accent1-orange-color)]"
                />
                &nbsp;Created at: &nbsp;
                <span className="font-bold text-cyan-200">
                  {repo.created_at?.slice(0, 10) || "No date available"}{" "}
                  {/* Slice to 10 chars */}
                </span>
              </p>
              <p className="mt-2 text-sm opacity-80">
                <FontAwesomeIcon
                  icon={["fa-solid", "plus"]}
                  className="h-4 w-4 text-[var(--accent1-orange-color)]"
                />
                &nbsp;Updated at: &nbsp;
                <span className="font-bold text-cyan-200">
                  {repo.updated_at?.slice(0, 10) || "No date available"}{" "}
                  {/* Slice to 10 chars */}
                </span>
              </p>
            </header>

            {/* Display repo url and live demo */}
            <footer className="flex items-center justify-between mt-auto pt-2 relative z-10">
              <div className="flex items-center gap-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 flex items-center gap-2 rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="h-4 w-4"
                  />
                  <span>Code</span>
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 flex items-center gap-2 rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>
              {/* Display the projects language*/}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={["fa-solid", "code"]}
                  className="h-4 w-4 text-[var(--accent1-orange-color)]"
                />
                <span className="text-sm">{repo.language}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </main>
  );
}
