import globalInfo from "@/shared/Slices/globalInfoSlice"
import { configureStore } from "@reduxjs/toolkit"
import currentSong from "@/shared/Slices/currentSongSlice"
const store = configureStore({
	reducer: { globalInfo, currentSong },
})

export default store
