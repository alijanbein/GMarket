import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    currentConversation : [],
    currentPersonData :{},
    currentPosterData :{},
    currentCategorie:"Fruit",
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
        },
        setCurrentCategorie:(state,action) => {
            state.currentCategorie = action.payload
        }
    }
})

export const {setCurrentConversation,setCurrentPersonData,setCurrentPosterData,setCurrentCategorie} = currentSlice.actions;
export default currentSlice.reducer;