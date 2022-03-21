import React from "react"
import { Head, Wrapper } from "components/core"
import type { NextPage } from "next"

const Settings: NextPage = () => {
	return (
		<>
			<Head title="Settings" />
			<Wrapper tab="settings">
				<h1>Settings content</h1>
			</Wrapper>
		</>
	)
}

export default Settings
