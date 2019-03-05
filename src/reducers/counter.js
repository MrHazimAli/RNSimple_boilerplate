import initialState from './initialState';

const actionsMap = {
  increment(state) {
    return state + 1;
  },
  decrement(state) {
    return state - 1;
  },
};

export default (state = initialState.counter, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
