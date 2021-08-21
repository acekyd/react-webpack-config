import React from 'react';
import ReactDOM from 'react-dom';
import LoadableApp from "./LoadableApp";
import reportWebVitals from './reportWebVitals';

const rootId = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <LoadableApp />
  </React.StrictMode>,
  rootId
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./App", () => {
    const NextApp = require("./LoadableApp").default;
    ReactDOM.render(
      <React.StrictMode>
        <LoadableApp />
      </React.StrictMode>,
      rootId
    );
  });
}
