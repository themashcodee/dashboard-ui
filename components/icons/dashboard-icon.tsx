import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"svg">

export const DashboardIcon: Component<P> = ({ className = "", ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`w-4 h-4 ${className}`}
			fill="none"
			viewBox="0 0 18 18"
			{...props}
		>
			<path
				fill="currentColor"
				d="M9.9 0a.9.9 0 00-.9.9v7.2a.9.9 0 00.9.9h7.2a.9.9 0 00.9-.9A8.1 8.1 0 009.9 0zm.9 7.2V1.863A6.3 6.3 0 0116.137 7.2H10.8z"
			></path>
			<path
				fill="currentColor"
				d="M16.938 10.855a.898.898 0 00-1.152.549 7.2 7.2 0 11-9.19-9.19.901.901 0 00-.594-1.701 9 9 0 1011.485 11.485.9.9 0 00-.55-1.143z"
			></path>
		</svg>
	)
}
