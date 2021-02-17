export const plusAction = (amount) => {
  return {
    type: 'PLUS',
    payload: amount,
  }
};

const counter = (state = {value: 0}, action) => {
  switch (action.type) {
    case 'PLUS':
      return {
      ...state,
      value: state.value + action.payload,
    }
    default: return state
  }
};

export default counter;
