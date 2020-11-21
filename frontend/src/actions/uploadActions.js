import axios from 'axios'
import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
} from '../constants/uploadConstants'

export const upload = (files, formData) => async (dispatch, getState) => {
  dispatch({ type: UPLOAD_REQUEST })
  for (let index = 0; index < files.length; index++) {
    const file = files[index]
    formData.append('image', file)
  }

  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const { data } = await axios.post('/api/upload', formData, config)
    console.log(data)
    dispatch({
      type: UPLOAD_SUCCESS,
      payload: { path: data.path, message: data.message },
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: UPLOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
