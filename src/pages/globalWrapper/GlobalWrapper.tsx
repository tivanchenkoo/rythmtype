import React, { useCallback, useEffect } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Navbar from "@/widgets/Navbar/UI/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { selectLang, setLang } from "@/shared/Slices/globalInfoSlice"
import queryString from "query-string"
const GlobalWrapper = () => {
	let location = queryString.parse(useLocation().search)

	const language = location.lang
	const languageRedux = useSelector(selectLang)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		if (language !== "ru" && language !== "en") {
			navigate("/?lang=ru")
		}
		if (languageRedux !== language) {
			dispatch(setLang(language))
		}
	}, [language, dispatch, languageRedux, location, navigate])

	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
		</>
	)
}

export default GlobalWrapper
