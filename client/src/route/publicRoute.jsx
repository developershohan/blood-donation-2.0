import { children } from "react";
import Layout from "../components/Layouts/Layout";
import Dashboard from "../pages/dashboard/Dashboard";


// create public route
export const publicRoute = [{

    element: <Layout />,
    children: [{
        path: "/dashboard",
        element: <Dashboard />

    }]

}]