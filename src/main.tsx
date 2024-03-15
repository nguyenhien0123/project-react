import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "react-awesome-slider/dist/styles.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./feature/Layout/Root";
import Clothing from "./router/Clothing";
import Home from "./router/Home";
import Product from "./router/Product";
import Hat from "./Hat";

const client = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
      {
        path: "clothing",
        element: <Clothing />,
      },
      {
        path: "clothing/:id",
        element: <Clothing />,
      },
      {
        path: "hat",
        element: <Hat />,
      },
    ],
  },
]);
const theme = extendTheme({});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
