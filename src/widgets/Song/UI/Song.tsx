import React from "react"
interface songProps {
	complexity: "hard" | "easy" | "normal"
	title: string
	author: string
	genre: string
	id: string
  preview : string,
  // timings : number<
}
const Song = (props: songProps) => {
	return <div className="song">

  </div>
}

export default Song
