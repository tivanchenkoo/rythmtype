import React from "react"
import styles from "@/widgets/Song/Song.module.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectLang } from "@/shared/Slices/globalInfoSlice"
interface songProps {
	song: {
		title: string
		lyrics: string[]
		songLanguage: "en" | "ru"
		timings: number[]
		intro: number
		end: number
		typeOfSong:
			| "rap"
			| "hiphop"
			| "rock"
			| "electric"
			| "R&B"
			| "Latin"
			| "Country"
			| "Jazz"
			| "K-pop"
			| "Reggie"
		complexity: "HARD" | "EASY" | "NORMAL" | "ТЯЖЕЛО" | "ЛЕГКО" | "НОРМ"
		author: string
		image: string
		id: string
	}
}
const Song = (props: songProps) => {
	const language = useSelector(selectLang)
	const { author, image, title, id } = props.song
	let { complexity } = props.song
	if (language === "ru") {
		complexity =
			complexity === "HARD"
				? "ТЯЖЕЛО"
				: complexity === "EASY"
				? "ЛЕГКО"
				: "НОРМ"
	}
	return (
		<Link to={`/game/${id}?lang=${language}`} className={styles.song}>
			<img className={styles.song__image} src={image} alt="" />
			<div className={styles.song__rightblock}>
				<p className="text-center">{title}</p>
				<div className={styles.song__additionalInfo}>
					<p className={styles.song__subtitle}>{author}</p>
					--
					{language === "ru" ? (
						<p
							className={styles.song__subtitle}
							style={
								complexity === "ТЯЖЕЛО"
									? { color: "red" }
									: complexity === "ЛЕГКО"
									? { color: "green" }
									: { color: "orange" }
							}
						>
							{complexity}
						</p>
					) : (
						<p
							className={styles.song__subtitle}
							style={
								complexity === "HARD"
									? { color: "red" }
									: complexity === "EASY"
									? { color: "green" }
									: { color: "orange" }
							}
						>
							{complexity}
						</p>
					)}
				</div>
			</div>
		</Link>
	)
}

export default Song
