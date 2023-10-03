import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import UserActions from '../ApiConfig/UserActions'


const custoMiddleWare=getDefaultMiddleware({
  serializableCheck:false
})

export const store = configureStore({
  reducer: {
    userManger:UserActions 
  },
  middleware:custoMiddleWare

})