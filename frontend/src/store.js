import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { shortlistReducer } from './reducers/shortlistReducers'
import {
  propertyListReducer,
  propertyDetailsReducer,
  propertyCreateReducer,
  allPropertyListReducer,
  propertyDeleteReducer,
  propertyUpdateReducer,
} from './reducers/propertyReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'
import { scheduleReducer } from './reducers/scheduleReducers'
import { uploadReducer } from './reducers/uploadReducers'

const reducer = combineReducers({
  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  shortlist: shortlistReducer,
  propertyCreate: propertyCreateReducer,
  allPropertyList: allPropertyListReducer,
  propertyDelete: propertyDeleteReducer,
  propertyUpdate: propertyUpdateReducer,
  upload: uploadReducer,
  schedule: scheduleReducer,
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
