import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    currentConversation : [],
}

const currentSlice = createSlice({
    initialState,
    name:"current",
    reducers:{
        setCurrentConversation:(state, action) => {
            state.currentConversation = action.payload
        }
    }
})

export const {setCurrentConversation} = currentSlice.actions;
export default currentSlice.reducer;