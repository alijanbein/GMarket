import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    currentConversation : [],
    currentPersonData :{}
}

const currentSlice = createSlice({
    initialState,
    name:"current",
    reducers:{
        setCurrentConversation:(state, action) => {
            state.currentConversation = action.payload
        },
        setCurrentPersonData:(state, action) => {
            state.currentPersonData = action.payload
        }
    }
})

export const {setCurrentConversation,setCurrentPersonData} = currentSlice.actions;
export default currentSlice.reducer;