import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { shortlistReducer } from './reducers/shortlistReducers'
import {
  propertyListReducer,
  propertyDetailsReducer,
} from './reducers/propertyReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  shortlist: shortlistReducer,
})

const shortlistItemsFromStorage = localStorage.getItem('shortlistItems')
  ? JSON.parse(localStorage.getItem('shortlistItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  shortlist: {
    shortlistItems: shortlistItemsFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
