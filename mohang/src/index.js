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
import RegisterForm from "./pages/RegisterForm";

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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/myEvent",
        element: <MyEvent />,
      },
      {
        path: "/event/regist",
        element: <RegisterForm />,
      },
      {
        path: "/today",
        element: <TodayEvents />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
