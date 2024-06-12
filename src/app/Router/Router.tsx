import Main from "Main"
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalWrapper from "@/pages/globalWrapper/GlobalWrapper"
import GameArea from "@/pages/GameArea/UI/GameArea"
import EndScreen from "@/pages/EndScreen/EndScreen"
import { biggerThanEverythingYeat } from "@/entities/checkSong/checkSong"
import SongStore from "@/pages/SongStore/UI/SongStore"
import Instruction from "@/pages/Instruction/UI/Instruction"
import Form from "@/widgets/Form/UI/Form"
export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GlobalWrapper />}>
			<Route path="/completed" element={<EndScreen />}></Route>
			<Route path="/allgames" element={<SongStore />}></Route>
			<Route path="/instruction" element={<Instruction />}></Route>
			<Route path="/form" element={<Form />}></Route>
			<Route
				path="/game/:id"
				element={<GameArea song={biggerThanEverythingYeat} />}
			></Route>
			<Route path="/" element={<Main />}></Route>
		</Route>
	)
)
