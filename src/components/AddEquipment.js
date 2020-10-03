import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from "react-redux-firebase";

function NewItemForm(props) {
  const firestore = useFirestore();
  function addItemToFirestore(event) {
    event.preventDefault();

    props.onNewItemCreation();

    return firestore.collection("items").add({
      name: event.target.name.value,
      description: event.target.description.value,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addItemToFirestore}
        buttonText="add Equipment"
      />
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
};

export default NewItemForm;
