import React, { useState } from "react";
import myExperienceData from "../../assets/myExperience.json";
import { SectionHeading } from "../../components/ui/SectionHeading";
// Icon imports
import ChevronUp from "lucide-react/dist/esm/icons/chevron-up";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import Award from "lucide-react/dist/esm/icons/award";
import Medal from "lucide-react/dist/esm/icons/medal";

const Experience = () => {
  // Get experience data from imported JSON
  const { experience, education, additionalEducation, certifications } =
    myExperienceData;

  // State to track which tab is currently active (experience, education, etc.)
  const [activeTab, setActiveTab] = useState("experience");

  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({});

  // Function to toggle whether a section is expanded or collapsed
  const toggleSection = (sectionId) => {
    const newExpandedSections = { ...expandedSections };
    // If section is currently expanded, set to false; otherwise set to true
    newExpandedSections[sectionId] = !expandedSections[sectionId];
    setExpandedSections(newExpandedSections);
  };

  // Display the content for each job, education, or certification entry
  const TimelineContent = ({ company, location, details, skills }) => (
    <div className="pt-4">
      <p className="text-sm text-[var(--accent1-orange-color)] mb-2">
        {company}, {location}
      </p>
      <p className="text-sm opacity-80 mb-4">{details}</p>
      <div className="flex flex-wrap">
        {skills &&
          skills.map((skill, idx) => <SkillTag key={idx} skill={skill} />)}
      </div>
    </div>
  );

  // Timeline Entry Component - a reusable expandable section
  const TimelineEntry = ({
    title,
    period,
    children,
    id,
    isExpanded,
    onToggle,
    alwaysExpanded = false,
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
              <h3 className="text-xl font-semibold">{title}</h3>
              <span className="text-sm opacity-80">{period}</span>
            </div>
            {!alwaysExpanded && (
              <button
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => onToggle(id)}
                aria-label={isExpanded ? "Collapse section" : "Expand section"}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Content that shows/hides when expanded/collapsed */}
        <div
          className={`transition-all duration-300 overflow-hidden ease-in-out ${
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

  // Tab Button Component - for switching between tabs
  const TabButton = ({ active, icon, label, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
        ${active ? "bg-[var(--accent-orange-color)] text-white" : "bg-white/5 hover:bg-white/10"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  // Skill Tag Component - for displaying skill badges
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
      <SectionHeading title="Professional Journey" />

      {/* Tab Navigation - buttons to switch between experience types */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <TabButton
          active={activeTab === "experience"}
          icon={<Briefcase className="w-4 h-4" />}
          label="Work Experience"
          onClick={() => setActiveTab("experience")}
        />
        <TabButton
          active={activeTab === "education"}
          icon={<GraduationCap className="w-4 h-4" />}
          label="Education"
          onClick={() => setActiveTab("education")}
        />
        <TabButton
          active={activeTab === "additional"}
          icon={<Award className="w-4 h-4" />}
          label="Additional Training"
          onClick={() => setActiveTab("additional")}
        />
        <TabButton
          active={activeTab === "certifications"}
          icon={<Medal className="w-4 h-4" />}
          label="Certifications"
          onClick={() => setActiveTab("certifications")}
        />
      </div>

      {/* Content Sections - different sections that show based on active tab */}
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
              <TimelineContent
                company={experience.currentRole.company}
                location={experience.currentRole.location}
                details={experience.currentRole.details}
                skills={experience.currentRole.skills}
              />
            </TimelineEntry>

            {/* Previous role */}
            <TimelineEntry
              title={experience.previousRole.title}
              period={experience.previousRole.period}
              id="previous"
              isExpanded={expandedSections.previous}
              onToggle={toggleSection}
            >
              <TimelineContent
                company={experience.previousRole.company}
                location={experience.previousRole.location}
                details={experience.previousRole.details}
                skills={experience.previousRole.skills}
              />
            </TimelineEntry>

            {/* Professional history - maps through all past roles */}
            {experience.professionalHistory.map((role, index) => (
              <TimelineEntry
                key={index}
                title={role.title}
                period={role.period}
                id={`history-${index}`}
                isExpanded={expandedSections[`history-${index}`]}
                onToggle={toggleSection}
              >
                <TimelineContent
                  company={role.company}
                  location={role.location}
                  details={role.details}
                  skills={role.skills}
                />
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
                alwaysExpanded={true} // These are always expanded
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
