import { INCREMENT, DECREMENT, FETCH_USER_LOGIN_SUCCESS } from '../action/type'

const INITIAL_STATE = {
  account: {
    access_token: '',
    refresh_token: '',
    username: '',
    image: '',
    role: ''
  },
  isAuthenticated: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      console.log(action)
      return {
        ...state,
        acount: {
          access_token: action?.paload?.DT?.access_token,
          refresh_token: action?.paload?.DT?.refresh_token,
          username: action?.paload?.DT?.username,
          image: action?.paload?.DT?.image,
          role: action?.paload?.DT?.role
        },
        isAuthenticated: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}

export default userReducer
