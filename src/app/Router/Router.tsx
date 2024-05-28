import Main from "Main"
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
export const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/:language" element={<Main />}></Route>)
)
