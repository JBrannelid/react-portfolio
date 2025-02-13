import React from "react";

const About = () => {
  // Array of static image with belongings description. Display-order for media screen
  const polaroidImages = [
    {
      src: "./assets/portrait/Elina.png",
      caption: "Grace in Motion",
      alt: "My daughter before balett traningsession",
      order: "lg:order-1 order-2",
    },
    {
      isText: true,
      title: "Timeless Family Moments",
      order: "lg:order-2 order-1",
    },
    {
      src: "./assets/portrait/maxi_remove_bg.png",
      caption: "Match Day Energy",
      alt: "My son before a football game",
      order: "lg:order-3 order-3",
    },
    {
      src: "./assets/portrait/elina_linnea_remove_bg.png",
      caption: "Autumn Harvest",
      alt: "Autumn Harvest with my daughter and wife",
      order: "lg:order-4 order-4",
    },
    {
      src: "./assets/portrait/Johannes.png",
      caption: "Leg.Radiographer",
      alt: "Radiographer profile picture",
      order: "lg:order-5 order-5",
    },
    {
      src: "./assets/portrait/SandSurfing.png",
      caption: "Desert Adventures",
      alt: "Travel image in the dessert",
      order: "lg:order-6 order-6",
    },
    {
      src: "./assets/portrait/Linnea.png",
      caption: "The Heart of Our Home",
      alt: "My wife in a natural moment",
      order: "lg:order-7 order-7",
    },
  ];

  // Array of rotations with index as para
  const getRotation = (index) => {
    const rotations = [
      "lg:hover:rotate-0 lg:rotate-[8deg]",
      "lg:hover:rotate-0 lg:-rotate-[12deg]",
      "lg:hover:rotate-0 lg:rotate-[5deg]",
      "lg:hover:rotate-0 lg:-rotate-[7deg]",
      "lg:hover:rotate-0 lg:rotate-[10deg]",
      "lg:hover:rotate-0 lg:-rotate-[8deg]",
      "lg:hover:rotate-0 lg:rotate-[6deg]",
    ];
    return rotations[index];
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Centered Header Section */}
      <header className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <h2 className="text-xl font-semibold text-[var(--accent-orange-color)]">
          Student
          <span className="text-white text-sm ml-2 block md:inline">
            Fullstack .NET at Chas Academy - Stockholm, Sweden
          </span>
        </h2>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Biography Section */}
        <section className="lg:w-2/5 space-y-6">
          <article className="bg-white/20 rounded-xl p-6 border border-white/60">
            <h2 className="text-2xl mb-4 text-[var(--accent1-orange-color)]">
              Biography
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                I am a dedicated and responsible person with experience in
                sales, healthcare and leadership. My passion for combining
                medical technology with dynamic, clinical healthcare led me to
                pursue a career as a radiology nurse/radiographer.
              </p>
              <p>
                Sense 2017, I have worked in emergency care radiology at
                Karolinska University Hospital. Taking on various roles in both
                clinical, leadership and management.
              </p>
              <p>
                However, balancing a demanding healthcare career with personal
                life hasn't always been easy. I've always had an interest in IT,
                which inspired me to take a bold step forward and pursue
                fulltime studies in full-stack software development.
              </p>
              <p>
                With my diverse professional background, a strong desire to
                learn, and a genuine passion for technology, I am excited to
                develop innovative solutions that bridge my past experiences
                with my future aspirations.
              </p>
            </div>
          </article>

          <aside className="bg-[rgba(230,122,13,0.15)] p-4 rounded-xl border-l-[3px] border-l-[var(--accent-orange-color)] border border-white/60">
            <h2 className="text-xl mb-2 text-[var(--accent1-orange-color)]">
              Credits
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                Date of issue: 2017-05-30
                <br />
                Credits: 180
              </p>
              <p>
                * Degree of Bachelor of Science in Diagnostic Radiology Nursing
              </p>
              <p>* Röntgensjuksköterskeexamen</p>
            </div>
          </aside>
        </section>

        {/* Photo Grid Section */}
        <section className="lg:w-3/5" aria-label="Personal photos">
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {/* search array for image(key) and index(value). Display a div/text if it bool isText is true */}
            {polaroidImages.map((image, index) =>
              image.isText ? (
                <div
                  key={index}
                  className={`bg-[var(--primary-bg)] rounded-lg p-4 flex items-center justify-center aspect-square ${image.order}`}
                >
                  <h3 className="text-xl font-semibold text-[var(--accent1-orange-color)] text-center">
                    {image.title}
                  </h3>
                </div>
              ) : (
                <figure
                  key={index} // uniq element id for React
                  className={`relative bg-[var(--secondary-bg)] rounded-lg p-2 md:p-3 shadow-lg
                    transition-all duration-300 ease-in-out hover:scale-105 hover:z-10 max-w-[15rem]
                    ${getRotation(index)} ${image.order}`} // set image rotation and image order for media display
                >
                  <div className="aspect-square rounded-lg bg-[var(--input-border-color)] overflow-hidden max-w-[15rem]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm font-medium text-[var(--primary-bg)] text-center">
                    {image.caption}
                  </figcaption>
                </figure>
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
