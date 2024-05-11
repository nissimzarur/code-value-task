import { AppLayout } from "@components/customized";
import { ErrorPage, HomePage } from "@pages/index";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const routes = {
  root:'/',
  products: "/products/*",
  error: "/error",
};

export const appRouter = createBrowserRouter([
  {
    path: routes.root,
    element:<Navigate to="/products" />
  },
  {
    element: <AppLayout />,
    children: [
      { path: routes.products, element: <HomePage />  },
      { path: routes.error, element: <ErrorPage /> },
    ],
  },
]);
