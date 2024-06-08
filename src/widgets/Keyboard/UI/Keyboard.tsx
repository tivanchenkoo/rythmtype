import React from "react"
import Key from "@/shared/UI/Key/Key"
import * as colors from "@/shared/scss/colors.scss"
import styles from "@/widgets/Keyboard/Keyboard.module.scss"
import { useSelector } from "react-redux"
import {
	selectCurrentKey,
	selectKeyboard,
	selectLang,
} from "@/shared/Slices/globalInfoSlice"
import { getKeyboardLayout } from "@/entities/keyboard/keyboardLayout"
const Keyboard = (): JSX.Element => {
	const language = useSelector(selectLang)
	const keyboard = useSelector(selectKeyboard)
	const currentKey = useSelector(selectCurrentKey)
	type row = "row1" | "row2" | "row3" | "row4" | "row5"
	let enKeyboard = getKeyboardLayout(keyboard, language)
	const mapKeys = (row: row) => {
		return enKeyboard[row].map((key, index) => {
			if (
				currentKey &&
				(key.keyName.toString() === currentKey ||
					key.keyName.toString() === currentKey[0] ||
					key.keyName.toString() === currentKey[1])
			) {
				return (
					<Key
						key={index}
						keyName={key.keyName}
						row={key.verticalRow}
						specific={key.specific ? key.specific : ""}
						isHover={true}
					></Key>
				)
			} else {
				return (
					<Key
						key={index}
						keyName={key.keyName}
						row={key.verticalRow}
						specific={key.specific ? key.specific : ""}
					></Key>
				)
			}
		})
	}
	return (
		<div
			className={`
				d-md-flex
				d-none flex-column align-items-center
				${styles.keyboard}
			`}
		>
			<div className={`${styles.keyrow} d-flex justify-content-between`}>
				{mapKeys("row1")}
			</div>
			<div className={`${styles.keyrow} d-flex justify-content-between`}>
				{mapKeys("row2")}
			</div>
			<div className={`${styles.keyrow3} d-flex justify-content-between`}>
				{mapKeys("row3")}
			</div>
			<div className={`${styles.keyrow} d-flex justify-content-between`}>
				{mapKeys("row4")}
			</div>
			<div className={`${styles.keyrow3} d-flex justify-content-center`}>
				{mapKeys("row5")}
			</div>
		</div>
	)
}

export default Keyboard
