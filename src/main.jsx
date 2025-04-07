import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CartProvider>
        <App />
        <Toaster />
      </CartProvider>
    </StrictMode>
  </BrowserRouter>
);
