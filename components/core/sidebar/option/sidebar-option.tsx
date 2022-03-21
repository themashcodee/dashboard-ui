import Link from "next/link"
import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"

type P = {
	icon: Component<ComponentPropsWithoutRef<"svg">>
	label: string
	selected: boolean
	link: string
}

export const SidebarOption: Component<P> = ({
	icon: Icon,
	label,
	selected,
	link,
}) => {
	return (
		<li
			className={`flex gap-3 items-center ${selected ? "font-semibold" : ""}`}
		>
			<Icon />
			<Link href={link}>{label}</Link>
		</li>
	)
}
