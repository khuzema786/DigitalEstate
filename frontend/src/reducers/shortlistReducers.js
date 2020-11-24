import {
  SHORTLIST_ADD_ITEM_REQUEST,
  SHORTLIST_ADD_ITEM,
  SHORTLIST_REMOVE_ITEM,
  SHORTLIST_CLEAR_ITEMS,
} from '../constants/shortlistConstants'

export const shortlistReducer = (state = { shortlistItems: [] }, action) => {
  switch (action.type) {
    case SHORTLIST_ADD_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SHORTLIST_ADD_ITEM:
      const item = action.payload

      const existItem = state.shortlistItems.find(
        (x) => x.property === item.property,
      )

      if (existItem) {
        return {
          ...state,
          loading: false,
          shortlistItems: state.shortlistItems.map((x) =>
            x.property === existItem.property ? item : x,
          ),
        }
      } else {
        return {
          ...state,
          success: true,
          shortlistItems: [...state.shortlistItems, item],
        }
      }
    case SHORTLIST_REMOVE_ITEM:
      return {
        ...state,
        shortlistItems: state.shortlistItems.filter(
          (x) => x.property !== action.payload,
        ),
      }
    case SHORTLIST_CLEAR_ITEMS:
      return {
        ...state,
        shortlistItems: [],
      }
    default:
      return state
  }
}
