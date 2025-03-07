import React, { useState } from "react";
// Icon imports
import Monitor from "lucide-react/dist/esm/icons/monitor";
import Server from "lucide-react/dist/esm/icons/server";
import GitBranch from "lucide-react/dist/esm/icons/git-branch";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import Circle from "lucide-react/dist/esm/icons/circle";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-5 h-5" />,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Tailwind CSS" },
      ],
      bgColor: "bg-gradient-to-r from-blue-500/30 to-purple-500/30",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      description: "Creating robust server-side applications",
      skills: [
        { name: "C#" },
        { name: ".NET" },
        { name: "SQL Server" },
        { name: "RESTful APIs" },
        { name: "Azure" },
      ],
      bgColor: "bg-gradient-to-r from-green-500/30 to-teal-500/30",
      borderColor: "border-green-500/20",
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="w-5 h-5" />,
      description: "Essential development tools and practices",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Visual Studio" },
        { name: "Figma" },
      ],
      bgColor: "bg-gradient-to-r from-orange-500/40 to-red-500/40",
      borderColor: "border-orange-500/20",
    },
  ];

  return (
    // Header
    <main className="container mx-auto px-4">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 ">Technical Skills</h2>
        <h3 className="text-xl max-w-2xl mx-auto">
          My technical expertise and continuous learning journey
        </h3>
      </header>
      {/* Left - Code Time stats  */}
      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--accent1-orange-color)]">
            Activity Overview
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl mb-2">Coding Time Statistics</h3>
            <p className="text-sm text-gray-400 mb-4">
              Visual Studio & VS Code activity
            </p>
            <img
              className="w-full"
              src="https://github-readme-stats.vercel.app/api/wakatime?username=JBrannelid&hide=html&hide_title=true&hide_border=true&langs_count=6&text_color=ffffff&theme=transparent&title_color=ec8b2a"
              alt="Coding Time Statistics"
              aria-live="polite"
              width="800"
              height="300"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Right - Skills section  */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--accent1-orange-color)]">
            Skills | Ambitions Ahead
          </h2>
          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`rounded-xl border ${category.borderColor} ${category.bgColor} p-6 
    transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg 
    cursor-pointer hover:border-[var(--accent-orange-color)]/50`}
                onClick={() =>
                  setActiveCategory(activeCategory === index ? null : index)
                }
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                      <p className="text-sm">{category.description}</p>
                    </div>
                  </div>
                  {/* arrow icon for displaying open and closed card */}
                  <ChevronRight
                    className={`transform transition-transform duration-300 ${
                      activeCategory === index ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeCategory === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <Circle className="w-2 h-2" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skills;
