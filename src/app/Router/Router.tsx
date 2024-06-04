import Main from "Main"
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalWrapper from "@/pages/globalWrapper/GlobalWrapper"
import Keyboard from "@/widgets/Keyboard/UI/Keyboard"
import GameArea from "@/pages/GameArea/UI/GameArea"

interface songInterface {
	lyrics: string[]
	language: "en" | "ru"
}

const song: songInterface = {
	lyrics: [
		"Shorty, yeah, oh-woah",
		"Stepped in the party, yeah, that bitch off a molly",
		"Golly, big stick going crazy",
		"I like cute colored ladies, yeah ",
		"Yeah, she know that I count all the racks, yeah",
		"She know that I make it right back",
		"I feel like it's Fortnite, I just got a tac'",
		"I did it again, man, I just got a pack, yeah",
		"Shorty, look in her eyes and she off a molly",
	],
	language: "en",
}
export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GlobalWrapper />}>
			<Route path="/game/:language" element={<GameArea text={song} />}></Route>
			<Route path="/:language" element={<Main />}></Route>
		</Route>
	)
)
