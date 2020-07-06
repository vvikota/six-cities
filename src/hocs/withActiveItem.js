import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hoverItemInfo: null,
      };
    }

    render() {
      // console.log(this.state.hoverItemInfo)
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
