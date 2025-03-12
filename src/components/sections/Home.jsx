import React from "react";
import resumeData from "../../assets/myExperience.json";
import { getAssetPath } from "../../utils/assetUtils";
// Icon imports
import ScrollText from "lucide-react/dist/esm/icons/scroll-text";

const Home = () => {
  const { downloadOptions } = resumeData.resume;

  return (
    <main className="relative h-screen">
      <article className="flex h-10/12 items-center justify-between">
        {/* Higher z-index than img */}
        <div className="relative z-10 w-full pl-5 sm:pl-10 md:pl-12 lg:pl-16">
          <h2 className="mb-4 text-3xl">Welcome!</h2>
          <h1 className="mb-4 text-4xl text-accent-yellow">
            I'm Johannes Brannelid
          </h1>

          <div className="space-y-4 max-w-72">
            <p>
              A passionate Fullstack .NET student at Chas Academy, Stockholm |
              Sweden. Eager to learn, create, and grow.
            </p>
            <p>
              Thank you for stopping by — I'm excited to share my journey with
              you!
            </p>

            {/* CV Download Section */}
            <div className="mt-8 space-y-3">
              <p className="font-medium text-accent1-orange">Download my CV</p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Swedish CV Button */}
                <a
                  href={getAssetPath(
                    `assets/cv/${downloadOptions.swedish.filename}`
                  )}
                  download
                  className="inline-block"
                >
                  <div className="button">
                    <ScrollText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">CV Svenska</span>
                  </div>
                </a>

                {/* English CV Button */}
                <a
                  href={getAssetPath(
                    `assets/cv/${downloadOptions.english.filename}`
                  )}
                  download
                  className="inline-block"
                >
                  <div className="button">
                    <ScrollText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Resume English</span>
                  </div>
                </a>
              </div>
              <span className="text-xs opacity-90">
                Last updated: {downloadOptions.english.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </article>
      <img
        src={getAssetPath("assets/portrait/profilbild2.webp")}
        alt="Profile picture"
        className="absolute bottom-0 left-1/4 z-0 h-screen 
                   min-w-[300px] max-w-[80%] sm:max-w-[80%] md:max-w-[85%] lg:max-w-[90%]
                   sm:left-1/3
                   opacity-20 sm:opacity-100"
        width="500"
        loading="eager"
        fetchPriority="high"
      />
      {/* Section divider special for homepage. Other section divider is places in Layout components*/}
      <div className="divider my-0 absolute bottom-0" />
    </main>
  );
};

export default Home;
