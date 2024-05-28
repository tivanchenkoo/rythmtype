import { Image } from "react-bootstrap"
import logo from "@/shared/photos/header/RythmTypeLogo.png"
import facebook from "@/shared/photos/facebooklogo.png"
import styles from "@/widgets/Navbar/Navbar.module.scss"
import twitter from "@/shared/photos/twitterlogo.png"
import instagram from "@/shared/photos/instagramlogo.png"
import { Link } from "react-router-dom"
const Navbar = (): JSX.Element => {
	return (
		<div
			className={`${styles.navbar} d-flex flex-wrap justify-content-between flex-wrap justify-content-center`}
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
				className={`${styles.navbar__rightblock} d-flex align-items-center justify-content-end flex-shrink-0 flex-grow-1 w-auto flex-wrap`}
			>
				<div className="d-none d-lg-flex align-items-center">
					<p className={` m-0 mr-3`}>keyboard :</p>
					<div
						className={`${styles.navbar__keyboard} ${styles.navbar__selectwrapper}`}
					>
						<select
							name=""
							id=""
							className={`${styles.navbar__keyboards} ${styles.navbar__select}`}
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
					>
						<option value="">En</option>
						<option value="">Ru</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Navbar
