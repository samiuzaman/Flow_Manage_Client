import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Context/AuthProvider";
import { ToastWrapper } from "keep-react";
import { ThemeProvider } from "./Context/Theme-provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={routes}></RouterProvider>
        </AuthProvider>
        <ToastWrapper richColors={true} />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
