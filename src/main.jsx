import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import QuizPage from "./components/pages/QuizHomePage";
import Courses from "./components/Courses";
import HomePage from "./components/pages/HomePage";
import Contact from "./components/Contact";
import CourseDetails from "./components/pages/CourseDetails";

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
        path:"/quizes",
        element: <QuizPage/>
      }
    ],
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
