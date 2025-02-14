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

const Layout = () => {
  return (
    <div>
      <BackgroundSky />
      <Outlet /> {/* This will render the child routes */}
      <div className="flex justify-center items-center flex-col  z-10">
        <NavigationButtons />
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
      { path: "/contact_me", element: <Contact /> },
      { path: "/credits", element: <Credits /> },
      { path: "/personal_projects", element: <PersonalProjects /> },
      { path: "/work_experience", element: <WorkExperience /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackgroundSky />

    <RouterProvider router={router} />
  </StrictMode>
);
