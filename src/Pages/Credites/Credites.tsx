import RoutePageAnimation from "../../Components/animations/RoutePageAnimation";

const Credits = () => {
  return (
    <RoutePageAnimation>
      <div className="flex flex-col items-center justify-start w-full h-full text-white">
        <div className="bg-white/10 backdrop-blur-lg shadow-lg sm:rounded-lg sm:overflow-hidden m-5 p-6 w-full max-w-3xl border border-white/20">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-semibold text-white">
              Website Technology & Inspirations
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              A heartfelt appreciation for the technologies and inspirations
              that shaped this portfolio.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="mt-6 border-t border-white/20">
            <dl className="divide-y divide-white/20">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-white">Technology</dt>
                <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0 space-y-2">
                  <li>
                    <a
                      href="https://react.dev/"
                      className="text-blue-300 hover:text-blue-400 transition-all duration-300"
                    >
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://reactrouter.com/6.29.0"
                      className="text-blue-300 hover:text-blue-400 transition-all duration-300"
                    >
                      React Router Dom V6.29.0
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="text-blue-300 hover:text-blue-400 transition-all duration-300"
                    >
                      Tailwind CSS V4.0
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://motion.dev/"
                      className="text-blue-300 hover:text-blue-400 transition-all duration-300"
                    >
                      Motion (for animations)
                    </a>
                  </li>
                </dd>
              </div>
            </dl>
          </div>

          {/* Design Inspirations */}
          <div className="mt-6 border-t border-white/20">
            <dl className="divide-y divide-white/20">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-white">
                  Design Inspirations
                </dt>
                <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0 space-y-2">
                  <li>
                    <a
                      href="https://www.wehackutd.com/"
                      className="text-blue-300 hover:text-blue-400 transition-all duration-300"
                    >
                      WeHack Landing Page (color palette & overall aesthetic)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.microsoft.com/en-us/edge/welcome"
                      className="text-blue-300 hover:text-blue-400 transition-all duration-300"
                    >
                      Microsoft Edge Welcome Page (animation & user experience)
                    </a>
                  </li>
                </dd>
              </div>
            </dl>
          </div>

          {/* Assets Used */}
          <div className="mt-6 border-t border-white/20">
            <dl className="divide-y divide-white/20">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-white">
                  Assets & Icons
                </dt>
                <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0 space-y-2">
                  <li>
                    <a
                      href="https://www.onlinewebfonts.com/icon/422506"
                      className="text-blue-300 hover:text-blue-400 transition-all duration-300"
                    >
                      About Me Icon
                    </a>
                  </li>
                </dd>
              </div>
            </dl>
          </div>

          <p className="text-sm text-center text-gray-400 mt-6">
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
