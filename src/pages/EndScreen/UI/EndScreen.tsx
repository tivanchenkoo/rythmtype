import {
	selectAllLyricsQuantity,
	selectAllSymbolsQuantity,
	selectLang,
	selectLyricsCompleted,
	selectSymbolsTyped,
} from "@/shared/Slices/globalInfoSlice"
import { useSelector } from "react-redux"
import styles from "@/pages/EndScreen/EndScreen.module.scss"
import { Link, useNavigate, useParams } from "react-router-dom"
import { selectIsTrainingMode } from "@/shared/Slices/currentSongSlice"

const EndScreen = (): JSX.Element => {
	const id = useParams().id
	const symbolsTyped = useSelector(selectSymbolsTyped)
	const lyricCompleted = useSelector(selectLyricsCompleted)
	const allLyricsQuantity = useSelector(selectAllLyricsQuantity)
	const allSymbolsQuantity = useSelector(selectAllSymbolsQuantity)
	const isTrainingMode = useSelector(selectIsTrainingMode)
	const navigate = useNavigate()
	const language = useSelector(selectLang)
	if (isTrainingMode) {
		return (
			<div className={styles.endScreen}>
				<h1 className={styles.endScreen__title}>
					{language === "en"
						? "You've completed the Bigger Than everything in training mode!"
						: "Вы прошли Bigger Than everything в тренировочном режиме"}
				</h1>
				<div className={styles.endScreen__buttonWrapper}>
					<Link
						to={`http://localhost:3000/tutorial/${id}?lang=${language}`}
						className={styles.endScreen__button}
					>
						{language === "en" ? "Try again" : "Ещё раз"}
					</Link>
				</div>
			</div>
		)
	} else if (
		symbolsTyped &&
		lyricCompleted &&
		allLyricsQuantity &&
		allSymbolsQuantity &&
		!isTrainingMode
	) {
		return (
			<div className={styles.endScreen}>
				<h1 className={styles.endScreen__title}>
					You've completed the Bigger Than everything!
				</h1>
				<div className={styles.endScreen__stats}>
					<p className={styles.endScreen__subtitle}>
						<span
							style={
								symbolsTyped / (allSymbolsQuantity / 100) > 25 &&
								symbolsTyped / (allSymbolsQuantity / 100) <= 50
									? { color: "orange" }
									: symbolsTyped / (allSymbolsQuantity / 100) < 25
									? { color: "red" }
									: { color: "green" }
							}
							className="mx-2"
						>
							{Math.round(symbolsTyped / (allSymbolsQuantity / 100))}%
						</span>
						correct symbols
					</p>
					<p className={styles.endScreen__subtitle}>
						<span
							style={
								allSymbolsQuantity / symbolsTyped > 1 &&
								allSymbolsQuantity / symbolsTyped < 5
									? { color: "green" }
									: allSymbolsQuantity / symbolsTyped < 10
									? { color: "orange" }
									: { color: "red" }
							}
							className="mx-2"
						>
							{symbolsTyped}
						</span>
						/ {allSymbolsQuantity} symbols typed
					</p>
					<p className={styles.endScreen__subtitle}>
						<span
							style={
								allLyricsQuantity / lyricCompleted > 1 &&
								allLyricsQuantity / lyricCompleted < 5
									? { color: "green" }
									: allLyricsQuantity / lyricCompleted < 10
									? { color: "orange" }
									: { color: "red" }
							}
						>
							{lyricCompleted}
						</span>{" "}
						/ {allLyricsQuantity} lyrics completed
					</p>
				</div>
				<div className={styles.endScreen__buttonWrapper}>
					<Link
						to={`http://localhost:3000/game/${id}?lang=ru`}
						className={styles.endScreen__button}
					>
						Try again
					</Link>
				</div>
			</div>
		)
	}
	return <div></div>
}

export default EndScreen
