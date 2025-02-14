import React from "react";
import myExperienceData from "../../assets/myExperience.json";

const Experience = () => {
  const { experience, education, additionalEducation } = myExperienceData;

  // Education component for displaying education details
  const EducationData = ({
    institution,
    program,
    period,
    credits,
    thesis,
    specialization,
  }) => (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 mb-16">
      {/* Time period - left column */}
      <div className="text-white opacity-90">{period}</div>

      {/* Education details - right column */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-normal mb-1 text-white">
            {program} - {institution}
          </h3>
          {specialization && (
            <p className="text-[var(--accent-orange-color)] text-sm mt-2">
              Specialization: {specialization}
            </p>
          )}
        </div>

        {thesis && (
          <p className="leading-relaxed max-w-2xl text-sm text-white opacity-80">
            {thesis}
          </p>
        )}

        {credits && (
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 text-xs text-yellow-300 border border-[var(--accent-orange-color)]/10 bg-[var(--nav-bg)]/20">
              {credits}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  // Additional Education component for courses and certifications
  const AdditionalEducationData = ({
    institution,
    course,
    credits,
    year,
    period,
  }) => (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 mb-8">
      {/* Time period - left column */}
      <div className="">{year || period}</div>

      {/* Course details - right column */}
      <div className="space-y-2">
        <h3 className="text-lg font-normal">{course}</h3>
        <p className="text-sm opacity-80">{institution}</p>
        {credits && (
          <span className="px-3 py-1 text-xs text-yellow-300 border-[var(--accent-orange-color)]/10 border-1 bg-[var(--nav-bg)]/20">
            {credits} credits
          </span>
        )}
      </div>
    </div>
  );

  // Experience component for displaying work experience
  const ExperienceData = ({
    title,
    company,
    location,
    period,
    details,
    skills = [],
  }) => (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 mb-15">
      {/* Time period - left column */}
      <div className="">{period}</div>

      {/* title details - right column */}
      <div className="space-y-4">
        <div>
          {/* Binding title and company in main header */}
          <h3 className="text-xl font-normal mb-1">
            {title}, {company}, {location}
          </h3>
        </div>
        {/* Html html-entities + descriptions */}
        <p className="leading-relaxed max-w-2xl text-sm opacity-80">
          &#8226; {details}
        </p>

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs text-yellow-300 border-[var(--accent-orange-color)]/10 border-1 bg-[var(--nav-bg)]/20"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="container mx-auto px-4 py-24 max-w-5xl ">
      <h1 className="text-4xl font-normal mb-15 text-center">Experience</h1>

      <div>
        {/* Current title */}
        <ExperienceData
          title={experience.currentRole.title}
          company={experience.currentRole.company}
          location={experience.currentRole.location}
          period={experience.currentRole.period}
          details={experience.currentRole.details}
          skills={experience.currentRole.skills}
        />

        {/* Previous Role */}
        <ExperienceData
          title={experience.previousRole.title}
          company={experience.previousRole.company}
          location={experience.previousRole.location}
          period={experience.previousRole.period}
          details={experience.previousRole.details}
          skills={experience.previousRole.skills}
        />

        {/* Professional History */}
        {experience.professionalHistory.map((role, index) => (
          <ExperienceData
            // Set data base on role
            key={index}
            title={role.title}
            company={role.company}
            location={role.location}
            period={role.period}
            details={role.details}
            skills={role.skills}
          />
        ))}
      </div>

      <h1 className="text-3xl font-normal mb-16 mt-20 text-center">
        Education
      </h1>
      <div>
        {/* University Education */}
        <EducationData
          institution={education.university.institution}
          program={education.university.program}
          period={education.university.period}
          credits={education.university.credits}
          thesis={education.university.thesis}
        />

        {/* Secondary Education */}
        <EducationData
          institution={education.secondary.institution}
          program={education.secondary.program}
          period={education.secondary.period}
          specialization={education.secondary.specialization}
        />
      </div>

      <h2 className="text-2xl font-normal mb-8 mt-16">Additional Education</h2>
      <div>
        {/* Additional Courses and Training */}
        {additionalEducation.map((course, index) => (
          <AdditionalEducationData
            key={index}
            institution={course.institution}
            course={course.course}
            credits={course.credits}
            year={course.year}
            period={course.period}
          />
        ))}
      </div>
    </main>
  );
};

export default Experience;
