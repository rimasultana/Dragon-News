import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut";
import NotFound from "../Pages/NotFound";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },

      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
