import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import { Outlet } from "react-router-dom";

const token = localStorage.getItem("token");

const router = createBrowserRouter([
  path: "/",
  Element:(
    token ? <App /> : <Login />
  )
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
