import {
  FETCH_USER_LOGIN_SUCCESS,
  FETCH_USER_LOGOUT_SUCCESS,
} from "../actions/user.action";

const INITIAL_STATE = {
  user: {
    id: "",
    role: "",
  },
  isAuthenticated: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action?.payload,
        },
        isAuthenticated: true,
      };

    case FETCH_USER_LOGOUT_SUCCESS:
      return {
        ...state,
        account: {
          ...state.user,
          id: "",
          role: "",
        },
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userReducer;
