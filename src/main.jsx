import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Form.jsx";
import UpdateUsers from "./UpdateUsers.jsx";
import AllUsers from "./AllUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form></Form>,
  },
  {
    path: "/allUsers",
    element: <AllUsers></AllUsers>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/updateUsers/:id",
    element: <UpdateUsers></UpdateUsers>,
    loader: ({ params }) => {
      return fetch(`http://localhost:5000/users/${params.id}`);
    },
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
