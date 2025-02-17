import React from "react";

const Home = () => {
  return (
    // positioning with fix view-hight för background image absolut position
    <main className="relative min-h-screen">
      <article className="h-[90vh]">
        <div className="flex h-full items-center justify-between flex-wrap">
          <div className="relative z-10 w-full max-w-[600px] pl-5 sm:pl-10 md:pl-12 lg:pl-16">
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
          </div>
          <img
            src="./assets/portrait/profilbild2.png"
            alt="Profile"
            className="absolute bottom-0 left-1/2 z-0 h-[90vh] max-w-full sm:max-w-[500px] -translate-x-1/2 hidden sm:block"
          />
        </div>
      </article>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
      </div>
    </main>
  );
};

export default Home;
