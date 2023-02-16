import React from "react";
import ReactDOM from "react-dom";
import { components } from "./components";

window.React = React;
window.ReactDOM = ReactDOM;
window.Components = components;

if (
  "ReactJsAsyncInit" in window &&
  typeof window.ReactJsAsyncInit === "function"
) {
  window.ReactJsAsyncInit();
}
