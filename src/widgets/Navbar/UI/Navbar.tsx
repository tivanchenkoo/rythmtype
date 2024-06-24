import { Image } from "react-bootstrap"
import logo from "@/shared/photos/header/RythmTypeLogo.png"
import facebook from "@/shared/photos/facebooklogo.png"
import styles from "@/widgets/Navbar/Navbar.module.scss"
import twitter from "@/shared/photos/twitterlogo.png"
import instagram from "@/shared/photos/instagramlogo.png"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import {
	selectKeyboard,
	selectLang,
	setKeyboard,
} from "@/shared/Slices/globalInfoSlice"
import { useDispatch, useSelector } from "react-redux"
import { Cookies } from "react-cookie"
const Navbar = (): JSX.Element => {
	const navigate = useNavigate()
	const keyboard = useSelector(selectKeyboard)
	const cookies = new Cookies()
	let location = useLocation().pathname.split(/\//g)
	type languageType = "ru" | "en"
	const { language } = useParams<{ language: languageType }>()
	const languageRedux = useSelector(selectLang)
	const dispatch = useDispatch()
	console.log(languageRedux)
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
						to={`/instruction?lang=${languageRedux}`}
						className={`${styles.subtitle} ${styles.navbar__instruction}`}
					>
						Инструкция
					</Link>
					<Link
						to={`/allgames?lang=${languageRedux}`}
						className={styles.subtitle}
					>
						Играть
					</Link>
				</div>
				<div
					className={`${styles.navbar__rightblock} d-flex align-items-center w-auto justify-content-center justify-content-xl-end flex-shrink-0 flex-grow-1 w-auto flex-wrap`}
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
									cookies.set("keyboard", e.target.value)
									dispatch(setKeyboard(e.target.value))
								}}
								value={keyboard}
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
					<Link to={`/form`} className={styles.navbar__button}>
						<p> Регистрация</p>
					</Link>
					<div className={styles.navbar__line}></div>
					<div className={styles.navbar__selectwrapper}>
						<select
							className={`${styles.navbar__language} ${styles.navbar__select}`}
							name="language"
							id=""
							onChange={(e) => {
								if (e.target.value !== language) {
									navigate(`${location.join("/")}?lang=${e.target.value}`)
								}
							}}
							value={languageRedux}
						>
							<option value="en">Англ</option>
							<option value="ru">Ру</option>
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
						to={`/instruction?lang=${languageRedux}`}
						className={`${styles.subtitle} ${styles.navbar__instruction}`}
					>
						Instruction
					</Link>
					<Link
						to={`/allgames?lang=${languageRedux}`}
						className={styles.subtitle}
					>
						Play
					</Link>
				</div>
				<div
					className={`${styles.navbar__rightblock} d-flex align-items-center w-auto justify-content-center justify-content-xl-end flex-shrink-0 flex-grow-1 w-auto flex-wrap`}
				>
					<div className="d-none d-lg-flex align-items-center">
						<p className={` m-0 mr-3`}>Keyboard :</p>
						<div
							className={`${styles.navbar__keyboard} ${styles.navbar__selectwrapper}`}
						>
							<select
								value={keyboard}
								name=""
								id=""
								className={`${styles.navbar__keyboards} ${styles.navbar__select}`}
								onChange={(e) => {
									cookies.set("keyboard", e.target.value)
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
					<Link to={`/form`} className={styles.navbar__button}>
						<p> Log In</p>
					</Link>
					<div className={`d-none d-sm-block ${styles.navbar__line}`}></div>
					<div className={styles.navbar__selectwrapper}>
						<select
							className={`${styles.navbar__language} ${styles.navbar__select}`}
							name="language"
							id=""
							onChange={(e) => {
								if (e.target.value !== language) {
									navigate(`${location.join("/")}?lang=${e.target.value}`)
								}
							}}
							value={languageRedux}
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
