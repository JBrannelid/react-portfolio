import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myExperienceData from "../../assets/myExperience.json";

const Experience = () => {
  const { experience, education, additionalEducation, certifications } =
    myExperienceData;
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Timeline Entry Component
  const TimelineEntry = ({
    title,
    period,
    children,
    id,
    isExpanded,
    onToggle,
    alwaysExpanded = false, // Always expand Certification section
  }) => (
    <div className="relative pl-8 pb-8 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--accent-orange-color)] to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-[var(--accent-orange-color)]" />

      {/* Content container */}
      <div className="bg-white/5 rounded-lg p-4 border border-white/10 transition-all duration-300 hover:border-[var(--accent-orange-color)]/50">
        <div className="flex flex-col gap-2">
          {/* Title and period always visible */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold ">{title}</h3>
              <span className="text-sm opacity-80">{period}</span>
            </div>
            {!alwaysExpanded && (
              <button
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => onToggle(id)}
              >
                <FontAwesomeIcon
                  icon={
                    isExpanded
                      ? ["fas", "chevron-down"]
                      : ["fas", "chevron-right"]
                  }
                  className="w-4 h-4"
                />
              </button>
            )}
          </div>
        </div>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            alwaysExpanded || isExpanded
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );

  // Tab Button Component
  const TabButton = ({ active, iconName, label, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
        ${
          active
            ? "bg-[var(--accent-orange-color)] text-white"
            : "bg-white/5 hover:bg-white/10"
        }`}
    >
      <FontAwesomeIcon icon={["fas", iconName]} className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );

  // Skill Tag Component
  const SkillTag = ({ skill }) => (
    <span
      className="inline-block px-3 py-1 text-xs text-[var(--accent1-orange-color)] 
                    bg-[var(--accent-orange-color)]/10 rounded-full mr-2 mb-2"
    >
      {skill}
    </span>
  );

  return (
    <main className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12">
        Professional Journey
      </h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <TabButton
          active={activeTab === "experience"}
          iconName="briefcase"
          label="Work Experience"
          onClick={() => setActiveTab("experience")}
        />
        <TabButton
          active={activeTab === "education"}
          iconName="graduation-cap"
          label="Education"
          onClick={() => setActiveTab("education")}
        />
        <TabButton
          active={activeTab === "additional"}
          iconName="award"
          label="Additional Training"
          onClick={() => setActiveTab("additional")}
        />
        <TabButton
          active={activeTab === "certifications"}
          iconName="certificate"
          label="Certifications"
          onClick={() => setActiveTab("certifications")}
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {/* Work Experience Section */}
        {activeTab === "experience" && (
          <div className="space-y-4">
            {/* Current work */}
            <TimelineEntry
              title={experience.currentRole.title}
              period={experience.currentRole.period}
              id="current"
              isExpanded={expandedSections.current}
              onToggle={toggleSection}
            >
              <div className="pt-4">
                <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
                  {experience.currentRole.company},{" "}
                  {experience.currentRole.location}
                </p>
                <p className="text-sm opacity-80 mb-4">
                  {experience.currentRole.details}
                </p>
                <div className="flex flex-wrap">
                  {experience.currentRole.skills?.map((skill, idx) => (
                    <SkillTag key={idx} skill={skill} />
                  ))}
                </div>
              </div>
            </TimelineEntry>

            {/* previousRole */}
            <TimelineEntry
              title={experience.previousRole.title}
              period={experience.previousRole.period}
              id="previous"
              isExpanded={expandedSections.previous}
              onToggle={toggleSection}
            >
              <div className="pt-4">
                <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
                  {experience.previousRole.company},{" "}
                  {experience.previousRole.location}
                </p>
                <p className="text-sm opacity-80 mb-4">
                  {experience.previousRole.details}
                </p>
                <div className="flex flex-wrap">
                  {experience.previousRole.skills?.map((skill, idx) => (
                    <SkillTag key={idx} skill={skill} />
                  ))}
                </div>
              </div>
            </TimelineEntry>

            {/* professionalHistory */}
            {experience.professionalHistory.map((role, index) => (
              <TimelineEntry
                key={index}
                title={role.title}
                period={role.period}
                id={`history-${index}`}
                isExpanded={expandedSections[`history-${index}`]}
                onToggle={toggleSection}
              >
                <div className="pt-4">
                  <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
                    {role.company}, {role.location}
                  </p>
                  <p className="text-sm opacity-80 mb-4">{role.details}</p>
                  <div className="flex flex-wrap">
                    {role.skills?.map((skill, idx) => (
                      <SkillTag key={idx} skill={skill} />
                    ))}
                  </div>
                </div>
              </TimelineEntry>
            ))}
          </div>
        )}

        {/* Education Section */}
        {activeTab === "education" && (
          <div className="space-y-4">
            {/* Higher-Vocational-Education */}
            <TimelineEntry
              title={education["Higher-Vocational-Education"].program}
              period={education["Higher-Vocational-Education"].period}
              id="vocational"
              isExpanded={expandedSections.vocational}
              onToggle={toggleSection}
            >
              <div className="pt-4">
                <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
                  {education["Higher-Vocational-Education"].institution}
                </p>
                <p className="text-sm opacity-80 mb-4">
                  {education["Higher-Vocational-Education"].description}
                </p>
                {education["Higher-Vocational-Education"].credits && (
                  <SkillTag
                    skill={education["Higher-Vocational-Education"].credits}
                  />
                )}
              </div>
            </TimelineEntry>

            {/* University */}
            <TimelineEntry
              title={education.university.program}
              period={education.university.period}
              id="university"
              isExpanded={expandedSections.university}
              onToggle={toggleSection}
            >
              <div className="pt-4">
                <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
                  {education.university.institution}
                </p>
                {education.university.thesis && (
                  <div className="mb-4">
                    <p className="text-sm mb-2">Bachelor Thesis:</p>
                    <a
                      href="https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1085398&dswid=6631"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent1-orange-color)] hover:underline"
                    >
                      ➡️ {education.university.thesis}
                    </a>
                  </div>
                )}
                {education.university.credits && (
                  <SkillTag skill={education.university.credits} />
                )}
              </div>
            </TimelineEntry>
          </div>
        )}

        {/* Additional Education Section */}
        {activeTab === "additional" && (
          <div className="space-y-4">
            {additionalEducation.map((course, index) => (
              <TimelineEntry
                key={index}
                title={course.course}
                period={course.year || course.period}
                id={`course-${index}`}
                isExpanded={expandedSections[`course-${index}`]}
                onToggle={toggleSection}
              >
                <div className="pt-4">
                  <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
                    {course.institution}
                  </p>
                  {course.credits && (
                    <SkillTag skill={`${course.credits} credits`} />
                  )}
                </div>
              </TimelineEntry>
            ))}
          </div>
        )}

        {/* Certifications - Always expanded */}
        {activeTab === "certifications" && (
          <div className="space-y-4">
            {certifications.map((certificate, index) => (
              <TimelineEntry
                key={index}
                title={certificate.name}
                period={certificate.year}
                id={`certification-${index}`}
                isExpanded={true}
                onToggle={() => {}}
                alwaysExpanded={true} // Always be expanded = true
              >
                <div className="pt-4">
                  <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
                    {certificate.issuer}
                  </p>
                  {certificate.status && (
                    <SkillTag skill={`Status: ${certificate.status}`} />
                  )}
                </div>
              </TimelineEntry>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Experience;
