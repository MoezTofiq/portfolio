import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.tsx";
import Contact from "./Pages/Contact/Contact.tsx";
import Credits from "./Pages/Credites/Credites.tsx";
import PersonalProjects from "./Pages/PersonalProjects/PersonalProjects.tsx";
import WorkExperience from "./Pages/WorkExperience/WorkExperience.tsx";
import BackgroundSky from "./Components/backgroundSky.tsx";
import Home from "./Pages/Home/Home.tsx";
import NavigationButtons from "./Components/NavigationButtons.tsx";
import AboutMe from "./Pages/AboutMe/AboutMe.tsx";
import ShootingStarTrail from "./Components/ShootingStarTrail.tsx";
import { AnimatePresence } from "motion/react";

const AnimatedOutlet = () => {
  return (
    <AnimatePresence mode="wait">
      <Outlet />
    </AnimatePresence>
  );
};

const Layout = () => {
  return (
    <div>
      <BackgroundSky />
      <ShootingStarTrail />
      <div className="flex justify-center items-center flex-col  z-10">
        <NavigationButtons />
      </div>
      <div className="relative  @sm:pt-20">
        <AnimatedOutlet />
      </div>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about_me", element: <AboutMe /> },
      { path: "contact_me", element: <Contact /> },
      { path: "credits", element: <Credits /> },
      { path: "personal_projects", element: <PersonalProjects /> },
      { path: "work_experience", element: <WorkExperience /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
