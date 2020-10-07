import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import formVisibleReducer from "./form-visible-reducer";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer,
  
});

export default rootReducer;
