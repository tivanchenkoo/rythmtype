import globalInfo from "@/shared/Slices/globalInfoSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
	reducer: { globalInfo },
})

export default store
