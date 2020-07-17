import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";

const privateRoute = (Component) => {
  class PrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {isAuthorizationRequired, optional, params} = this.props;
      return <Route
        {...optional}
        render={() =>
          isAuthorizationRequired === true ? (
            <Redirect to="/login" />
          ) : (
            <Component {...params}/>
          )
        }
      />;
    }
  }

  PrivateRoute.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
    optional: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
  };

  return PrivateRoute;
};

export default privateRoute;
