import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("http://localhost:3000/coffees");
          return res.json();
        },
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee",
        Component: UpdateCoffee,
      },
      {
        path: "coffeeDetails/:id",
        Component: UpdateCoffee,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
