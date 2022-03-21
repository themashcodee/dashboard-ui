import React from "react"
import { Head, Wrapper } from "components/core"
import type { NextPage } from "next"
import { SettingContainer } from "components/settings"

const Settings: NextPage = () => {
	return (
		<>
			<Head title="Settings" />
			<Wrapper tab="settings">
				<SettingContainer />
			</Wrapper>
		</>
	)
}

export default Settings
