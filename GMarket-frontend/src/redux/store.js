import { configureStore } from "@reduxjs/toolkit"
import authSlice, {authReducer} from "./slices/authSlice"
import appDataSlice from "./slices/appDataSlice"
import currentSlice from "./slices/currentSlice"
const reducer = {
    auth : authSlice,
    app: appDataSlice,
    current:currentSlice
}

export const store = configureStore({
    reducer
})