import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/ui/Layout";
// import ErrorPage from "../pages/ErrorPage";
import InscriptionLookup from "./pages/InscriptionLookup";
import InscriptionDetails from "./pages/InscriptionDetails";

export enum ROUTES {
  inscriptionLookup = "/",
  inscriptionDetails = "/:inscriptionId",
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: ROUTES.inscriptionLookup,
        element: <InscriptionLookup />,
      },
      {
        path: ROUTES.inscriptionDetails,
        element: <InscriptionDetails />,
      },
    ],
  },
]);
