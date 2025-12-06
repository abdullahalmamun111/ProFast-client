import "aos/dist/aos.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";

import Aos from "aos";
import { RouterProvider } from "react-router/dom";
import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";

Aos.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist max-w-7xl mx-auto px-[50px] py-[30px] bg-[#EAECED]">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
