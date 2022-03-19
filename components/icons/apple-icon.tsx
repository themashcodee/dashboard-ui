import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"svg">

export const AppleIcon: Component<P> = ({ className = "", ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`w-4 h-5 ${className}`}
			fill="none"
			viewBox="0 0 12 14"
			{...props}
		>
			<path
				fill="#999"
				d="M6.345 1.22C7.272.006 8.561 0 8.561 0s.191 1.14-.73 2.238c-.983 1.172-2.1.98-2.1.98s-.21-.921.614-2zM5.85 4.017c.476 0 1.361-.65 2.513-.65 1.983 0 2.763 1.4 2.763 1.4S9.6 5.542 9.6 7.42c0 2.119 1.9 2.85 1.9 2.85s-1.329 3.71-3.123 3.71c-.824 0-1.465-.551-2.333-.551-.885 0-1.763.572-2.335.572C2.07 14 0 10.48 0 7.65c0-2.784 1.752-4.244 3.396-4.244 1.068 0 1.897.611 2.453.611z"
			></path>
		</svg>
	)
}
