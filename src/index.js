import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    userName: `vik792@gmail.com`,
  };

  const titles = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ];

  ReactDOM.render(
      <App
        userName={settings.userName}
        cardTitles={titles}
      />,
      document.querySelector(`#root`)
  );
};

init();
