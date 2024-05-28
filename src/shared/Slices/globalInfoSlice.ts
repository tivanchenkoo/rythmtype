import { createSlice } from "@reduxjs/toolkit"
interface initialInterface {
	language: "eng" | "ru"
}
const initialState: initialInterface = {
	language: "eng",
}
const globalInfoSlice = createSlice({
	name: "globalInfo",
	initialState,
	reducers: {
		toggleLang: (state, action) => {
			state.language = state.language === "ru" ? "eng" : "ru"
		},
		setLang: (state, action) => {
			state.language = action.payload
		},
	},
})

export const { toggleLang } = globalInfoSlice.actions

export const chooseLang = (state: any) => state.globalInfo.language

export default globalInfoSlice.reducer
