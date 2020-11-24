import {
  SCHEDULE_CREATE_REQUEST,
  SCHEDULE_CREATE_SUCCESS,
  SCHEDULE_CREATE_FAIL,
  SCHEDULE_CREATE_RESET,
  SCHEDULE_LIST_REQUEST,
  SCHEDULE_LIST_SUCCESS,
  SCHEDULE_LIST_FAIL,
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

export const scheduleListReducer = (state = {}, action) => {
  switch (action.type) {
    case SCHEDULE_LIST_REQUEST:
      return { ...state, loading: true }
    case SCHEDULE_LIST_SUCCESS:
      return { loading: false, success: true, schedule: action.payload }
    case SCHEDULE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
