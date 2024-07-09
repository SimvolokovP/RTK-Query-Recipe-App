import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    toggleFavorites(state, actions) {
        const isExists = (state.favorites.some(recipe => recipe.id === actions.payload.id));

     if (isExists) {
        state.favorites = state.favorites.filter(recipe => recipe.id !== actions.payload.id);
     } else {
        state.favorites.push(actions.payload);
     }

     console.log(state.favorites)
    }
  }
});


export const { actions } = favoritesSlice;
export default favoritesSlice.reducer;