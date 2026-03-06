import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

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
        path: "updateCoffee/:id",
        Component: UpdateCoffee,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3000/coffee/${params.id}`);
          return res.json();
        },
      },
      {
        path: "coffeeDetails/:id",
        Component: CoffeeDetails,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3000/coffee/${params.id}`);
          return res.json();
        },
      },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
