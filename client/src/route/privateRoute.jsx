import { children } from "react";
import Layout from "../components/Layouts/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateGard from "./PrivateGard";
import PasswordChange from "../pages/auth/PasswordChange";
import ProfileSetting from "../pages/auth/ProfileSetting";

// create public route
export const privateRoute = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            children:[
              {
                path:"profile-settings",
                element: <ProfileSetting/>
              },
              {
                path: "password-change",
                element: <PasswordChange/>
              }
            ]
          },
        ],
      },
    ],
  },
];
