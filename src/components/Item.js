import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked()}>
        <h3>{props.name}</h3>
        <hr />
        img here
        <p>{props.description}</p>
        <h2>{props.availability}</h2>
      </div>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  availability: PropTypes.string,
  whenItemClicked: PropTypes.func,
};

export default Item;
