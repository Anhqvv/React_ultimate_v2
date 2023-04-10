import axios from 'axios'
import {
  INCREMENT,
  DECREMENT,
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


