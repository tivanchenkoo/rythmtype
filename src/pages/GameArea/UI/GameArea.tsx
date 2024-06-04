import Keyboard from "@/widgets/Keyboard/UI/Keyboard"
import React, { useEffect, useState } from "react"
import styles from "@/pages/GameArea/GameArea.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectLang, setCurrentKey } from "@/shared/Slices/globalInfoSlice"
import { useNavigate } from "react-router-dom"
interface props {
	text: {
		lyrics: string[]
		language: "en" | "ru"
	}
}

const GameArea = (props: props): JSX.Element => {
	const [inputValue, setInputValue] = useState("")
	const [lyricNum, setLyricNum] = useState(0)
	const dispatch = useDispatch()
	const language = useSelector(selectLang)
	let text = props.text.lyrics
	const songLanguage = props.text.language
	const navigate = useNavigate()
	useEffect(() => {
		if (songLanguage !== language) {
			navigate(`/game/${songLanguage}`)
		}
		if (text[lyricNum][inputValue.split("").length].match(/[A-Z]/)) {
			dispatch(
				setCurrentKey([
					text[lyricNum][inputValue.split("").length].toLowerCase(),
					"shift",
				])
			)
		} else {
			dispatch(setCurrentKey(text[lyricNum][inputValue.split("").length]))
		}
	}, [dispatch, lyricNum, inputValue, text, songLanguage, language, navigate])

	return (
		<div className={styles.gamearea}>
			<div className="position-relative">
				<input
					className={styles.gamearea__maininput}
					type="text"
					onChange={(e) => {
						if (
							e.target.value.split("")[e.target.value.split("").length - 1] ===
							text[lyricNum][e.target.value.split("").length - 1]
						) {
							setInputValue(e.target.value)
						}
						if (e.target.value === text[lyricNum]) {
							setLyricNum(lyricNum + 1)
							setInputValue("")
						}
					}}
					value={inputValue}
				/>
				<p className={styles.gamearea__realtext}>{text[lyricNum]}</p>
			</div>
			<div className={styles.gamearea__line}></div>
			<p className={styles.gamearea__nextlyric}>{text[lyricNum + 1]}</p>
			<Keyboard></Keyboard>
		</div>
	)
}

export default GameArea
