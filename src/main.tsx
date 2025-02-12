import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.tsx";
import LandingPage from "./Pages/LandingPage/LandingPage.tsx";
import Contact from "./Pages/Contact/Contact.tsx";
import Credits from "./Pages/Credites/Credites.tsx";
import PersonalProjects from "./Pages/PersonalProjects/PersonalProjects.tsx";
import WorkExperience from "./Pages/WorkExperience/WorkExperience.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/credits",
    element: <Credits></Credits>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/personalProjects",
    element: <PersonalProjects></PersonalProjects>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/workExperience",
    element: <WorkExperience></WorkExperience>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
