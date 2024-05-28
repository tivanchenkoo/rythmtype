import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import Main from "./Main"
import store from "@/app/store"
import { Route, RouterProvider } from "react-router-dom"
import { router } from "./app/Router/Router"
import { Provider } from "react-redux"
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
