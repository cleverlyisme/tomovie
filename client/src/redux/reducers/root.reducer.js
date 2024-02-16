import { combineReducers } from "redux";
import loadingReducer from "./loading.reducer";
// import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  //   user: userReducer,
});

export default rootReducer;
