import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Products from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
          path:"/cart",
          element: <Cart />
      }
    ],
  },
]);

export default router;
