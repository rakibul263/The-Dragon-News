import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/Category News/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layouts/AuthLayout";
import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          try {
            const response = await fetch("/news.json");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          } catch (error) {
            console.error("Error loading news data:", error);
            throw new Error("Failed to load news data");
          }
        },
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: async () => {
          try {
            const response = await fetch("/news.json");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          } catch (error) {
            console.error("Error loading news data:", error);
            throw new Error("Failed to load news data");
          }
        },
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
export default router;
