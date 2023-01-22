import { useState } from "react";
import Layout from "./componentes/Layout";
import MyContext from "./Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contacto />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  const [store, setStore] = useState({ name: "John Doe" });
  return (
    <MyContext.Provider value={{ store, setStore }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
