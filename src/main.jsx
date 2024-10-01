import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store.js";
// import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="dark:bg-black">
          <App />
        </div>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
