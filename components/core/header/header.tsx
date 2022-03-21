import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"
import { SearchInput } from "components/core"
import { NotificationIcon } from "components/icons"
import Image from "next/image"
import { useSession } from "next-auth/react"
import UserImage from "assets/user.jpg"

type P = ComponentPropsWithoutRef<"header"> & {
	tabName: string
}

export const Header: Component<P> = ({ tabName, className, ...props }) => {
	const session = useSession()

	return (
		<header
			className={`flex items-center py-4 gap-4 justify-between ${className}`}
			{...props}
		>
			<h1 className="font-semibold text-2xl">{tabName}</h1>

			<nav className="flex items-center gap-6">
				<SearchInput />
				<NotificationIcon />

				<div className="rounded-full h-8 w-8 overflow-hidden bg-red-200">
					<Image
						src={session.data?.user?.image ?? UserImage}
						width={32}
						height={32}
						alt="profile picture"
						objectFit="cover"
					/>
				</div>
			</nav>
		</header>
	)
}
