import React from "react"
import { Head, Wrapper } from "components/core"
import type { NextPage } from "next"
import { UsersContainer } from "components/users"

const Users: NextPage = () => {
	return (
		<>
			<Head title="Users" />
			<Wrapper tab="users">
				<UsersContainer />
			</Wrapper>
		</>
	)
}

export default Users
