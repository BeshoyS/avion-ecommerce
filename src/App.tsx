import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./redux";
import About from "./routes/About";
import Categories from "./routes/Categories";
import CategoryPage from "./routes/CategoryPage";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import RootLayout from "./routes/RootLayout";
import Shop from "./routes/Shop";
import ShoppingCart from "./routes/ShoppingCart";
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
        path: "categories",
        children: [
          {
            index: true,
            element: <Categories />,
          },
          {
            path: ":category",
            element: <CategoryPage />,
          },
        ],
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
