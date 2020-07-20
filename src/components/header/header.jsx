import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = (props) => {

  const {userInformation, isAuthorizationRequired} = props;

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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      // style={{backgroundImage: `url('` + avatarUrl + `')`}}
                    ></div>
                    <span className="header__user-name user__name">{userInformation.email}</span>
                  </a>
                }
                <Link className="header__nav-link header__nav-link--profile" to="/favorite">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Private</span>
                </Link>

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  userInformation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default Header;

