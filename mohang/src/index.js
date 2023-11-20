import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Mypage from "./pages/Mypage";
import Bookmark from "./pages/Bookmark";
import MyEvent from "./pages/MyEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
