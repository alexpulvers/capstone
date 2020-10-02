import React from "react";
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux";
import EquipmentList from "./EquipmentList";
import EquipmentDetail from "./EquipmentDetail";
import NewItemForm from "./AddEquipment";
import EditItemForm from "./EditEquipmentForm";

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        selectedItem: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };
  handleAddingNewItemToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  };

  handleChangingSelectedItem = (id) => {
    this.props.firestore.get({ collection: "items", doc: id }).then((item) => {
      const firestoreItem = {
        name: item.get("name"),
        description: item.get("description"),
        availability: item.get("availability"),
      };
      this.setState({ selectedItem: firestoreItem });
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingItemInList = () => {
    this.setState({
      editing: false,
      selectedItem: null,
    });
  };

  handleDeletingItem = (id) => {
    this.props.firestore.delete({ collection: "items", doc: id });
    this.setState({ selectedItem: null });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h3>You must be signed in to access the snakes.</h3>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      if (this.state.editing) {
        currentlyVisibleState = (
          <EditItemForm
            item={this.state.selectedItem}
            onEditItem={this.handleEditingItemInList}
          />
        );
        buttonText = "Return to Equipment List";
      } else if (this.state.selectedItem != null) {
        currentlyVisibleState = (
          <EquipmentDetail
            item={this.state.selectedItem}
            onClickingDelete={this.handleDeletingItem}
            onClickingEdit={this.handleEditClick}
          />
        );
        buttonText = "Return to Home";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = (
          <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
        );
        buttonText = "Return to Equipment List";
      } else {
        currentlyVisibleState = (
          <EquipmentList onItemSelection={this.handleChangingSelectedItem} />
        );
        buttonText = "Add buffalo";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

SiteControl = connect(mapStateToProps)(SiteControl);

export default withFirestore(SiteControl);
