import { createSlice } from "@reduxjs/toolkit"
interface initialInterface {
	language: "en" | "ru"
	keyboard: "default" | "apple"
	currentKey: string | null | string[]
	symbolsTyped: number
	lyricCompleted: number
	allLyricsQuantity: number
	allSymbolsQuantity: number
}
const initialState: initialInterface = {
	symbolsTyped: 0,
	lyricCompleted: 0,
	allLyricsQuantity: 0,
	allSymbolsQuantity: 0,
	language: "en",
	keyboard: "default",
	currentKey: null,
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
		upLyricCompleted: (state) => {
			state.lyricCompleted = state.lyricCompleted + 1
		},
		upSymbolsTyped: (state) => {
			state.symbolsTyped = state.symbolsTyped + 1
		},
		setAllLyricsQuantity: (state, action) => {
			state.allLyricsQuantity = action.payload
		},
		setAllSymbolsQuantity: (state, action) => {
			state.allSymbolsQuantity = action.payload
		},
	},
})

export const {
	toggleLang,
	setLang,
	setKeyboard,
	setCurrentKey,
	upLyricCompleted,
	upSymbolsTyped,
	setAllLyricsQuantity,
	setAllSymbolsQuantity,
} = globalInfoSlice.actions

export const selectLang = (state: any) => state.globalInfo.language
export const selectKeyboard = (state: any) => state.globalInfo.keyboard
export const selectCurrentKey = (state: any) => state.globalInfo.currentKey
export const selectAllSymbolsQuantity = (state: any) =>
	state.globalInfo.allSymbolsQuantity
export const selectLyricsCompleted = (state: any) =>
	state.globalInfo.lyricCompleted
export const selectSymbolsTyped = (state: any) => state.globalInfo.symbolsTyped
export const selectAllLyricsQuantity = (state: any) =>
	state.globalInfo.allLyricsQuantity

export default globalInfoSlice.reducer
