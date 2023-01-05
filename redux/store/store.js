import thunk from "redux-thunk";
import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  );

export default store;