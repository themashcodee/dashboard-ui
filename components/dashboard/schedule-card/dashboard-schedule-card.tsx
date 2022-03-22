import React from "react"
import { Component } from "types/common"

type P = {
	id: number
	color: string
	title: string
	time: string
	location: string
}

export const ScheduleCard: Component<P> = ({
	color,
	title,
	time,
	location,
}) => {
	return (
		<div className="flex gap-4">
			<div className="w-2" style={{ background: color }}></div>

			<div className="flex flex-col gap-1 py-2">
				<h4 className="font-semibold">{title}</h4>
				<p className="text-icon">{time}</p>
				<p className="text-icon">{location}</p>
			</div>
		</div>
	)
}
