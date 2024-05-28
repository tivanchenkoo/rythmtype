import { useParams } from "react-router-dom"
// import Header from "./widgets/Header/UI/Header"
import Navbar from "./widgets/Navbar/UI/Navbar"
import "./reset.css"
import Header from "./pages/Header/UI/Header"
function Main() {
	const language = useParams().language
	return <Header></Header>
}

export default Main
