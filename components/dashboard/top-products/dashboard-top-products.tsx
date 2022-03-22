import { DownArrowIcon } from "components/icons"
import React from "react"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const pieChartData = [
	{
		name: "Basic Tees",
		value: 55,
		color: "#9BDD7C",
	},
	{
		name: "Custom Short Pants",
		value: 31,
		color: "#F6DC7D",
	},
	{
		name: "Super Hoodies",
		value: 14,
		color: "#EE8484",
	},
]

export const TopProducts = () => {
	return (
		<div className="p-10 bg-white rounded-2xl flex flex-col gap-10 w-full">
			<div className="flex justify-between  items-center">
				<h3 className="font-semibold text-lg">Top Products</h3>

				<p className="flex items-center gap-2 text-secondary-text font-primary font-light">
					May-June 2021 <DownArrowIcon className="w-[14px]" />
				</p>
			</div>

			<div className="flex gap-12">
				<ResponsiveContainer>
					<PieChart margin={{ bottom: 0, left: 0, right: 0, top: 0 }}>
						<Pie
							data={pieChartData}
							dataKey="value"
							nameKey="name"
							cx="50%"
							stroke="none"
							cy="50%"
							startAngle={80}
							endAngle={440}
							outerRadius={80}
						>
							{pieChartData.map((entry) => (
								<Cell key={entry.name} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>

				<div className="flex flex-col gap-4 flex-shrink-0 font-primary w-1/2">
					<span className="flex gap-1 flex-col">
						<span className="flex items-center gap-3">
							<span className="w-4 h-4 rounded-full bg-light-green"></span>
							<span className="font-bold">Basic Tees</span>
						</span>
						<span className="pl-7 text-secondary-text">55%</span>
					</span>

					<span className="flex gap-1 flex-col">
						<span className="flex items-center gap-3">
							<span className="w-4 h-4 rounded-full bg-[#F6DC7D]"></span>
							<span className="font-bold">Custom Short Pants</span>
						</span>
						<span className="pl-7 text-secondary-text">31%</span>
					</span>

					<span className="flex gap-1 flex-col">
						<span className="flex items-center gap-3">
							<span className="w-4 h-4 rounded-full bg-[#EE8484]"></span>
							<span className="font-bold">Super Hoodies</span>
						</span>
						<span className="pl-7 text-secondary-text">14%</span>
					</span>
				</div>
			</div>
		</div>
	)
}
