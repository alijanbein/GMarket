import { configureStore } from "@reduxjs/toolkit"
import authSlice, {authReducer} from "./slices/authSlice"
import appDataSlice from "./slices/appDataSlice"
const reducer = {
    auth : authSlice,
    app: appDataSlice
}

export const store = configureStore({
    reducer
})