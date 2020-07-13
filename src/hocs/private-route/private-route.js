import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  // console.log(auth);
  const {component: Component, auth, optional, params} = props;
  return <Route
    {...optional}
    render={() =>
      auth !== true ? (
        <Component {...params}/>
      ) : (
        <Redirect to="/login" />
      )
    }
  />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  optional: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default PrivateRoute;
