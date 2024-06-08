import Keyboard from "@/widgets/Keyboard/UI/Keyboard"
import React, { useEffect, useState } from "react"
import styles from "@/pages/GameArea/GameArea.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectLang, setCurrentKey } from "@/shared/Slices/globalInfoSlice"
import { useNavigate } from "react-router-dom"
import audio from "@/shared/myaudio.mp3"
import TitleOfSong from "@/pages/TitleOfSong/UI/TitleOfSong"
import { ThreeDots } from "react-loader-spinner"
interface props {
	song: {
		lyrics: string[]
		songLanguage: "en" | "ru"
		timings: number[]
		title: string
		intro: number
		end: number
	}
}

const GameArea = (props: props): JSX.Element => {
	let { lyrics, timings, title, songLanguage, intro, end } = props.song
	const [inputValue, setInputValue] = useState("")
	const [lyricNum, setLyricNum] = useState(0)
	const [play, setPlay] = useState<boolean>(false)
	const [timing, setTiming] = useState<number>(0)
	const [isStringCompleted, setIsStringCompleted] = useState<boolean>(false)
	const [isIntro, setIsIntro] = useState<boolean>(true)
	const [currentString, setCurrentString] = useState(lyrics[lyricNum])
	useEffect(() => {
		setCurrentString(lyrics[lyricNum])
	}, [lyricNum, lyrics])
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const language = useSelector(selectLang)
	const song = new Audio(audio)
	const vw = window.screen.width
	const playSong = () => {
		song.play()
		setPlay(true)
		setTimeout(() => {
			navigate(`/completed?lang=${language}`)
			song.pause()
		}, end * 1000)
	}
	useEffect(() => {
		if (play) {
			setTimeout(() => {
				setIsIntro(false)
			}, intro * 1000)
		}
	}, [play])

	useEffect(() => {
		if (!isIntro) {
			if (play && timings[timing]) {
				setTimeout(
					() => {
						setIsStringCompleted(false)
						setInputValue("")
						setTiming(timing + 1)
						setLyricNum(lyricNum + 1)
					},
					timings[timing - 1]
						? (timings[timing] - timings[timing - 1]) * 1000
						: timings[timing] * 1000 - intro * 1000
				)
			}
		}
	}, [play, lyricNum, timing, timings, isIntro, intro])

	useEffect(() => {
		if (lyrics[lyricNum] && lyrics[lyricNum][inputValue.length]) {
			if (songLanguage !== language) {
				navigate(`/game?lang=${songLanguage}`)
			}
			if (lyrics[lyricNum][inputValue.length].match(/[A-Z]/)) {
				dispatch(
					setCurrentKey([
						lyrics[lyricNum][inputValue.length].toLowerCase(),
						"shift",
					])
				)
			} else if (!lyrics[lyricNum][inputValue.length].match(/[A-Z]/)) {
				dispatch(setCurrentKey(lyrics[lyricNum][inputValue.length]))
			}
		}
	}, [dispatch, lyricNum, inputValue, lyrics, songLanguage, language, navigate])

	if (!play) {
		return (
			<div className={styles.startScreen}>
				<button className={styles.startButton} onClick={playSong}>
					Start
				</button>
			</div>
		)
	}
	return (
		<div className={styles.gamearea}>
			{isIntro ? (
				<div className={styles.gamearea__textWithInput}>
					<ThreeDots
						visible={true}
						height="80"
						width="80"
						color="#fff"
						radius="9"
						ariaLabel="three-dots-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				</div>
			) : (
				<div className={`position-relative ${styles.gamearea__textWithInput}`}>
					<input
						style={!lyrics[lyricNum] ? { display: "none" } : {}}
						className={styles.gamearea__maininput}
						type="lyrics"
						disabled={isStringCompleted}
						onChange={(e) => {
							const text = e.target.value
							if (vw > 1200) {
								if (
									text[text.length - 1] === lyrics[lyricNum][text.length - 1]
								) {
									setInputValue(e.target.value)
								}
								if (e.target.value === lyrics[lyricNum]) {
									setIsStringCompleted(true)
									setInputValue("")
								}
							} else {
								if (text[text.length - 1] === currentString[text.length - 1]) {
									setCurrentString(
										currentString
											.split("")
											.filter((_, index) => index !== text.length - 1)
											.join("")
									)
								}
							}
						}}
						value={inputValue}
					/>
					<p
						style={isStringCompleted ? { color: "green" } : {}}
						className={styles.gamearea__realtext}
					>
						{currentString ? currentString : "..."}
					</p>
				</div>
			)}

			<div className={styles.gamearea__line}></div>
			<p className={`d-none d-md-block ${styles.gamearea__nextlyric}`}>
				{isIntro
					? lyrics[lyricNum]
					: lyrics[lyricNum + 1]
					? lyrics[lyricNum + 1]
					: ""}
			</p>
			<Keyboard></Keyboard>
		</div>
	)
}

export default GameArea
