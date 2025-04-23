import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";

const CreditSection = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; link: string }[];
}) => {
  return (
    <div className="mt-6 border-t border-white/20">
      <dl className="divide-y divide-white/20">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium text-white">{title}</dt>
          <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0 space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-300 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(item.link, "_blank")}
              >
                {item.name}
              </li>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
};

const Credits = () => {
  return (
    <RoutePageAnimation>
      <div className="pt-20 relative flex flex-col items-center justify-start w-full min-h-screen z-10 text-white p-4">
        <title>Website Credits | My Developer Portfolio</title>
        <meta
          name="description"
          content="Acknowledgements for the tools, libraries, and creators who made this portfolio possible."
        />
        <meta
          name="keywords"
          content="credits, acknowledgements, open source, portfolio tools"
        />
        <meta
          property="og:title"
          content="Website Credits | My Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Shoutout to the resources and inspiration behind this site."
        />
        <meta property="og:url" content="https://your-domain.com/credits" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Header Card */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden m-4 sm:m-6 p-6 border border-white/20 text-white w-full max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Website Technology & Inspirations
          </h3>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            A heartfelt appreciation for the technologies and inspirations that
            shaped this portfolio.
          </p>
        </div>

        {/* Content Card (Middle Section) */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden m-4 sm:m-6 p-6 border border-white/20 text-white w-full max-w-3xl">
          <CreditSection
            title="Technology Used"
            items={[
              { name: "React", link: "https://react.dev/" },
              {
                name: "React Router Dom V6.29.0",
                link: "https://reactrouter.com/6.29.0",
              },
              { name: "Tailwind CSS V4.0", link: "https://tailwindcss.com/" },
              { name: "Motion (for animations)", link: "https://motion.dev/" },
            ]}
          />

          <CreditSection
            title="Design Inspirations"
            items={[
              {
                name: "WeHack Landing Page (color palette & aesthetic)",
                link: "https://www.wehackutd.com/",
              },
              {
                name: "Microsoft Edge Welcome Page (animation & UX)",
                link: "https://www.microsoft.com/en-us/edge/welcome",
              },
            ]}
          />

          <CreditSection
            title="Assets & Icons"
            items={[
              {
                name: "About Me Icon",
                link: "https://www.onlinewebfonts.com/icon/422506",
              },
            ]}
          />
        </div>

        {/* Thank You Card */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden m-4 sm:m-6 p-6 border border-white/20 text-white w-full max-w-3xl text-center">
          <p className="text-sm sm:text-base text-gray-300">
            Special thanks to all the creators and communities who contribute to
            open-source projects, inspiring countless developers, including
            myself. 💙
          </p>
        </div>
      </div>
    </RoutePageAnimation>
  );
};

export default Credits;
