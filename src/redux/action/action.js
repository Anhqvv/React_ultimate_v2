import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_LOGIN_SUCCESS
} from './type'

export const increaseCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREMENT
  }
}

export const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS,
    payload: data
  }
}


