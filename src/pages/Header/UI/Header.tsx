import React from "react"
import styles from "@/pages/Header/Header.module.scss"
import { Link } from "react-router-dom"
import { Col, Container, Image, Row } from "react-bootstrap"
import rocket from "@/shared/photos/Rocket.png"
import { selectLang } from "@/shared/Slices/globalInfoSlice"
import { useSelector } from "react-redux"
const Header = (): JSX.Element => {
	const language = useSelector(selectLang)

	if (language === "ru") {
		return (
			<header className={styles.header}>
				<Container className="h-100" fluid>
					<Row
						style={{
							top: "50%",
							transform: "translateY(-50%)",
							position: "relative",
						}}
					>
						<Col xs={12} lg={7}>
							<div
								className={`${styles.header__info} d-flex align-items-center align-items-lg-start flex-column`}
							>
								<p className={styles.header__title}>Научись печатать быстрее</p>
								<p className={styles.header__subtitle}>
									Пиши в 2 раза быстрее просто играя в игру
								</p>
								<Link
									className={styles.header__playbutton}
									to={`/allgames?lang=${language}`}
								>
									Играть
								</Link>
								<Link
									className={styles.header__instructionbutton}
									to={`/instruction?lang=${language}`}
								>
									Инструкция
								</Link>
							</div>
						</Col>
						<Col xs={0} lg={5} className="h-100 d-flex aling-items-center">
							<Image className={styles.header__image} src={rocket}></Image>
						</Col>
					</Row>
				</Container>
			</header>
		)
	} else if (language === "en") {
		return (
			<header className={styles.header}>
				<Container className="h-100" fluid>
					<Row>
						<Col xs={12} lg={7}>
							<div
								className={`${styles.header__info} d-flex align-items-center align-items-lg-start flex-column`}
							>
								<p className={styles.header__title}>Learn typing with game</p>
								<p className={styles.header__subtitle}>
									Type X2 faster just by playing the game
								</p>
								<Link
									className={styles.header__playbutton}
									to={`/game?lang=${language}`}
								>
									Play
								</Link>
								<Link
									className={styles.header__instructionbutton}
									to={`/instruction?lang=${language}`}
								>
									Instruction
								</Link>
							</div>
						</Col>
						<Col xs={0} lg={5} className="h-100 d-flex aling-items-center">
							<Image className={styles.header__image} src={rocket}></Image>
						</Col>
					</Row>
				</Container>
			</header>
		)
	}
	return <div>Smth went wrong, pls go back</div>
}

export default Header
