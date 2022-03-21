import React from "react"
import { Head, Wrapper } from "components/core"
import type { NextPage } from "next"
import { DashboardActivities, DashboardStats } from "components/dashboard"

const Home: NextPage = () => {
	return (
		<>
			<Head />
			<Wrapper tab="dashboard">
				<div className="flex flex-col gap-10">
					<DashboardStats />
					<DashboardActivities />
				</div>
			</Wrapper>
		</>
	)
}

export default Home
