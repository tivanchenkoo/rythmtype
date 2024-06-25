import styles from "@/pages/StartGameScreen/StartGameScreen.module.scss"
import { Link, useNavigate, useParams } from "react-router-dom"
interface props {
	song: {
		songLanguage: "en" | "ru"
		title: string
		image: string
		author: string
		complexity: "HARD" | "EASY" | "NORMAL" | "ТЯЖЕЛО" | "ЛЕГКО" | "НОРМ"
		playSong: () => void
		language: "en" | "ru"
		isLearnMode: boolean
	}
}
const StartGameScreen = (props: props): JSX.Element => {
	const id = useParams().id

	const navigate = useNavigate()
	let { language, complexity, image, author, title, playSong, isLearnMode } =
		props.song
	if (language === "ru") {
		complexity =
			complexity === "HARD"
				? "ТЯЖЕЛО"
				: complexity === "EASY"
				? "ЛЕГКО"
				: "НОРМ"
	}
	return (
		<div className={styles.startScreen}>
			<img src={image} alt="" className={styles.startScreen__image} />
			<p className={styles.startScreen__text}>{title}</p>
			{isLearnMode ? (
				<p className={styles.startScreen__midFont}>
					{language === "ru" ? "Обучение" : "Learn mode"}
				</p>
			) : null}
			<p>{author}</p>
			<p
				style={
					complexity === "ТЯЖЕЛО" || complexity === "HARD"
						? { color: "red" }
						: complexity === "ЛЕГКО" || complexity === "EASY"
						? { color: "green" }
						: { color: "orange" }
				}
			>
				{complexity}
			</p>
			<div
				className={`d-flex justify-content-center ${
					isLearnMode ? "" : "justify-content-md-between"
				}  w-50 flex-wrap`}
			>
				<div className={styles.buttonWrapper}>
					<button className={styles.startButton} onClick={playSong}>
						{language === "ru" ? "Начать" : "Start"}
					</button>
				</div>
				{isLearnMode ? null : (
					<div className={styles.buttonWrapperLearn}>
						<Link
							to={`/tutorial/${id}?lang=${language}`}
							className={styles.startButton}
						>
							{language === "ru" ? "Обучение" : "Learn mode"}
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default StartGameScreen
