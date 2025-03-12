import React from "react";
import { getAssetPath } from "../../utils/assetUtils";
import { SectionHeading } from "../../components/ui/SectionHeading";

const About = () => {
  // Array of static image with belongings description
  const polaroidImages = [
    {
      src: getAssetPath("assets/portrait/Elina.webp"),
      sizes: "(max-width: 768px) 100vw, 400px",
      caption: "Grace in Motion",
      alt: "My daughter before balett traningsession",
      order: "lg:order-1 order-2",
      width: 400,
      height: 400,
    },
    {
      isText: true,
      title: "Timeless Family Moments",
      order: "lg:order-2 order-1",
    },
    {
      src: getAssetPath("assets/portrait/maxi_remove_bg.webp"),
      sizes: "(max-width: 768px) 100vw, 400px",
      caption: "Match Day Energy",
      alt: "My son before a football game",
      order: "lg:order-3 order-3",
      width: 400,
      height: 400,
    },
    {
      src: getAssetPath("assets/portrait/elina_linnea_remove_bg.webp"),
      sizes: "(max-width: 768px) 100vw, 400px",
      caption: "Autumn Harvest",
      alt: "Autumn Harvest with my daughter and wife",
      order: "lg:order-4 order-4",
      width: 400,
      height: 400,
    },
    {
      src: getAssetPath("assets/portrait/Johannes.webp"),
      sizes: "(max-width: 768px) 100vw, 400px",
      caption: "Radiographer",
      alt: "Radiographer profile picture",
      order: "lg:order-5 order-5",
      width: 400,
      height: 400,
    },
    {
      src: getAssetPath("assets/portrait/SandSurfing.webp"),
      sizes: "(max-width: 768px) 100vw, 400px",
      caption: "Desert Adventures",
      alt: "Travel image in the dessert",
      order: "lg:order-6 order-6",
      width: 400,
      height: 400,
    },
    {
      src: getAssetPath("assets/portrait/Linnea.webp"),
      sizes: "(max-width: 768px) 100vw, 400px",
      caption: "The Heart of Our Home",
      alt: "My wife in a natural moment",
      order: "lg:order-7 order-7",
      width: 400,
      height: 400,
    },
  ];

  // Array of rotations with index as parameter
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
    <main className="container mx-auto px-4">
      <SectionHeading
        title="About Me"
        subtitle="Student Fullstack .NET at Chas Academy - Stockholm, Sweden"
        highlightedText="Student"
      />
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="lg:w-2/5 space-y-6">
          {/* Biography Section */}
          <article className="bg-white/20 rounded-xl p-6 border border-white/60">
            <h3 className="text-2xl mb-4 text-accent1-orange">Biography</h3>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                I am a dedicated person with experience in sales, healthcare,
                and leadership. I am passionate about combining medical
                technology with clinical healthcare, which led me to pursue a
                career as a radiology nurse/radiographer.
              </p>
              <p>
                Since 2017, I have worked in emergency care radiology. I have
                taken on various clinical, leadership, and management roles.
              </p>
              <p>
                Balancing a demanding healthcare career with personal life has
                been challenging. My interest in IT inspired me to pursue
                full-time studies in fullstack software development.
              </p>
              <p>
                With my diverse professional background, a strong desire to
                learn, and a genuine passion for technology, I am excited to
                develop innovative solutions that bridge my past experiences
                with my future aspirations.
              </p>
            </div>
          </article>
          {/* Credits Section */}
          <article className="bg-[rgba(230,122,13,0.15)] p-4 rounded-xl border-l border-l-accent-orange border border-white/60">
            <h3 className="text-xl mb-2 text-accent1-orange">Credits</h3>
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
          </article>
        </section>

        {/* Photo Grid Section */}
        <section className="lg:w-3/5" aria-label="Personal photos">
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {/* search array for image(key) and index(value). Display a div/text if it bool isText is true */}
            {polaroidImages.map((image, index) =>
              image.isText ? (
                <div
                  key={index}
                  className={`bg-primary rounded-lg p-4 flex items-center justify-center aspect-square ${image.order}`}
                >
                  <h3 className="text-xl font-semibold text-accent1-orange text-center">
                    {image.title}
                  </h3>
                </div>
              ) : (
                <figure
                  key={index} // uniq element id for React
                  className={`relative bg-white rounded-lg p-2 md:p-3 shadow-lg
                    transition duration-300 hover:scale-105 hover:z-10 
                    ${getRotation(index)} ${image.order}`} // set image rotation and image order for media display
                >
                  <div className="aspect-square rounded-lg bg-input-border overflow-hidden">
                    <img
                      src={image.src}
                      sizes={image.sizes}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      width={image.width || 240}
                      height={image.height || 240}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm font-medium text-center text-primary">
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
