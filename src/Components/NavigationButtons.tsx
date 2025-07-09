// import { useEffect, useRef, useState } from "react";
// import NavigationButton from "./NavigationButton";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Icons for menu toggle

// const buttons = [
//   { name: "Home", path: "/" },
//   { name: "About Me", path: "/about_me" },
//   { name: "Work Experience", path: "/work_experience" },
//   { name: "Personal Projects", path: "/personal_projects" },
//   { name: "Website Credit", path: "/credits" },
//   { name: "Contact Me", path: "/contact_me" },
// ];

// const NavigationButtons = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false); // Hamburger menu toggle

//   // Find the index of the current path to set as initial selected value
//   const getInitialIndex = () => {
//     const index = buttons.findIndex((btn) => btn.path === location.pathname);
//     return index !== -1 ? index + 1 : 1; // Default to 1 if not found
//   };

//   const [selected, setSelected] = useState(getInitialIndex);
//   const isFirstRender = useRef(true);

//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       console.log("first render - no navigation");
//       return;
//     }

//     const selectedButton = buttons[selected - 1]; // Adjust for 1-based index
//     if (selectedButton) {
//       navigate(selectedButton.path);
//       console.log(`Navigating to ${selectedButton.name}`);
//     }
//   }, [selected]);

//   return (
//     <>
//       {/* Mobile & Tablet Navigation Bar (Visible on md and below) */}
//       <div className="lg:hidden fixed top-0 left-0 w-full bg-[#1D1522]/70 backdrop-blur-md p-3 flex justify-between items-center z-50 shadow-md">
//         <h2 className="text-white text-xl">Menu</h2>
//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? (
//             <X className="text-white" size={30} />
//           ) : (
//             <Menu className="text-white" size={30} />
//           )}
//         </button>
//       </div>

//       {/* Mobile & Tablet Dropdown Menu */}
//       {isOpen && (
//         <div className="lg:hidden fixed top-[50px] left-0 w-full bg-[#1D1522]/90 backdrop-blur-lg p-4 flex flex-col gap-3 shadow-lg z-50">
//           {buttons.map((button, index) => (
//             <button
//               key={index + 1}
//               className={`text-lg p-2 text-white ${
//                 selected === index + 1 ? "text-amber-100 font-bold" : ""
//               }`}
//               onClick={() => {
//                 setSelected(index + 1);
//                 setIsOpen(false);
//               }}
//             >
//               {button.name}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Desktop Navigation (Only visible on lg and larger screens) */}
//       {/* <div className="hidden lg:flex z-50 fixed right-5 top-1/2 -translate-y-1/2">
//         <div className="flex flex-col items-center bg-[#1D1522]/70 backdrop-blur-md px-1 py-1.5 rounded-xl shadow-lg transition-all duration-300">
//           {buttons.map((button, index) => (
//             <NavigationButton
//               key={index + 1}
//               text={button.name}
//               index={index + 1}
//               isSelected={selected === index + 1}
//               setSelected={setSelected}
//             />
//           ))}
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default NavigationButtons;

import { useEffect, useRef, useState } from "react";
// import NavigationButton from "./NavigationButton";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const buttons = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about_me" },
  { name: "Work Experience", path: "/work_experience" },
  { name: "Personal Projects", path: "/personal_projects" },
  { name: "Website Credit", path: "/credits" },
  { name: "Contact Me", path: "/contact_me" },
];

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getInitialIndex = () => {
    const index = buttons.findIndex((btn) => btn.path === location.pathname);
    return index !== -1 ? index + 1 : 1;
  };

  const [selected, setSelected] = useState(getInitialIndex);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const selectedButton = buttons[selected - 1];
    if (selectedButton) navigate(selectedButton.path);
  }, [selected]);

  return (
    <>
      {/* Top Header Bar (all screens) */}
      <div className="fixed top-0 left-0 w-full bg-[#1D1522]/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center z-50 shadow-lg border-b border-amber-100/10">
        <h1 className="text-amber-100 text-xl md:text-2xl font-bold tracking-wide">
          Muhammad Moeez | {`${buttons[selected - 1].name}`}
        </h1>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop nav (visible on lg+) */}
        <div className="hidden lg:flex gap-6">
          {buttons.map((button, index) => (
            <button
              key={index + 1}
              className={`text-white transition-all text-base px-2 py-1 border-b-2 ${
                selected === index + 1
                  ? "border-amber-100 text-amber-100 font-semibold"
                  : "border-transparent hover:border-amber-100/50"
              }`}
              onClick={() => setSelected(index + 1)}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed top-[70px] left-0 w-full bg-[#1D1522]/90 backdrop-blur-lg p-4 flex flex-col gap-3 shadow-lg z-40">
          {buttons.map((button, index) => (
            <button
              key={index + 1}
              className={`text-lg p-2 text-white ${
                selected === index + 1 ? "text-amber-100 font-bold" : ""
              }`}
              onClick={() => {
                setSelected(index + 1);
                setIsOpen(false);
              }}
            >
              {button.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default NavigationButtons;
