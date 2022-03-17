import React from "react"
import NextHead from "next/head"
import { Component } from "types/common"

type P = {
	title?: string
}

export const Head: Component<P> = ({ title = "Dashboard" }) => {
	return (
		<NextHead>
			<title>Blue Sky Analytics | {title}</title>
			<meta
				name="description"
				content="Dashboard UI Development - Blue Sky Analytics Job Assignment"
			/>
			<link rel="icon" href="/favicon.webp" />
		</NextHead>
	)
}
