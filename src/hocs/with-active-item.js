import React from 'react';
// import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hoverItemInfo: null,
      };
    }

    render() {
      return <Component
        {...this.props}
        hoverItem={(info) => this.setState({
          hoverItemInfo: info
        })}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
