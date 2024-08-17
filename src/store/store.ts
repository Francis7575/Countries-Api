import { configureStore } from "@reduxjs/toolkit"
import themeslice from "./themeSlice"
import filterSlice from "./filterSlice"

const store = configureStore({
    reducer: {
        theme: themeslice.reducer,
        filter: filterSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store