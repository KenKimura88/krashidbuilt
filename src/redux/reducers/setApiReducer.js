import * as setApiActions from '../actions/setApiActions';

const initialState = {
  apiState: false
};

export function setApiReducer(state = initialState, action) {
  switch (action.type) {
    case setApiActions.SET_APISTATE: {
      return {
        ...state,
        apiState: action.apiState
      };
    }
    default:
      return state;
  }
}
