import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resumeData from "../../assets/myExperience.json";
import { getAssetPath } from "../../utils/assetUtils";

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

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Swedish CV Button */}
                  <a
                    href={getAssetPath(
                      `assets/cv/${downloadOptions.swedish.filename}`
                    )}
                    download
                    className="relative inline-flex h-12 overflow-hidden"
                  >
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[5px] border-amber-400 border-1 bg-gradient-to-r from-orange-600/70 to-amber-400/70  px-6 text-sm  backdrop-blur-3xl transition-all duration-300 hover:bg-amber-600 gap-2">
                      <FontAwesomeIcon icon={["fas", "file-pdf"]} />
                      CV Svenska
                    </span>
                  </a>

                  {/* English CV Button */}
                  <a
                    href={getAssetPath(
                      `assets/cv/${downloadOptions.english.filename}`
                    )}
                    download
                    className="relative inline-flex h-12 overflow-hidden"
                  >
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[5px] border-amber-400 border-1 bg-gradient-to-r from-amber-400/70 to-orange-600/70 px-6 text-sm  backdrop-blur-3xl transition-all duration-300 hover:bg-amber-600 gap-2">
                      <FontAwesomeIcon icon={["fas", "file-pdf"]} />
                      Resume English
                    </span>
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
