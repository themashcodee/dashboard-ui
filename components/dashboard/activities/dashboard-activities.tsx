import React from "react"
import { DownArrowIcon } from "components/icons"
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts"

const graphData = [
	{ value: 0, guest: 200, user: 100 },
	{ week: 1, value: 100, guest: 370, user: 400 },
	{ week: 2, value: 200, guest: 205, user: 150 },
	{ week: 3, value: 300, guest: 300, user: 435 },
	{ week: 4, value: 400, guest: 225, user: 175 },
	{ value: 500, guest: 440, user: 250 },
]

export const DashboardActivities = () => {
	return (
		<div className="p-8 bg-white rounded-2xl flex flex-col gap-10">
			<div className="flex justify-between  items-center">
				<span className="flex flex-col">
					<h3 className="font-semibold text-lg">Activities</h3>
					<p className="flex items-center gap-2 text-secondary-text">
						May-June 2021 <DownArrowIcon className="w-[14px]" />
					</p>
				</span>

				<div className="flex gap-10">
					<span className="flex gap-2 items-center">
						<span className="w-3 h-3 rounded-full bg-light-red"></span>
						<p>Guest</p>
					</span>
					<span className="flex gap-2 items-center">
						<span className="w-3 h-3 rounded-full bg-light-green"></span>
						<p>User</p>
					</span>
				</div>
			</div>

			<div className="w-full h-64">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={graphData}
						margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							strokeOpacity={0}
							dataKey="week"
							tickFormatter={(val) => val && `Week ${val}`}
						/>
						<YAxis
							strokeOpacity={0}
							dataKey="value"
							domain={[0, 500]}
							tickCount={6}
						/>
						<Line
							type="monotone"
							dataKey="guest"
							strokeWidth={3}
							stroke="#E9A0A0"
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="user"
							strokeWidth={3}
							dot={false}
							stroke="#9BDD7C"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
