import { createSlice } from "@reduxjs/toolkit"
interface initialInterface {
	language: "en" | "ru"
	keyboard: "default" | "apple"
}
const initialState: initialInterface = {
	language: "en",
	keyboard: "default",
}
const globalInfoSlice = createSlice({
	name: "globalInfo",
	initialState,
	reducers: {
		toggleLang: (state, action) => {
			state.language = state.language === "ru" ? "en" : "ru"
		},
		setLang: (state, action) => {
			state.language = action.payload
		},
		setKeyboard: (state, action) => {
			state.keyboard = action.payload
		},
	},
})

export const { toggleLang, setLang, setKeyboard } = globalInfoSlice.actions

export const selectLang = (state: any) => state.globalInfo.language


export default globalInfoSlice.reducer
