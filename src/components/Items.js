import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Donate } from "./DonateItem";

const Items = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <h2>
              <Link to={`/items/${item.id}`}>Closet item: {item.itemName}</Link>
            </h2>
            <p>Category: {item.category}</p>
            <p>
              {" "}
              <Donate />{" "}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ items }) => ({
  items,
});

export default connect(mapStateToProps)(Items);
