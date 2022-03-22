import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createItem } from "../store/currItems";

class CreateItem extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      category: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createItem({ ...this.state });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { itemName, category } = this.state;
    const { handleSubmit } = this;

    return (
      <form id="item-form" onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item:</label>
        <input name="itemName" onChange={this.handleChange} value={itemName} />

        <label htmlFor="category">Category:</label>
        <input name="category" onChange={this.handleChange} value={category} />

        <button type="add">Add</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createItem: (item) => dispatch(createTodo(item, history)),
});

export default connect(null, mapDispatchToProps)(CreateItem);
