import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import  movieSlice  from "./movieSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        playingMovies: movieSlice,
    },
});

export default appStore;