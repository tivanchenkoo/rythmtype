import React, { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Navbar from "@/widgets/Navbar/UI/Navbar"
import { useDispatch, useSelector } from "react-redux"
import {
	selectKeyboard,
	selectLang,
	setKeyboard,
	setLang,
} from "@/shared/Slices/globalInfoSlice"
import queryString from "query-string"
import { Cookies } from "react-cookie"
const GlobalWrapper = () => {
	let location = queryString.parse(useLocation().search)
	const language = location.lang
	const languageRedux = useSelector(selectLang)
	const cookies = new Cookies()
	const cookieLanguage = cookies.get("lang")
	const cookieKeyboard = cookies.get("keyboard")
	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		if (language === "ru" || language === "en") {
			new Cookies().set("lang", language)
		}
	}, [language])
	useEffect(() => {
		if (!cookieKeyboard) {
			new Cookies().set("keyboard", "default")
		}
		dispatch(setKeyboard(cookieKeyboard))
	}, [cookieKeyboard, dispatch])
	useEffect(() => {
		if (language !== "ru" && language !== "en") {
			navigate(`/?lang=${cookieLanguage}`)
		}
		if (cookieLanguage && cookieLanguage !== languageRedux) {
			dispatch(setLang(language))
		}
	}, [language, dispatch, languageRedux, navigate, cookieLanguage])

	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
		</>
	)
}

export default GlobalWrapper
