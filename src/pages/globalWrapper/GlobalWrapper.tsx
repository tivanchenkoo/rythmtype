import React, { useCallback, useEffect } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import Navbar from "@/widgets/Navbar/UI/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { selectLang, setLang } from "@/shared/Slices/globalInfoSlice"
const GlobalWrapper = () => {
	type languageType = "ru" | "en" 
	const { language } = useParams<{ language: languageType }>()
	const languageRedux = useSelector(selectLang)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setLang(language))

	}, [])

	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
		</>
	)
}

export default GlobalWrapper
