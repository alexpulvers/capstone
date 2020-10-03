import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";

function EquipmentList(props) {
  useFirestoreConnect([{ collection: "items" }]);

  const items = useSelector((state) => state.firestore.ordered.items);

  if (isLoaded(items)) {
    return (
      <React.Fragment>
        <hr />
        {items.map((item) => {
          return (
            <Item
              whenItemClicked={props.onItemSelection}
              name={item.name}
              description={item.description}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </React.Fragment>
    );
  } else {
    return <React.Fragment>Loading...</React.Fragment>;
  }
}

EquipmentList.propTypes = {
  onItemSelection: PropTypes.func,
};

export default EquipmentList;
