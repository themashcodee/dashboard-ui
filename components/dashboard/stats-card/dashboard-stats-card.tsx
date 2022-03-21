import React, { ComponentPropsWithoutRef, useMemo } from "react"
import { twMerge } from "tailwind-merge"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"div"> & {
	label: string
	icon: Component<ComponentPropsWithoutRef<"svg">>
	stats: string
}

export const StatsCard: Component<P> = ({
	label,
	icon: Icon,
	stats,
	className,
	...props
}) => {
	const style = useMemo(() => {
		return twMerge(
			"p-6 flex-shrink-0 flex flex-col w-64 rounded-2xl bg-[#DDEFE0]",
			className
		)
	}, [className])

	return (
		<div className={style} {...props}>
			<Icon className="self-end" />

			<span className="flex flex-col gap-1">
				<span>{label}</span>
				<span className="font-semibold text-2xl">{stats}</span>
			</span>
		</div>
	)
}
