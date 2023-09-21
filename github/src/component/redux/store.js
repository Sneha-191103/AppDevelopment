import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./userslice";

export default configureStore({
    reducer: {
        user:UserSlice.reducer
    }
})