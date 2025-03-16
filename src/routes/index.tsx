import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/appLayout";
import NotFoundView from "../pages/404/notFoundView";
import { JSX } from "react";
import AuthLayout from "../layouts/authLayout";
import LoginView from "../pages/auth/Login";
import HomeView from "../pages/home/HomeView";
import HistoryView from "../pages/history/HistoryView";
import ProfileView from "../pages/profile/ProfileView";

export default function AppRouters() {
  const routers: { path: string; element: JSX.Element }[] = [];
  const authRouters: { path: string; element: JSX.Element }[] = [
    {
      path: "/login",
      element: <LoginView />,
    },
  ];

  const mainRouters: { path: string; element: JSX.Element }[] = [
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/profiles",
      element: <ProfileView />,
    },
    {
      path: "/histories",
      element: <HistoryView />,
    },
  ];

  // const { getToken } = useToken();

  const isAuth = true;

  if (isAuth) {
    routers.push(...mainRouters);
  } else {
    routers.push(...authRouters);
  }

  const appRouters = createBrowserRouter([
    {
      path: "/",
      element: isAuth ? <AppLayout /> : <AuthLayout />,
      errorElement: <NotFoundView />,
      children: routers,
    },
  ]);

  return <RouterProvider router={appRouters} />;
}
