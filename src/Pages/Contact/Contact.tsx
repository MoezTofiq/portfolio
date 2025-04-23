import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const email = "moeeztofiq@gmail.com"; // Replace with your actual email

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${email}`;
    const newTab = window.open(mailtoLink, "_blank");
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      alert(
        `If the email service did not open, please send an email to: ${email}`
      );
    }
  };

  return (
    <RoutePageAnimation>
      <div className="pt-20 flex flex-col items-center justify-start w-full h-full text-white">
        <title>Contact Me | Muhammad Moeez Portfolio</title>
        <meta
          name="description"
          content="Get in touch for collaborations, freelance work, or just to say hi!"
        />
        <meta
          name="keywords"
          content="contact developer, hire me, connect, developer email"
        />
        <meta
          property="og:title"
          content="Contact Me | My Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Reach out to me for opportunities, feedback, or inquiries."
        />
        <meta
          name="twitter:title"
          content="Contact Me | My Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Reach out to me for opportunities, feedback, or inquiries."
        />

        <meta name="twitter:site" content="@moeeztofiq" />
        <meta name="twitter:creator" content="@moeeztofiq" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Contact Card */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg sm:rounded-2xl sm:overflow-hidden m-5 p-8 w-full max-w-3xl border border-white/20 text-center">
          <h3 className="text-3xl font-bold tracking-wide">Get In Touch</h3>
          <p className="text-gray-300 mt-2 text-sm">
            Feel free to reach out through any of the platforms below. For any
            inquiries or collaborations,
          </p>
          <p className="text-gray-300 mt-2 text-sm">
            I'm just an email away. Even if it's just to say hi!
          </p>

          {/* Social Links */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/MoezTofiq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg w-full sm:w-auto text-white text-lg font-medium gap-2"
            >
              <FaGithub size={24} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-moeez-2916761b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition p-4 rounded-lg w-full sm:w-auto text-white text-lg font-medium gap-2"
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
          </div>

          {/* Email Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 transition p-4 rounded-lg border border-white/20 text-white text-lg font-medium gap-2 w-full sm:w-auto"
            >
              <FaEnvelope size={24} /> Send Me an Email
            </button>
          </div>
        </div>
      </div>
    </RoutePageAnimation>
  );
};

export default Contact;
