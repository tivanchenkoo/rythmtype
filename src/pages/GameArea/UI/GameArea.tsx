import Keyboard from "@/widgets/Keyboard/UI/Keyboard"
import { useEffect, useRef, useState } from "react"
import styles from "@/pages/GameArea/GameArea.module.scss"
import { useDispatch, useSelector } from "react-redux"
import {
	selectLang,
	setAllLyricsQuantity,
	setAllSymbolsQuantity,
	setCurrentKey,
	upLyricCompleted,
	upSymbolsTyped,
} from "@/shared/Slices/globalInfoSlice"
import { useNavigate, useParams } from "react-router-dom"
import audio from "@/shared/myaudio.mp3"
import { ThreeDots } from "react-loader-spinner"
import StartGameScreen from "@/pages/StartGameScreen/UI/StartGameScreen"
import {
	setTrainingMode,
} from "@/shared/Slices/currentSongSlice"
interface props {
	song: {
		lyrics: string[]
		songLanguage: "en" | "ru"
		timings: number[]
		title: string
		intro: number
		image: string
		author: string
		end: number
		complexity: "HARD" | "EASY" | "NORMAL" | "ТЯЖЕЛО" | "ЛЕГКО" | "НОРМ"
	}
}

const GameArea = (props: props): JSX.Element => {
	const id = useParams().id
	let {
		lyrics,
		timings,
		songLanguage,
		intro,
		title,
		image,
		author,
		complexity,
		end,
	} = props.song
	type lang = "en" | "ru"
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
	const inputRef = useRef<HTMLInputElement>(null)
	const songRef = useRef<HTMLAudioElement>()
	const language = useSelector<lang>(selectLang)
	const vw = window.screen.width
	const playSong = () => {
		songRef.current = new Audio(audio)
		songRef.current.play()
		setPlay(true)
	}
	useEffect(() => {
		dispatch(setTrainingMode(false))
	})
	useEffect(() => {
		if (play) {
			setTimeout(() => {
				navigate(`/completed/${id}?lang=${language}`)
			}, end * 1000)
		}
	})

	useEffect(() => {
		dispatch(setAllLyricsQuantity(lyrics.length))

		dispatch(
			setAllSymbolsQuantity(
				lyrics.reduce((accamulator, currentValue) => {
					return accamulator + currentValue.length
				}, 0)
			)
		)
	}, [dispatch, lyrics])

	useEffect(() => {
		return () => {
			songRef.current?.pause()
		}
	}, [])

	useEffect(() => {
		if (!isIntro) {
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}
	}, [lyricNum, play, isIntro])

	useEffect(() => {
		if (play) {
			setTimeout(() => {
				setIsIntro(false)
			}, intro * 1000)
		}
	}, [play, intro])

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
	}, [
		dispatch,
		id,
		lyricNum,
		inputValue,
		lyrics,
		songLanguage,
		language,
		navigate,
	])

	if (!play) {
		if (language === "ru" || language === "en") {
			return (
				<StartGameScreen
					song={{
						title,
						image,
						author,
						complexity,
						songLanguage,
						playSong,
						language,
						isLearnMode: false,
					}}
				></StartGameScreen>
			)
		}
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
						ref={inputRef}
						disabled={isStringCompleted}
						onChange={(e) => {
							const text = e.target.value

							if (vw > 1200) {
								if (
									text[text.length - 1] === lyrics[lyricNum][text.length - 1]
								) {
									setInputValue(e.target.value)
									dispatch(upSymbolsTyped())
								}
								if (e.target.value === lyrics[lyricNum]) {
									setIsStringCompleted(true)
									dispatch(upLyricCompleted())
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
			<Keyboard language={songLanguage}></Keyboard>
		</div>
	)
}

export default GameArea
