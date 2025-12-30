import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "article/:id", element: <Article /> },
      {
  path: "category/:type",
  element: <Category />,
},

      { path: "*", element: <NotFound /> },
    ],
  },
]);
