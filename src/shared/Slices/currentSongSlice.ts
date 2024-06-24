import { createSlice } from "@reduxjs/toolkit"
interface initialStateInterface {
	isTrainingMode: boolean
	name: string
}
const initialState: initialStateInterface = {
	isTrainingMode: false,
	name: "",
}
const currentSong = createSlice({
	name: "currentSong",
	initialState,
	reducers: {
		setTrainingMode: (state, action) => {
			state.isTrainingMode = action.payload
		},
	},
})

export const { setTrainingMode, } = currentSong.actions

export const selectIsTrainingMode = (state: any) =>
	state.currentSong.isTrainingMode

export default currentSong.reducer
