import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import QuizHomePage from "./components/pages/quiz/QuizHomePage";
import Courses from "./components/Courses";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import CourseDetails from "./components/CourseDetails";
import About from "./components/About";
import TermsAndConditionsApplute from "./components/pages/term-condition/TermCondition";
import PrivacyPolicy from "./components/pages/term-condition/PrivacyPolicy";
import BlogHome from "./components/pages/blog/BlogHomePage";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      ,
      {
        path: "/course/:id", //dynamic routes define
        element: <CourseDetails />,
      },
      {
        path: "/quizes",
        element: <QuizHomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <BlogHome />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditionsApplute />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
