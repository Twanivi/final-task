import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "../reducers/gameReducer";


export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(gamesApi.middleware)
})