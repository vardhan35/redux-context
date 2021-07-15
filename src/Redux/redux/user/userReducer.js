import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
} from "./userActionsType";

const initialState = {
  loading: false,
  users: [],
  err: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        err: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
