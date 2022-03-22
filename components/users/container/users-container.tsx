import React, { useState } from "react"
import { UsersHeader, UsersList, Pagination } from "components/users"
import { useUsers, useDebounce } from "hooks"

export const UsersContainer = () => {
	const [searchQuery, setSearchQuery] = useState("")
	const { loading, error, users, refetch } = useUsers()
	const handleSearch = useDebounce({ callback: refetch, delay: 500 })

	return (
		<section className="p-10 bg-white rounded-xl flex flex-col h-full overflow-hidden gap-6">
			<UsersHeader
				handleSearch={handleSearch}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			<div className="w-full h-full overflow-auto">
				{loading ? (
					"loading..."
				) : error ? (
					"Something went wrong :("
				) : users.length ? (
					<UsersList users={users} />
				) : (
					"No user found"
				)}
			</div>

			<Pagination />
		</section>
	)
}
