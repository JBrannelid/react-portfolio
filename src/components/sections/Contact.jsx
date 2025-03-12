import React, { useState } from "react";
import { getAssetPath } from "../../utils/assetUtils";
// Icon imports
import Mail from "lucide-react/dist/esm/icons/mail";

export default function Contact() {
  // Form state with status and empty string
  const [formState, setFormState] = useState({
    status: "idle", //  'idle', 'sending', 'success', 'error'
    message: "",
  });

  // Handle form submission with async/await pattern
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Show sending state immediately
    setFormState({
      status: "sending",
      message: "Sending message...",
    });

    const formData = new FormData(event.target);

    // Access key (Not API-Key)
    formData.append("access_key", "37935aa7-15e9-4a89-999f-69191d8b614c");

    try {
      // Send data to web3forms in a POST method
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState({
          status: "success",
          message:
            "Thank you for your message! I will get back to you as soon as possible",
        });
        event.target.reset(); // Clear the form
      } else {
        // API access error
        setFormState({
          status: "error",
          message:
            "Something went wrong. Please contact me via email or social media links shown below",
        });
      }
    } catch (error) {
      // Catch all error
      setFormState({
        status: "error",
        message:
          "A technical error occurred. You can reach me through email or social media.",
      });
    }
  };

  // Get status-based styling for the form feedback message
  const getStatusStyle = () => {
    const styles = {
      sending: "bg-gray-100/80 text-gray-800",
      success: "bg-green-100/80 text-green-600",
      error: "bg-red-100/80 text-red-600",
    };
    return styles[formState.status] || "";
  };

  return (
    <main className="min-h-screen">
      <div className="container px-6 mx-auto">
        {/* Form Section */}
        <section className="lg:flex lg:items-center">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold lg:text-3xl">Let's talk</h1>

            <p className="mt-4 opacity-90">
              I'd be happy to hear from you! Feel free to reach out via email,
              contact form or provided social media links below.
            </p>
            <form className="mt-12" onSubmit={handleSubmit}>
              <div className="md:flex gap-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block mb-2 text-sm" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    placeholder="Name"
                    required
                    className="inputClasses"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-2 text-sm" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    className="inputClasses"
                  />
                </div>
              </div>

              {/* Message textarea */}
              <div className="mt-4">
                <label className="block mb-2 text-sm" htmlFor="message">
                  Write your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                  required
                  className="h-32 inputClasses"
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="button w-full h-12 rounded-full">
                Get in touch
              </button>
            </form>

            {/* Form status message */}
            {formState.message && (
              <div
                className={`mt-4 p-4 rounded-lg text-center transition-all duration-300 ${getStatusStyle()}`}
              >
                <p>{formState.message}</p>
              </div>
            )}
          </div>

          {/* Image only shown on larger screens */}
          <div className="lg:w-1/2 lg:mx-10 hidden lg:flex lg:justify-center">
            <img
              className="mt-8 rounded-full w-80 h-80 object-cover"
              src={getAssetPath("assets/portrait/IMG_2402.webp")}
              alt="Potrait image"
              width="320"
              height="320"
              loading="lazy"
            />
          </div>
        </section>

        {/* Contact Email with link */}
        <section className="flex justify-end mt-12 mb-6">
          <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20  px-6 py-3 rounded-full">
            <Mail className="text-accent-orange" />
            <a
              href="mailto:J.Brannelid@icloud.com"
              className="text-text transition-colors duration-300"
            >
              J.Brannelid@icloud.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

// Referens Contact Form
// Tailwind components Merakiui
// https://merakiui.com/components/marketing/contact
