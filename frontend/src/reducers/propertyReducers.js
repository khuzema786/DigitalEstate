import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_CREATE_REQUEST,
  PROPERTY_CREATE_SUCCESS,
  PROPERTY_CREATE_FAIL,
  PROPERTY_CREATE_RESET,
} from '../constants/propertyConstants'

export const propertyListReducer = (state = { property: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return { ...state, loading: true }
    case PROPERTY_LIST_SUCCESS:
      return {
        loading: false,
        property: action.payload.properties,
      }
    case PROPERTY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const propertyDetailsReducer = (
  state = { property: { images: [] } },
  action,
) => {
  switch (action.type) {
    case PROPERTY_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PROPERTY_DETAILS_SUCCESS:
      return { loading: false, property: action.payload }
    case PROPERTY_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const propertyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_CREATE_REQUEST:
      return { ...state, loading: true }
    case PROPERTY_CREATE_SUCCESS:
      return { loading: false, success: true }
    case PROPERTY_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PROPERTY_CREATE_RESET:
      return {}
    default:
      return state
  }
}
