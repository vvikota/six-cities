import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    userName: `vik792@gmail.com`,
  };

  ReactDOM.render(
      <App
        userName={settings.userName}
      />,
      document.querySelector(`#root`)
  );
};

init();
