import React from "react"
import { LeftArrowIcon, RightArrowIcon } from "components/icons"

export const Pagination = () => {
	return (
		<div className="flex justify-end gap-2">
			<button className="border rounded-lg w-8 h-8 flex justify-center items-center">
				<LeftArrowIcon className="w-[16px] h-[16px]" />
			</button>
			<button className="border bg-field-darker rounded-lg w-8 h-8 flex justify-center items-center">
				1
			</button>
			<button className="border rounded-lg w-8 h-8 flex justify-center items-center">
				2
			</button>
			<button className="border rounded-lg w-8 h-8 flex justify-center items-center">
				3
			</button>
			<button className="border rounded-lg w-8 h-8 flex justify-center items-center">
				4
			</button>
			<button className="border rounded-lg w-8 h-8 flex justify-center items-center">
				<RightArrowIcon className="w-[16px] h-[16px]" />
			</button>
		</div>
	)
}
