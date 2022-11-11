import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./styles/makemaker.css";
import ScrollToTop from "./hooks/scrollToTop";
import { IconContextProvider } from "./services/context/OnIconContext";
import store from "./services/redux/app/store";
import { AwesomeContextProvider } from "./services/context/stylediconcontext/OnStyledIconContext";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Provider store={store}>
          <IconContextProvider>
            <AwesomeContextProvider>
              <PersistGate persistor={persistor}>
                <Toaster />
                <App />
              </PersistGate>
            </AwesomeContextProvider>
          </IconContextProvider>
        </Provider>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
