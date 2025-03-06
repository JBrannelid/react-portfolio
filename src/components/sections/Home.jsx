import React from "react";
import resumeData from "../../assets/myExperience.json";
import { getAssetPath } from "../../utils/assetUtils";
import { ScrollText } from "lucide-react";

const Home = () => {
  const { downloadOptions } = resumeData.resume;

  return (
    <main className="relative min-h-screen">
      <article className="h-[90vh]">
        <div className="flex h-full items-center justify-between flex-wrap">
          <div className="relative z-10 w-full max-w-[600px] pl-5 sm:pl-10 md:pl-12 lg:pl-16">
            <h2 className="mb-4 text-3xl">Welcome!</h2>
            <h1 className="mb-4 text-4xl text-[var(--accent-yellow-color)]">
              I'm Johannes Brannelid
            </h1>

            <div className="space-y-4">
              <p className="font-light max-w-[300px]">
                A passionate Fullstack .NET student at Chas Academy, Stockholm |
                Sweden. Eager to learn, create, and grow.
              </p>
              <p className="font-light max-w-[300px]">
                Thank you for stopping by — I'm excited to share my journey with
                you!
              </p>

              {/* CV Download Section */}
              <div className="mt-8 space-y-3">
                <p className="font-medium text-[var(--accent1-orange-color)]">
                  Download my CV <br />
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-[300px]">
                  {/* Swedish CV Button */}
                  <a
                    href={getAssetPath(
                      `assets/cv/${downloadOptions.swedish.filename}`
                    )}
                    download
                    className="inline-block"
                  >
                    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600/70 to-amber-400/70 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md hover:opacity-80 transition duration-300 whitespace-nowrap">
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
                    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600/70 to-amber-400/70 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-md hover:opacity-80 transition duration-300 whitespace-nowrap">
                      <ScrollText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        Resume English
                      </span>
                    </div>
                  </a>
                </div>
                <span className="text-xs text-white opacity-90">
                  Last updated: {downloadOptions.english.lastUpdated}
                </span>
              </div>
            </div>
          </div>
          <img
            src={getAssetPath("assets/portrait/profilbild2.webp")}
            sizes="(max-width: 640px) 0px, (max-width: 1024px) 500px, 800px"
            alt="Profile"
            className="absolute bottom-0 left-1/2 z-0 h-[90vh] max-w-full sm:max-w-[500px] -translate-x-1/2 hidden sm:block"
            width="500"
            height="900"
          />
        </div>
      </article>
      {/* Section divider with absolute position. Other section divider is places in Layout components*/}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
      </div>
    </main>
  );
};

export default Home;
