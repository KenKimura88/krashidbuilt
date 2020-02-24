import * as ParkActions from '../actions/parkActions';

const initialState = {
  parkSpot: [],
  withAPI: false,
  isFetching: false
};

export function parkReducer(state = initialState, action) {
  switch (action.type) {
    case ParkActions.GETPARK_SUCCESS: {
      return {
        ...state,
        isFetching: action.isFetching,
        parkSpot: action.parkSpot
      };
    }
    case ParkActions.GETPARK_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        parkSpot: action.parkSpot
      };
    case ParkActions.GETPARK_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ParkActions.UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        parkSpot: action.parkSpot
      };
    case ParkActions.UPDATE_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ParkActions.UPDATE_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
}
