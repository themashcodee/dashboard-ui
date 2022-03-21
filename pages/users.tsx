import React from "react"
import { Head, Wrapper } from "components/core"
import type { NextPage } from "next"

const Users: NextPage = () => {
	return (
		<>
			<Head title="Users" />
			<Wrapper tab="users">
				<h1>Users content</h1>
			</Wrapper>
		</>
	)
}

export default Users
