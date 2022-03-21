import React from "react"
import { ProfileCard } from "components/settings"
import { AccountCard, SecurityCard, DangerZoneCard } from "components/settings"

export const SettingContainer = () => {
	return (
		<section className="flex gap-12 justify-between">
			<ProfileCard />

			<aside className="w-[40%] max-w-[500px] flex flex-col gap-8">
				<AccountCard />
				<SecurityCard />
				<DangerZoneCard />
			</aside>
		</section>
	)
}
