import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: `test@test.ru`,
      password: `pass`,
    };

    this._logIn = this._logIn.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _logIn(e) {
    e.preventDefault();
    this.props.onSignInButtonClick({
      email: this.state.email,
      password: this.state.password,
    });
  }

  _onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {email, password} = this.state;
    return (
      <>
         <header className="header">
           <div className="container">
             <div className="header__wrapper">
               <div className="header__left">
                 <a className="header__logo-link" href="main.html">
                   <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                 </a>
               </div>
               {/* <nav className="header__nav">
                 <ul className="header__nav-list">
                   <li className="header__nav-item user">
                     <a className="header__nav-link header__nav-link--profile" href="#">
                       <div className="header__avatar-wrapper user__avatar-wrapper">
                       </div>
                       <span className="header__login">Sign in</span>
                     </a>
                   </li>
                 </ul>
               </nav> */}
             </div>
           </div>
         </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    value={email}
                    onChange={this._onChange}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    value={password}
                    onChange={this._onChange}
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                  onClick={this._logIn}
                ><Link to="/">Sign in </Link></button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

SignIn.propTypes = {
  onSignInButtonClick: PropTypes.func.isRequired,
  changeAuthorizationStatus: PropTypes.func.isRequired,
};

export default SignIn;
