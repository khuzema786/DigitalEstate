import axios from 'axios'
import {
  SCHEDULE_CREATE_REQUEST,
  SCHEDULE_CREATE_SUCCESS,
  SCHEDULE_CREATE_FAIL,
} from '../constants/scheduleConstants'

export const createSchedule = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SCHEDULE_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/schedule/${body.property}`, body, config)

    dispatch({
      type: SCHEDULE_CREATE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: SCHEDULE_CREATE_FAIL,
      payload: message,
    })
  }
}
