import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import RootLayout from "./routes/RootLayout";
import Shop from "./routes/Shop";
import SingleProduct from "./routes/SingleProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
