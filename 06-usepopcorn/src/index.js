import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={20} size={24} defaultRating={3} color={"blue"} /> */}
    <App />
  </React.StrictMode>
);
