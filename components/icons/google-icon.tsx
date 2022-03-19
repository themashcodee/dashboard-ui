import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"svg">

export const GoogleIcon: Component<P> = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`h-4 w-4 ${className}`}
			fill="none"
			viewBox="0 0 14 14"
			{...props}
		>
			<path
				fill="#4285F4"
				d="M13.993 7.131c0-.574-.048-.992-.151-1.426H7.139v2.589h3.935c-.08.643-.508 1.612-1.46 2.263l-.013.087 2.119 1.604.147.014c1.348-1.217 2.126-3.007 2.126-5.131z"
			></path>
			<path
				fill="#34A853"
				d="M7.14 13.952c1.927 0 3.545-.62 4.727-1.69l-2.253-1.705c-.603.41-1.412.697-2.475.697a4.288 4.288 0 01-4.06-2.898l-.084.007L.79 10.029l-.029.078c1.174 2.28 3.585 3.845 6.377 3.845z"
			></path>
			<path
				fill="#FBBC05"
				d="M3.078 8.356c-.15-.434-.238-.9-.238-1.38 0-.48.087-.946.23-1.38l-.004-.092L.836 3.81l-.074.033a6.853 6.853 0 00-.761 3.132C0 8.1.278 9.162.762 10.107l2.316-1.751z"
			></path>
			<path
				fill="#EB4335"
				d="M7.14 2.697c1.34 0 2.244.566 2.76 1.039l2.014-1.922C10.678.69 9.068 0 7.14 0 4.347 0 1.936 1.566.762 3.844L3.07 5.596a4.307 4.307 0 014.07-2.899z"
			></path>
		</svg>
	)
}
