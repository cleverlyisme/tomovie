import { SET_LOADING } from "../actions/loading.action";

const INITIAL_STATE = {
  isLoading: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default loadingReducer;
