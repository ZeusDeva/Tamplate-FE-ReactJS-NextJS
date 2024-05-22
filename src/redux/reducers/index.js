import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import auth, { initialState as authInitial } from "./auth";
import data, { initialState as dataInitial } from "./data";
// import dataId, { initialState as dataIdInitial } from "./dataId";

export const initialState = {
  auth: authInitial,
  data: dataInitial,
  // dataId: dataIdInitial,
};

const appReducer = combineReducers({
  auth,
  data,
  // dataId,
});

const reducers = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  }
  return appReducer(
    action.type === "LOGOUT_SUCCESS" ? initialState : state,
    action
  );
};

export default reducers;
