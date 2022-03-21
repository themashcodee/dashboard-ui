import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"svg">

export const SchedulesIcon: Component<P> = ({ className = "", ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`w-5 h-5 ${className}`}
			fill="none"
			viewBox="0 0 20 20"
			{...props}
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M7.3 17.2H4.6A3.6 3.6 0 011 13.6V5.5a3.6 3.6 0 013.6-3.6h9.9a3.6 3.6 0 013.6 3.6v2.7M6.4 1v1.8M12.7 1v1.8M1 6.4h17.1m-2.25 6.879l-1.35 1.35M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
			></path>
		</svg>
	)
}
