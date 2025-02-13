import React from "react";

const Home = () => {
  return (
    // positioning with fix view-hight för background image absolut position
    <main className="relative h-[95.8vh] overflow-hidden">
      <article className="h-full">
        <div className="flex h-[90vh] items-center justify-between">
          <div className="relative z-10 w-full max-w-[600px] pl-20">
            <h2 className="mb-4 text-3xl">Welcome!</h2>
            <h1 className="mb-4 text-4xl text-[var(--accent-orange-color)]">
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
            </div>

            <section className="mt-8">
              <h3 className="text-2xl font-semibold">WakaTime Stats</h3>
              <h5 className="text-sm text-white">
                (Visual studio & Visual studio code)
              </h5>
              <img
                className="mt-2 w-full sm:w-full lg:max-w-[80%]"
                src="https://github-readme-stats.vercel.app/api/wakatime?username=JBrannelid&hide=html&hide_title=true&hide_border=true&langs_count=6&text_color=ffffff&theme=transparent&title_color=ec8b2a"
                alt="Coding Time Stats"
                aria-live="polite"
              />
            </section>
          </div>
          <img
            src="./assets/portrait/profilbild2.png"
            alt="Profile"
            className="absolute bottom-0 left-1/2 z-0 h-[90vh] max-w-[500px] -translate-x-1/2 hidden sm:block"
          />
        </div>
      </article>
    </main>
  );
};

export default Home;
