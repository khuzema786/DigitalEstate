import {
  SCHEDULE_CREATE_REQUEST,
  SCHEDULE_CREATE_SUCCESS,
  SCHEDULE_CREATE_FAIL,
  SCHEDULE_CREATE_RESET,
} from '../constants/scheduleConstants'

export const scheduleReducer = (state = {}, action) => {
  switch (action.type) {
    case SCHEDULE_CREATE_REQUEST:
      return { ...state, loading: true }
    case SCHEDULE_CREATE_SUCCESS:
      return { loading: false, success: true }
    case SCHEDULE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case SCHEDULE_CREATE_RESET:
      return {}
    default:
      return state
  }
}
