import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import formVisibleReducer from "./form-visible-reducer";
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './../middleware/middleware-logger';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer,
  
});

export default rootReducer;
