import React, { useCallback, useEffect } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Navbar from "@/widgets/Navbar/UI/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { selectLang, setLang } from "@/shared/Slices/globalInfoSlice"
const GlobalWrapper = () => {
	type languageType = "ru" | "en"
	let location = useLocation().pathname.split(/\//g)
	const { language } = useParams<{ language: languageType }>()
	const languageRedux = useSelector(selectLang)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		if (language !== "ru" && language !== "en") {
			location.pop()
			navigate(`${location.join("/")}/en`)
		}
		if (languageRedux !== language) {
			dispatch(setLang(language))
		}
	}, [language, dispatch,languageRedux, location, navigate])

	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
		</>
	)
}

export default GlobalWrapper
