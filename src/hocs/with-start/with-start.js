import React from 'react';

import {getData} from "../../reducer/data/selectors.js";
import {getCity} from "../../reducer/main/selectors.js";
import {getCities} from "../../reducer/data/selectors.js";
import {getCityOffers} from "../../reducer/data/selectors.js";
import {getCurrentOffer} from "../../reducer/data/selectors.js";
import {getNearOffers} from "../../reducer/data/selectors.js";
import {getComments} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getServerResponse} from "../../reducer/user/selectors.js";
import {getCurrentId} from "../../reducer/data/selectors.js";
import {ActionCreator as MainActionCreator} from "../../reducer/main/main.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {compose} from "recompose";

const withStart = (Component) => {
  class WithStart extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        {...this.props}
      />;
    }
  }

  return WithStart;
};

const mapStateToProps = (state, ownProps) => {
  const currentCity = (getCity(state) === `default` && getData(state)[0]) ?
    getData(state)[0].city.name :
    getCity(state);
  return Object.assign({}, ownProps, {
    city: currentCity,
    cityList: getCities(state),
    cityOffers: getCityOffers(state, currentCity),
    isAuthorizationRequired: getAuthorizationStatus(state),
    userInformation: getServerResponse(state),
    currentOfferId: getCurrentId(state),
    currentOffer: getCurrentOffer(state),
    hotelComments: getComments(state),
    nearOffers: getNearOffers(state, currentCity),
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(MainActionCreator.changeCity(city));
  },
  sendAuthorizationRequest: (data) => {
    dispatch(UserOperation.requiredAuthorization(data));
  },
  openDetailOffer: (id) => {
    dispatch(DataOperation.openDetailOffer(id));
  },
});

export {withStart};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStart
);


