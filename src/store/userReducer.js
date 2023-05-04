export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export const setUsersAC = (payload) => ({ type: SET_USERS, payload });
export const fetchUsersAC = () => ({ type: FETCH_USERS });
