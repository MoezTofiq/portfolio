const Credits = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden m-3 p-2">
        <div className="px-4 sm:px-0">
          <h3 className="text-base/7 font-semibold text-gray-900">
            Website Technology & Ideas
          </h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Technology & styling Ideas used to create this portfolio.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Technology
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <li>
                  <a
                    href="https://react.dev/"
                    className=" textUnderLine transition-all duration-300"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    href="https://reactrouter.com/6.29.0"
                    className=" textUnderLine transition-all duration-300"
                  >
                    React Router Dom V6.29.0
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className=" textUnderLine transition-all duration-300"
                  >
                    Tailwind V4.0
                  </a>
                </li>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Design Ideas
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <li>
                  <a
                    href="https://www.wehackutd.com/"
                    className=" textUnderLine transition-all duration-300"
                  >
                    WeHack Landing page (used for color pallet and over all
                    feel)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.microsoft.com/en-us/edge/welcome"
                    className=" textUnderLine transition-all duration-300"
                  >
                    MicroSoft Edge Welcome page (feel and animation)
                  </a>
                </li>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Assets used
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <li>
                  <a
                    href="https://www.onlinewebfonts.com/icon/422506"
                    className=" textUnderLine transition-all duration-300"
                  >
                    About Me Icon
                  </a>
                </li>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Credits;
