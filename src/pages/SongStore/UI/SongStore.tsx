import Song from "@/widgets/Song/UI/Song"
import styles from "@/pages/SongStore/SongStore.module.scss"
import React, { useState } from "react"
import { songsList } from "@/entities/checkSong/checkSong"
import { useSelector } from "react-redux"
import { selectLang } from "@/shared/Slices/globalInfoSlice"
const SongStore = (): JSX.Element => {
	interface songInterface {
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
		complexity: "HARD" | "EASY" | "NORMAL"
		author: string
		image: string
		id: string
	}
	const language = useSelector(selectLang)
	const zhanras = [
		"rap",
		"hiphop",
		"rock",
		"electric",
		"R&B",
		"Latin",
		"Country",
		"Jazz",
		"K-pop",
		"Reggie",
	]
	return (
		<div className={styles.songStore}>
			{zhanras.map((zhanr) => {
				let articleZhanr = zhanr
				if (language === "ru") {
					if (zhanr === "rap") {
						articleZhanr = "Реп"
					} else if (zhanr === "hiphop") {
						articleZhanr = "Хипхоп"
					} else if (zhanr === "rock") {
						articleZhanr = "Рок"
					} else if (zhanr === "electric") {
						articleZhanr = "Электронная музыка"
					} else if (zhanr === "R&B") {
						articleZhanr = "Ритм-н-блюз"
					} else if (zhanr === "Latin") {
						articleZhanr = "Латинский"
					} else if (zhanr === "Jazz") {
						articleZhanr = "Джазз"
					} else if (zhanr === "K-pop") {
						articleZhanr = "К-поп"
					} else if (zhanr === "Reggie") {
						articleZhanr = "Регги"
					}
				}
				return (
					<div className={styles.songStore__category}>
						<p className={styles.songStore__subtitle}>
							{articleZhanr.toUpperCase()}
						</p>
						<p className={styles.songStore__title}>
							{language === "ru" ? "Лучшее" : "The best"}
						</p>
						<div className={styles.songStore__fivesongs}>
							{songsList
								.filter((song) => song.typeOfSong === zhanr)
								.map((song) => (
									<Song song={song} />
								))}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default SongStore
