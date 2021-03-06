import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {
  userInformationProp
} from "../../interface-prop-types/interface-prop-types.js";

const Header = (props) => {

  const {userInformation, isAuthorizationRequired} = props;
  // console.log(userInformation)

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">

                {isAuthorizationRequired ?
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link> :

                  <Link className="header__nav-link header__nav-link--profile" to="/favorite">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">{userInformation.email}</span>
                  </Link>
                }

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  userInformation: userInformationProp,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default Header;

