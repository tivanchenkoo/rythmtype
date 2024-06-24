import React, { useEffect, useState } from "react"
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
	const [cookieLanguage, setCookieLanguage] = useState(cookies.get("lang"))
	const cookieKeyboard = cookies.get("keyboard")
	const navigate = useNavigate()
	const dispatch = useDispatch()
	console.log(cookieLanguage)

	useEffect(() => {
		if (language === "ru" || language === "en") {
			cookies.set("lang", language)
			setCookieLanguage(cookies.get("lang"))
		}
	}, [language, cookieLanguage, cookies])
	useEffect(() => {
		if (!cookieKeyboard) {
			cookies.set("keyboard", "default")
		}
		dispatch(setKeyboard(cookieKeyboard))
	}, [cookieKeyboard, dispatch, cookies])
	useEffect(() => {
		if (language !== "ru" && language !== "en") {
			navigate(`/?lang=${cookieLanguage}`)
		}
		if (language !== languageRedux) {
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
