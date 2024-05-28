import { useParams } from "react-router-dom"
// import Header from "./widgets/Header/UI/Header"
import Navbar from "./widgets/Navbar/UI/Navbar"
import "./reset.css"
function Main() {
	const language = useParams().language
	return <Navbar></Navbar>
}

export default Main
