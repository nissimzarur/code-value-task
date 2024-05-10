import { Layout } from "@components/customized";
import { AuthPage, ErrorPage, HomePage } from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const routes = {
  home: "/home",
  auth: "/auth",
  error: "/error",
};

export const appRouter = createBrowserRouter([
  {
    path: "*",
    element: <AuthPage />,
  },
  {
    element: <Layout />,
    children: [
      { path: routes.home, element: <HomePage /> },
      { path: routes.error, element: <ErrorPage /> },
    ],
  },
]);
