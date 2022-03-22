import React, { Dispatch, SetStateAction } from "react"
import { SearchInput } from "components/core"
import { FilterIcon, PlusIcon } from "components/icons"
import { Component } from "types/common"

type P = {
	searchQuery: string
	setSearchQuery: Dispatch<SetStateAction<string>>
}

export const UsersHeader: Component<P> = ({ searchQuery, setSearchQuery }) => {
	return (
		<div className="flex justify-between items-center">
			<h2 className="font-semibold text-xl">User Records</h2>

			<div className="flex gap-4">
				<SearchInput
					placeholder="Search in table..."
					className="bg-background"
					value={searchQuery}
					onChange={({ target }) => setSearchQuery(target.value)}
				/>
				<button className="font-semibold flex gap-1 border items-center py-1 px-3 border-light-grey rounded-xl">
					<FilterIcon className="w-[16px] text-light-grey" />
					<span className="text-light-grey">Filter</span>
				</button>
				<button className="font-semibold flex gap-1 bg-primary items-center py-1 px-3 rounded-xl">
					<PlusIcon className="w-[16px] text-white" />
					<span className="text-white">Add</span>
				</button>
			</div>
		</div>
	)
}
