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
        openCard={(offer) => {
          // eslint-disable-next-line no-console
          console.log(offer);
        }}
      />,
      document.querySelector(`#root`)
  );
};

init();
