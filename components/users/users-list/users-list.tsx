import React, { memo, NamedExoticComponent } from "react"
import { User } from "types/user"
import { UserCard } from "components/users"

type P = {
	users: User[]
}

export const UsersList: NamedExoticComponent<P> = memo(({ users }) => {
	return (
		<ul className="flex flex-col gap-5">
			{users.map((user, i) => {
				return (
					<UserCard
						key={user.id}
						{...user}
						className={i % 2 === 0 ? "bg-background" : ""}
					/>
				)
			})}
		</ul>
	)
})

UsersList.displayName = "Users List"
