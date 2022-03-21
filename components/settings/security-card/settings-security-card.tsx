import React, { useState } from "react"

export const SecurityCard = () => {
	const [checked, setChecked] = useState(true)

	return (
		<div className="flex flex-col bg-white gap-8 px-10 py-8 rounded-xl">
			<h3 className="font-semibold text-lg">Security</h3>

			<div className="flex justify-between items-center">
				<span>2-Step Verifiication</span>

				<span
					onClick={() => setChecked((prev) => !prev)}
					className="bg-[#66D055] rounded-full w-12 h-6 p-1 flex cursor-pointer"
				>
					<span
						className={`bg-white rounded-full w-4 h-4 transition-all duration-500 ${
							checked ? "ml-6" : ""
						}`}
					></span>
				</span>
			</div>
		</div>
	)
}
