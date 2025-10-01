import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    movieSuggestionResults: null,
    movieSuggestionResultsData: null,
    loading: false,
  },
  reducers: {
    setShowGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieSuggestionResults: (state, action) => {
      state.movieSuggestionResults = action.payload;
    },
    addMovieSuggestionResultsData: (state, action) => {
      state.movieSuggestionResultsData = action.payload;
    },
    removeMovieSuggestionResults: (state) => {
      state.movieSuggestionResults = null;
    },
    removeMovieSuggestionResultsData: (state) => {
      state.movieSuggestionResultsData = null;
    },
    setLoading: (state, action) => {
      if (action.payload === true) {
        state.movieSuggestionResultsData = null;
        state.movieSuggestionResults = null;
      }
      state.loading = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addMovieSuggestionResults,
  addMovieSuggestionResultsData,
  removeMovieSuggestionResults,
  removeMovieSuggestionResultsData,
  setLoading,
  setShowGptSearch,
} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
