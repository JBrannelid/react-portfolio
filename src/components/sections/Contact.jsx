import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [formState, setFormState] = useState({
    message: "",
    isSuccess: null,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormState({ message: "Sending message...", isSuccess: null });
    const formData = new FormData(event.target);

    // public key (not API Key)
    formData.append("access_key", "37935aa7-15e9-4a89-999f-69191d8b614c");

    // try contact web3forms and catch any errors
    try {
      // Get a promises from web3forms and ask får POST and formData
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Convert respons into Json
      const data = await response.json();

      // Handle data respons with uniq message
      if (data.success) {
        setFormState({
          message:
            "Thank you for your message! I will get back to you as soon as possible.",

          isSuccess: true,
        });
        event.target.reset();
      } else {
        console.log("Error", data);
        setFormState({
          message:
            "Something went wrong while sending the message. Please contact me via email or social media links shown below.",

          isSuccess: false,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState({
        message:
          "A technical error occurred. You can reach me directly at J.Brannelid@icloud.com or through social media.",

        isSuccess: false,
      });
    }
  };

  return (
    <section className="min-h-screen">
      <div className="container px-6 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
              Let's talk
            </h1>

            <p className="mt-4 opacity-90">
              I'd be happy to hear from you! Feel free to reach out via email,
              contact form or provided social media links below
            </p>
            <div className="mt-6 space-y-8 md:mt-8"></div>

            <form className="mt-12" onSubmit={onSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    placeholder="Name"
                    required
                    aria-required="true"
                    className="block w-full px-5 py-3 mt-2 
                    bg-[var(--secondary-bg)]
                    text-[var(--placeholder-color)]
                    placeholder-[var(--input-border-color)]
                    border-2
                    border-[var(--accent-orange-color)]
                    rounded-lg
                    transition-all
                    duration-200
                    ease-in-out
                    hover:border-[var(--accent1-orange-color)]
                    focus:border-[var(--accent1-orange-color)]
                    focus:ring-1
                    focus:ring-[var(--accent1-orange-color)]
                    focus:outline-none
                    focus:shadow-md"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    aria-required="true"
                    className="block w-full px-5 py-3 mt-2 
                    bg-[var(--secondary-bg)]
                    text-[var(--placeholder-color)]
                    placeholder-[var(--input-border-color)]
                    border-2
                    border-[var(--accent-orange-color)]
                    rounded-lg
                    transition-all
                    duration-200
                    ease-in-out
                    hover:border-[var(--accent1-orange-color)]
                    focus:border-[var(--accent1-orange-color)]
                    focus:ring-1
                    focus:ring-[var(--accent1-orange-color)]
                    focus:outline-none
                    focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm" htmlFor="message">
                  Write your message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2                     
                  bg-[var(--secondary-bg)]
                  text-[var(--placeholder-color)]
                  placeholder-[var(--input-border-color)]
                  border-2
                  border-[var(--accent-orange-color)]
                  rounded-lg
                  transition-all
                  duration-200
                  ease-in-out
                  hover:border-[var(--accent1-orange-color)]
                  focus:border-[var(--accent1-orange-color)]
                  focus:ring-1
                  focus:ring-[var(--accent1-orange-color)]
                  focus:outline-none
                  focus:shadow-md"
                  id="message"
                  name="message"
                  placeholder="Message...."
                  required
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full mt-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec8b2a_0%,#ffd621_50%,#ec8b2a_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-red-400/60 to-amber-600/60 text-sm backdrop-blur-3xl transition-all duration-300 hover:bg-amber-600">
                  Get in touch
                </span>
              </button>
            </form>
            {/* Show a div with message base och sucess submit or not with css text styling */}
            {formState.message && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  formState.isSuccess === null
                    ? // when state is null (response time) display information that we are working on the sumbit
                      "bg-gray-100/80 text-gray-800"
                    : formState.isSuccess
                      ? "bg-green-100/80 text-green-600"
                      : "bg-red-100/80 text-red-600"
                  // smooth animation for displaying message
                } text-center transition-all duration-300`}
              >
                {/* print message base on formState */}
                <p>{formState.message}</p>
              </div>
            )}
          </div>

          <div className="lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="mt-20 hidden object-cover mx-auto rounded-full lg:block shrink-0 w-80 h-80"
              src="./assets/portrait/IMG_2402.webp"
              alt="Contact illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Referens Contact Form
// Tailwind components Merakiui
// https://merakiui.com/components/marketing/contact
