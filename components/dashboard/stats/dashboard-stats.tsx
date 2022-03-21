import React from "react"
import { StatsCard } from "components/dashboard"
import {
	CommunityIcon,
	LikeIcon,
	RevenueIcon,
	TransactionsIcon,
} from "components/icons"

export const DashboardStats = () => {
	return (
		<section className="flex w-full hide-scrollbar gap-8 overflow-auto">
			<StatsCard label="Total Revenues" stats="$2,129,430" icon={RevenueIcon} />
			<StatsCard
				label="Total Transactions"
				stats="1,520"
				icon={TransactionsIcon}
				className="bg-[#F4ECDD]"
			/>
			<StatsCard
				label="Total Likes"
				stats="9,721"
				icon={LikeIcon}
				className="bg-[#EFDADA]"
			/>
			<StatsCard
				label="Total Users"
				stats="892"
				icon={CommunityIcon}
				className="bg-[#DEE0EF]"
			/>
		</section>
	)
}
