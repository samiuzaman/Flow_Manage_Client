import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Context/AuthProvider";
import { ToastWrapper } from "keep-react";
import { ThemeProvider } from "./Context/Theme-provider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={routes}></RouterProvider>
            <Toaster position="top-center" reverseOrder={false} />
          </AuthProvider>
          <ToastWrapper richColors={true} />
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
