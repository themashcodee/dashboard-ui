import {
	DashboardIcon,
	TransactionsIcon,
	SchedulesIcon,
	UsersIcon,
	SettingsIcon,
} from "components/icons"
import Link from "next/link"
import React from "react"
import { Component } from "types/common"
import { SidebarOption } from "./option"

type P = {
	openedTab: "dashboard" | "transactions" | "schedules" | "users" | "settings"
}

export const Sidebar: Component<P> = ({ openedTab }) => {
	return (
		<aside className="bg-primary rounded-3xl text-white gap-12 p-12 flex flex-col w-64 select-none">
			<h2 className="text-3xl font-semibold">Dash.</h2>

			<ul className="flex flex-col gap-8 grow">
				<SidebarOption
					icon={DashboardIcon}
					label="Dashboard"
					link="/"
					selected={openedTab === "dashboard"}
				/>
				<SidebarOption
					icon={TransactionsIcon}
					label="Transactions"
					link="transactions"
					selected={openedTab === "transactions"}
				/>
				<SidebarOption
					icon={SchedulesIcon}
					label="Schedules"
					link="schedules"
					selected={openedTab === "schedules"}
				/>
				<SidebarOption
					icon={UsersIcon}
					label="Users"
					link="users"
					selected={openedTab === "users"}
				/>
				<SidebarOption
					icon={SettingsIcon}
					label="Settings"
					link="settings"
					selected={openedTab === "settings"}
				/>
			</ul>

			<ul className="flex flex-col gap-2">
				<li className="text-sm">
					<Link href="/">Help</Link>
				</li>
				<li className="text-sm">
					<Link href="/">Contact Us</Link>
				</li>
			</ul>
		</aside>
	)
}
