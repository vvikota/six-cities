import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const init = () => {
  const settings = {
    userName: `vik792@gmail.com`,
  };

  ReactDOM.render(
      <App
        userName={settings.userName}
        offers={offers}
      />,
      document.querySelector(`#root`)
  );
};

init();