import { RightArrowIcon } from "components/icons"
import React from "react"
import { ScheduleCard } from "components/dashboard"

const scheduleData = [
	{
		id: 1,
		color: "#9BDD7C",
		title: "Meeting with suppliers from Kuta Bali",
		time: "14.00-15.00",
		location: "at Sunset Road, Kuta, Bali",
	},
	{
		id: 2,
		color: "#6972C3",
		title: "Check operation at Giga Factory 1",
		time: "18.00-20.00",
		location: "at Central Jakarta",
	},
]

export const TodaySchedule = () => {
	return (
		<div className="p-10 bg-white rounded-2xl flex flex-col gap-10 w-full">
			<div className="flex justify-between  items-center">
				<h3 className="font-semibold text-lg">{"Today's Schedule"}</h3>

				<p className="flex items-center gap-2 text-secondary-text font-primary font-light">
					See All <RightArrowIcon className="w-[14px]" />
				</p>
			</div>

			<ul className="flex flex-col gap-4">
				{scheduleData.map((schedule) => {
					return <ScheduleCard key={schedule.id} {...schedule} />
				})}
			</ul>
		</div>
	)
}
