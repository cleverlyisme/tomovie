import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "rc-drawer/assets/index.css";

import "./index.css";
import App from "./App";
import { DrawerContext } from "./contexts/drawer.context";
import { AppContextProvider } from "./contexts/app.context";
import ToastContainer from "./components/Notifications/ToastContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <DrawerContext>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </DrawerContext>
  </AppContextProvider>
);

reportWebVitals();
