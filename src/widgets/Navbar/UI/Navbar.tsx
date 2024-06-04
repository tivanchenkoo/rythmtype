import { Image } from "react-bootstrap"
import logo from "@/shared/photos/header/RythmTypeLogo.png"
import facebook from "@/shared/photos/facebooklogo.png"
import styles from "@/widgets/Navbar/Navbar.module.scss"
import twitter from "@/shared/photos/twitterlogo.png"
import instagram from "@/shared/photos/instagramlogo.png"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import {
	selectLang,
	setKeyboard,
	setLang,
} from "@/shared/Slices/globalInfoSlice"
import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
const Navbar = (): JSX.Element => {
	const navigate = useNavigate()
	let location = useLocation().pathname.split(/\//g)
	type languageType = "ru" | "en"
	const { language } = useParams<{ language: languageType }>()
	const languageRedux = useSelector(selectLang)
	const dispatch = useDispatch()

	if (languageRedux === "ru") {
		return (
			<div
				className={`${styles.navbar} d-flex flex-wrap justify-content-center flex-wrap justify-content-center`}
			>
				<div
					className={`d-flex flex-wrap align-items-center ${styles.navbar__leftblock}`}
				>
					<Image src={logo}></Image>
					<Link
						to={""}
						className={`${styles.subtitle} ${styles.navbar__instruction}`}
					>
						Инструкция
					</Link>
					<Link to={""} className={styles.subtitle}>
						Играть
					</Link>
				</div>
				<div
					className={`${styles.navbar__rightblock} d-flex align-items-center w-auto justify-content-center justify-content-lg-end flex-shrink-0 flex-grow-1 w-auto flex-wrap`}
				>
					<div className="d-none d-lg-flex align-items-center">
						<p className={` m-0 mr-3`}>Клавиатура :</p>
						<div
							className={`${styles.navbar__keyboard} ${styles.navbar__selectwrapper}`}
						>
							<select
								name=""
								id=""
								className={`${styles.navbar__keyboards} ${styles.navbar__select}`}
								onChange={(e) => {
									dispatch(setKeyboard(e.target.value))
								}}
							>
								<option value="default">Default</option>
								<option value="apple">Apple</option>
							</select>
						</div>
					</div>
					<div className={styles.navbar__socials}>
						<Link to={""}>
							<Image className={styles.navbar__logo} src={facebook}></Image>
						</Link>
						<Link to={""}>
							<Image className={styles.navbar__logo} src={twitter}></Image>
						</Link>
						<Link to={""}>
							<Image className={styles.navbar__logo} src={instagram}></Image>
						</Link>
					</div>
					<button className={styles.navbar__button}>Регистрация</button>
					<div className={styles.navbar__line}></div>
					<div className={styles.navbar__selectwrapper}>
						<select
							className={`${styles.navbar__language} ${styles.navbar__select}`}
							name="language"
							id=""
							onChange={(e) => {
								if (e.target.value !== language) {
									location.pop()
									navigate(`${location.join("/")}/${e.target.value}`)
								}
								dispatch(setLang(e.target.value))
							}}
						>
							<option selected={languageRedux === "en"} value="en">
								Англ
							</option>
							<option selected={languageRedux === "ru"} value="ru">
								Ру
							</option>
						</select>
					</div>
				</div>
			</div>
		)
	} else if (languageRedux === "en") {
		return (
			<div
				className={`${styles.navbar} d-flex flex-wrap justify-content-center flex-wrap justify-content-center`}
			>
				<div
					className={`d-flex flex-wrap align-items-center ${styles.navbar__leftblock}`}
				>
					<Image src={logo}></Image>
					<Link
						to={""}
						className={`${styles.subtitle} ${styles.navbar__instruction}`}
					>
						Instruction
					</Link>
					<Link to={""} className={styles.subtitle}>
						Play
					</Link>
				</div>
				<div
					className={`${styles.navbar__rightblock} d-flex align-items-center w-auto justify-content-center justify-content-lg-end flex-shrink-0 flex-grow-1 w-auto flex-wrap`}
				>
					<div className="d-none d-lg-flex align-items-center">
						<p className={` m-0 mr-3`}>Keyboard :</p>
						<div
							className={`${styles.navbar__keyboard} ${styles.navbar__selectwrapper}`}
						>
							<select
								name=""
								id=""
								className={`${styles.navbar__keyboards} ${styles.navbar__select}`}
								onChange={(e) => {
									dispatch(setKeyboard(e.target.value))
								}}
							>
								<option value="default">Default</option>
								<option value="apple">Apple</option>
							</select>
						</div>
					</div>
					<div className={styles.navbar__socials}>
						<Link to={""}>
							<Image className={styles.navbar__logo} src={facebook}></Image>
						</Link>
						<Link to={""}>
							<Image className={styles.navbar__logo} src={twitter}></Image>
						</Link>
						<Link to={""}>
							<Image className={styles.navbar__logo} src={instagram}></Image>
						</Link>
					</div>
					<button className={styles.navbar__button}>Log In</button>
					<div className={styles.navbar__line}></div>
					<div className={styles.navbar__selectwrapper}>
						<select
							className={`${styles.navbar__language} ${styles.navbar__select}`}
							name="language"
							id=""
							onChange={(e) => {
								if (e.target.value !== language) {
									location.pop()
									navigate(`${location.join("/")}/${e.target.value}`)
								}
								dispatch(setLang(e.target.value))
							}}
						>
							<option value="en">En</option>
							<option value="ru">Ru</option>
						</select>
					</div>
				</div>
			</div>
		)
	} else {
		return <div></div>
	}
}

export default Navbar
