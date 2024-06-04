import React, { useState } from "react"
import "@/shared/UI/Key/Key.scss"
interface props {
	keyName: string
	row: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	specific?: string
	isHover?: boolean
}
const Key = (props: props): JSX.Element => {
	const { keyName, row, specific, isHover } = props
	return (
		<div
			className={`key row${row} ${specific ? specific : ""} ${
				isHover ? `row${row}--hover row--hover` : ""
			}`}
		>
			{keyName}
		</div>
	)
}

export default Key
