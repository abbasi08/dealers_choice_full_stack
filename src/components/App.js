import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import CreateItem from "./CreateItem";
import { fetchItems } from "../store/currItems";

class App extends Component {
  componentDidMount() {
    this.state.load();
  }

  render() {
    return (
      <Router>
        <div id="main">
          <h1>How to Declutter Your Closet</h1>
          <h2>Step 1: Let's Assess </h2>
          <h3>What's already in your closet?</h3>
          <CreateItem />

          <h3>Your Closet:</h3>
          <fetchItems />

          <h2>Step 2: Fill in the Gaps </h2>
          <h3>
            Are you missing any key pieces from your closet? What you need to
            buy?
          </h3>
          <button>Add item</button>
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = ({ items }) => ({
//   items,
// });

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//render(<App />, document.querySelector("#root"));
