import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"
import { Header, Sidebar } from "components/core"
import { Capitalize } from "helpers"

type P = ComponentPropsWithoutRef<"main"> & {
	tab: "dashboard" | "transactions" | "schedules" | "users" | "settings"
}

export const Wrapper: Component<P> = ({
	className,
	tab,
	children,
	...props
}) => {
	return (
		<main
			className={`flex p-8 h-screen overflow-hidden gap-8 bg-background ${className}`}
			{...props}
		>
			<Sidebar openedTab={tab} />

			<div className="flex flex-col gap-4 grow overflow-x-hidden">
				<Header tabName={Capitalize(tab)} />
				<div className="h-full w-full overflow-auto">{children}</div>
			</div>
		</main>
	)
}
