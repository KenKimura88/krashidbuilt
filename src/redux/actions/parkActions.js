import fetch from 'cross-fetch';
import { hostUrl } from '../../shared/Config';
import { sample } from '../../utils/constant';
import { set } from './setApiActions';

export const GETPARK_REQUEST = 'GETPARK_REQUEST';
export const GETPARK_FAILURE = 'GETPARK_FAILURE';
export const GETPARK_SUCCESS = 'GETPARK_SUCCESS';

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

function requestGetPark() {
  return {
    type: GETPARK_REQUEST,
    isFetching: true
  };
}

function failureGetPark(sample) {
  return {
    type: GETPARK_FAILURE,
    isFetching: false,
    parkSpot: sample
  };
}

function successGetPark(parkSpot) {
  return {
    type: GETPARK_SUCCESS,
    isFetching: true,
    parkSpot: parkSpot
  };
}

function requestUpdate() {
  return {
    type: UPDATE_REQUEST,
    isFetching: true
  };
}

function failureUpdate() {
  return {
    type: UPDATE_FAILURE,
    isFetching: false
  };
}

function successUpdate(parkSpot) {
  return {
    type: UPDATE_SUCCESS,
    isFetching: false,
    parkSpot: parkSpot
  };
}

export function get() {
  return (dispatch) => {
    dispatch(requestGetPark());
    return fetch(hostUrl + '/get', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'get'
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.success === false) {
          dispatch(failureGetPark(sample));
          set(false);
        } else {
          dispatch(successGetPark(JSON.parse(json.result[0].spots)));
        }
      })
      .catch((error) => {
        console.log('Server error');
        dispatch(failureGetPark(sample));
        set(false);
      });
  };
}

export function update(updatedSpots, apiState) {
  return (dispatch) => {
    if (apiState) {
      dispatch(requestUpdate());
      return fetch(hostUrl + '/update', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(updatedSpots)
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.success === false) dispatch(failureUpdate());
          else {
            dispatch(successUpdate(JSON.parse(json.result)));
          }
        });
    } else {
      dispatch(successUpdate(updatedSpots));
    }
  };
}
