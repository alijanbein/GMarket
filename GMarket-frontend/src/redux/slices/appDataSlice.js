import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carouselImages:[],
    categoriesImages:[],
    recomendedProduct:[]
}

const appDataSlice = createSlice({
    initialState,
    name: "app",
    reducers: {
        setCarouseImagesL:(state,action)=>{
            state.carouselImages = action.payload
        },
        setCategoresImages:(state,action)=>{
            state.categoriesImages = action.payload
        },
        setRecomendedProduct:(state,action)=>{
            state.recomendedProduct = action.payload
        },
    }

})

export const {setCarouseImagesL,setCategoresImages,setRecomendedProduct} = appDataSlice.actions;

export default appDataSlice.reducer;