import React from "react"
import styles from "@/shared/UI/AnimatedTitleLetter/AnimatedTitleLetter.module.scss"
const AnimatedTitleLetter = (props: {
	letter: string
	isSelected: boolean
}): JSX.Element => {
	const { letter, isSelected } = props
	return <span className={isSelected ? `${styles.letterselected} ${styles.letter}` : styles.letter}>{letter}</span>
}

export default AnimatedTitleLetter
