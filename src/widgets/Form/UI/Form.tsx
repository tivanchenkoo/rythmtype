import { useState } from "react"
import facebook from "@/shared/photos/facebookEnter.png"
import google from "@/shared/photos/googleEnter.png"
import styles from "@/widgets/Form/Form.module.scss"
import { useSelector } from "react-redux"
import { selectLang } from "@/shared/Slices/globalInfoSlice"
import { Button } from "react-bootstrap"
const Form = (): JSX.Element => {
	type formTypeType = "signUp" | "logIn"
	const language = useSelector(selectLang)
	const [formType, setFormType] = useState<formTypeType>("signUp")
	const [formState, setFormState] = useState<{
		email: string
		password: string
		submitPassword: string
	}>({
		email: "",
		password: "",
		submitPassword: "",
	})
	return (
		<form onSubmit={(e) => {
      e.preventDefault()
      console.log(formState)
    }} className={styles.form}>
			<div className="d-flex flex-wrap justify-content-center">
				<Button
					type="button"
					className={
						formType === "signUp"
							? `${styles.form__selected} ${styles.form__formTypeButton}`
							: styles.form__formTypeButton
					}
					onClick={() => setFormType("signUp")}
				>
					{language === "ru" ? "Регистр" : "Sign up "}
				</Button>
				<Button
					className={
						formType === "logIn"
							? `${styles.form__selected} ${styles.form__formTypeButton}`
							: styles.form__formTypeButton
					}
					type="button"
					onClick={() => setFormType("logIn")}
				>
					{language === "ru" ? "Войти" : "	Log in"}
				</Button>
			</div>
			<label className={styles.form__email}>
				<p>{language === "ru" ? "Почта" : "Email adress"}</p>
				<input
					className={styles.form__input}
					type="email"
					value={formState.email}
					onChange={(e) => {
						setFormState({ ...formState, email: e.target.value })
					}}
				/>
			</label>
			<label>
				<p> {language === "ru" ? "Пароль" : "Password"}</p>
				<input
					className={styles.form__input}
					type="password"
					onChange={(e) => {
						setFormState({ ...formState, password: e.target.value })
					}}
				/>
			</label>
			{formType === "signUp" ? (
				<label>
					<p> {language === "ru" ? "Подтвердите пароль" : "Submit password"}</p>
					<input
						className={styles.form__input}
						type="password"
						onChange={(e) => {
							setFormState({ ...formState, submitPassword: e.target.value })
						}}
					/>
				</label>
			) : null}
			<div className={styles.form__socials}>
				<button className={styles.form__enterIcons}>
					<img src={google} alt="google" />
				</button>
				<button className={styles.form__enterIcons}>
					<img src={facebook} alt="facebook" />
				</button>
			</div>
			<button className={styles.form__submitbutton} type="submit">
				{formType === "signUp" ? "Sign up" : "Log in"}
			</button>
		</form>
	)
}

export default Form
