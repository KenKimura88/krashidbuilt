export const SET_APISTATE = 'SET_APISTATE';

function setApiState(apiState) {
  return {
    type: SET_APISTATE,
    apiState: apiState
  };
}

export function set(apiState) {
  return (dispatch) => {
    dispatch(setApiState(apiState));
  };
}
