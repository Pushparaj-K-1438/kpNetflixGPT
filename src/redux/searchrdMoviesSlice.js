import { createSlice } from "@reduxjs/toolkit";

const searchrdMoviesSlice = createSlice({
    name: "searchedMovies",
    initialState: {
        gptSuggestedMovies: null,
        fetchedMoviesTmdb: null,
    },
    reducers: {
        setSearchMovies: (state, action) => {
            const { gptSuggestedMovies, fetchedMoviesTmdb } = action.payload;
            state.gptSuggestedMovies = gptSuggestedMovies;
            state.fetchedMoviesTmdb = fetchedMoviesTmdb;
        }
    }
});

export const { setSearchMovies } = searchrdMoviesSlice.actions;
export default searchrdMoviesSlice.reducer;