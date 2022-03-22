import React, { Component } from "react";
import { connect } from "react-redux";

class Donate extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button>Donate this item</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  donateItem: (item) => dispatch(deleteItem(item, history)),
});

export default connect(null, mapDispatchToProps)(Donate);
