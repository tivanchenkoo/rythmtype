import cowboy from "@/shared/photos/instruction/cowboyemoji.png"
import mustacheguy from "@/shared/photos/instruction/mustacheguyemoji.png"
import wonderingemoji from "@/shared/photos/instruction/wonderingemoji.png"
import heartemoji from "@/shared/photos/instruction/heartemoji.png"
import cuteemoji from "@/shared/photos/instruction/cuteemoji.png"
import airguyemoji from "@/shared/photos/instruction/airguyemoji.png"
import styles from "@/pages/Instruction/Instruction.module.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectLang } from "@/shared/Slices/globalInfoSlice"
const Instruction = () => {
	const language = useSelector(selectLang)
	return (
		<div className={styles.instruction}>
			<div className={styles.instruction__startscreen}>
				<p className={styles.instruction__title}>Let’s start from here</p>
			</div>
			<div className={styles.instruction__guide}>
				<div className={styles.instruction__advices}>
					<div className=" d-flex align-items-center">
						<img src={cowboy} alt="cowboy guy emoji"></img>
						<p className={styles.instruction__subtitle}>
							The color of the keys on this keyboard will help you understand
							and remember which finger to use for each key.
						</p>
					</div>
					<div className=" d-flex align-items-center">
						<img src={mustacheguy} alt="mustache guy emoji" />
						<p className={styles.instruction__subtitle}>
							Press the keys only with the finger designated for them.
						</p>
					</div>
					<div className=" d-flex align-items-center">
						<img src={wonderingemoji} alt="wondering guy emoji" />
						<p className={styles.instruction__subtitle}>
							Always return your fingers to the starting position "ASDF – JKL;".
						</p>
					</div>
					<div className=" d-flex align-items-center">
						<img src={heartemoji} alt="heart emoji" />
						<p className={styles.instruction__subtitle}>
							{" "}
							Set a rhythm and maintain it while typing.
						</p>
					</div>
					<div className=" d-flex align-items-center">
						<img src={cuteemoji} alt="cute guy emoji" />
						<p className={styles.instruction__subtitle}>
							Press the keys at consistent intervals.
						</p>
					</div>
					<div className=" d-flex align-items-center">
						<img src={airguyemoji} alt="air guy emoji" />
						<p className={styles.instruction__subtitle}>
							When typing, virtualize the layout of the keys.
						</p>
					</div>
				</div>
				<div className={styles.instruction__playbuttonarea}>
					<p className={styles.instruction__happygame}>HAPPY GAME!</p>
					<Link
						className={styles.instruction__playbutton}
						to={`/allgames?lang=${language}`}
					>
						PLAY
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Instruction
