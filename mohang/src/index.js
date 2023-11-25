import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Mypage from "./pages/Mypage";
import Bookmark from "./pages/Bookmark";
import MyEvent from "./pages/MyEvent";
import Home from "./pages/Home";
import TodayEvents from "./pages/TodayEvents";
import UnivCert from "./pages/UnivCert";
import RegisterForm from "./pages/RegisterForm";
import EventDetail from "./pages/EventDetail";
import CalendarPage from "./pages/CalendarPage";
import TodayEventsLayout from "./pages/TodayEventsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "mypage",
        element: <Mypage />,
      },
      {
        path: "bookmark",
        element: <Bookmark />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "myEvent",
        element: <MyEvent />,
      },
      {
        path: "event/regist",
        element: <RegisterForm />,
      },
      {
        path: "today",
        element: <TodayEventsLayout />,
      },
      {
        path: "univcert",
        element: <UnivCert />,
      },
      {
        path: "event/:id",
        element: <EventDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
