import { createSlice } from "@reduxjs/toolkit"
interface initialInterface {
	language: "en" | "ru"
	keyboard: "default" | "apple"
	currentKey: string | null | string[]
}
const initialState: initialInterface = {
	language: "en",
	keyboard: "default",
	currentKey: null
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
		setCurrentKey: (state, action) => {
			state.currentKey = action.payload
		},
	},
})

export const { toggleLang, setLang, setKeyboard, setCurrentKey } = globalInfoSlice.actions

export const selectLang = (state: any) => state.globalInfo.language
export const selectKeyboard = (state: any) => state.globalInfo.keyboard
export const selectCurrentKey = (state: any) => state.globalInfo.currentKey

export default globalInfoSlice.reducer
