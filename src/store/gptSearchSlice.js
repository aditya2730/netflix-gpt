import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    movieSuggestionResults: null,
    movieSuggestionResultsData: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieSuggestionResults: (state, action) => {
      state.movieSuggestionResults = action.payload;
    },
    addMovieSuggestionResultsData: (state, action) => {
      state.movieSuggestionResultsData = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addMovieSuggestionResults,
  addMovieSuggestionResultsData,
} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
