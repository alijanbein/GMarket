import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carouselImages:[],
    categoriesImages:[],
    recomendedProduct:[],
    messages:[]
}

const appDataSlice = createSlice({
    initialState,
    name: "app",
    reducers: {
        setCarouseImages:(state,action)=>{
            state.carouselImages = action.payload
        },
        setCategores:(state,action)=>{
            state.categoriesImages = action.payload
        },
        setRecomendedProduct:(state,action)=>{
            state.recomendedProduct = action.payload
        },
        setMessages :(state,action) => {
            state.messages = action.payload
        },
       
    }

})

export const {setCarouseImages,setCategores,setRecomendedProduct,setMessages} = appDataSlice.actions;

export default appDataSlice.reducer;