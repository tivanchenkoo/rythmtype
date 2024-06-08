import React, { useState } from "react"
import styles from "@/pages/TitleOfSong/TitleOfSong.module.scss"
import AnimatedTitleLetter from "@/shared/UI/AnimatedTitleLetter/AnimatedTitleLetter"
interface TitleOfSongInterface {
	title: string
}
const TitleOfSong = (props: TitleOfSongInterface) => {
	const [selectedLetter, setSelectedLeter] = useState(0)
	const { title } = props
	return (
		<div className={styles.titleWrapper}>
			<p className={styles.titleWrapper__text}>
				{title.split("").map((letter) => (
					<AnimatedTitleLetter
						letter={letter}
						isSelected={true}
					></AnimatedTitleLetter>
				))}
			</p>
		</div>
	)
}

export default TitleOfSong
