import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users.jsx";
import Form from "./Form.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form></Form>,
  },
  {
    path: "/users",
    element: <Users></Users>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
