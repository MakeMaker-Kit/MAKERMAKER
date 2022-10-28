import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./styles/makemaker.css";
import ScrollToTop from "./hooks/scrollToTop";
import { IconContextProvider } from "./services/context/OnIconContext";
import store from "./services/redux/app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Provider store={store}>
          <IconContextProvider>
            <App />
          </IconContextProvider>
        </Provider>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
