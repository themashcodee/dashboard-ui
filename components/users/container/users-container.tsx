import React, { useState } from "react"
import { UsersHeader } from "components/users"

export const UsersContainer = () => {
	const [searchQuery, setSearchQuery] = useState("")

	return (
		<section className="p-10 bg-white rounded-xl flex flex-col h-full overflow-hidden">
			<UsersHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
		</section>
	)
}
