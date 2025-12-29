import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Article from "./pages/Article";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
      { path: "article/:id", element: <Article /> },
    ],
  },
]);
