import { lazy } from "react";
import { IRouterType } from '../types/types';
import { createBrowserRouter } from "react-router-dom";

const PrimaryPage = lazy(() => import("../pages/PrimaryPage"));
const SecondaryPage = lazy(() => import("../pages/SecondaryPage"));

const routes: IRouterType[] = [
  {
    title: "Home",
    path: "/",
    element: <PrimaryPage  />,
  },
  {
    title: "Country detail",
    path: "/country/:CountryName",
    element: <SecondaryPage  />,
  },
]

export const PAGE_DATA: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);