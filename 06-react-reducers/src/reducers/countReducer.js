import { TYPES } from "../actions/countActions";

export const countInitialState = {
  count: 0,
};

export const countInit = (initialState) => {
  return {
    count: initialState.count + 100,
  };
};

export function countReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.RESET:
      return countInitialState;
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
