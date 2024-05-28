import Main from "Main"
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalWrapper from "@/pages/globalWrapper/GlobalWrapper"
export const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<GlobalWrapper />}>
		<Route path="/:language" element={<Main />}></Route>
	</Route>)
)
