export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const incrementAC = () => ({ type: INCREMENT });
export const decrementAC = () => ({ type: DECREMENT });
export const asyncIncrementAC = () => ({ type: ASYNC_INCREMENT });
export const asyncDecrementAC = () => ({ type: ASYNC_DECREMENT });
