import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

import { UserProvider } from "./context/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
