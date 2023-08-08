import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState:{
    selectedCategory: "BEEF"
  },
  reducers: {
   filterCategory:(state, action)=>{
    state.selectedCategory=action.payload
   }}
  })

// Action creators are generated for each case reducer function
export const { filterCategory } = dishesSlice.actions
export const getSelectedCategory=state=>state.dishes.selectedCategory;
export default dishesSlice.reducer