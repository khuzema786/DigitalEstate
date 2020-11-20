import axios from 'axios'
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
} from '../constants/propertyConstants'
import { logout } from './userActions'

export const listProperty = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LIST_REQUEST })

    const { data } = await axios.get(`/api/property?keyword=${keyword}`)

    dispatch({
      type: PROPERTY_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROPERTY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/property/${id}`)

    dispatch({
      type: PROPERTY_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROPERTY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProperty = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROPERTY_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/property/`, body, config)

    dispatch({
      type: PROPERTY_CREATE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: PROPERTY_CREATE_FAIL,
      payload: message,
    })
  }
}
