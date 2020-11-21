import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
  UPLOAD_RESET,
} from '../constants/uploadConstants'

export const uploadReducer = (state = { path: [] }, action) => {
  switch (action.type) {
    case UPLOAD_REQUEST:
      return { ...state, uploading: true }
    case UPLOAD_SUCCESS:
      return {
        uploading: false,
        uploadSuccess: true,
        path: action.payload.path,
        message: action.payload.message,
      }
    case UPLOAD_FAIL:
      return { uploading: false, error: action.payload }
    case UPLOAD_RESET:
      return {}
    default:
      return state
  }
}
