import Immutable from 'immutable';

const initialState = Immutable.fromJS({ loading: false });

const actionsMap = {
  changeLoader(state, action) {
    return state.update('loading', loading => action.loadingState);
  },
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
