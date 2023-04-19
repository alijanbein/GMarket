import { configureStore } from "@reduxjs/toolkit"
import authSlice, {authReducer} from "./slices/authSlice"
const reducer = {
    auth : authSlice
}

export const store = configureStore({
    reducer
})