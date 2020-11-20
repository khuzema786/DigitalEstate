import axios from 'axios'
import {
  SHORTLIST_ADD_ITEM,
  SHORTLIST_REMOVE_ITEM,
  SHORTLIST_ADD_ITEM_REQUEST,
} from '../constants/shortlistConstants'

export const addToShortlist = (id) => async (dispatch, getState) => {
  dispatch({ type: SHORTLIST_ADD_ITEM_REQUEST })

  const { data } = await axios.get(`/api/property/${id}`)

  dispatch({
    type: SHORTLIST_ADD_ITEM,
    payload: {
      property: data._id,
      name: data.name,
      location: data.location,
      type: data.type,
      size: data.size,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      price: data.price,
    },
  })

  localStorage.setItem(
    'shortlistItems',
    JSON.stringify(getState().shortlist.shortlistItems),
  )
}

export const removeFromShortlist = (id) => (dispatch, getState) => {
  dispatch({
    type: SHORTLIST_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem(
    'shortlistItems',
    JSON.stringify(getState().shortlist.shortlistItems),
  )
}
