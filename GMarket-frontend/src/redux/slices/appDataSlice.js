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
        setCarouseImages:(state,action)=>{
            state.carouselImages = action.payload
        },
        setCategores:(state,action)=>{
            state.categoriesImages = action.payload
        },
        setRecomendedProduct:(state,action)=>{
            state.recomendedProduct = action.payload
        },
    }

})

export const {setCarouseImages,setCategores,setRecomendedProduct} = appDataSlice.actions;

export default appDataSlice.reducer;