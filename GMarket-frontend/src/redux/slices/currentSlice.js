import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    currentConversation : [],
    currentPersonData :{},
    currentPosterData :{},
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
        },
        setCurrentPosterData:(state,action) => {
            state.currentPosterData =  action.payload
        }
    }
})

export const {setCurrentConversation,setCurrentPersonData,setCurrentPosterData} = currentSlice.actions;
export default currentSlice.reducer;