import React, { ComponentPropsWithoutRef, useMemo } from "react"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { Component } from "types/common"
import { User } from "types/user"
import UserImage from "assets/user.jpg"

type P = ComponentPropsWithoutRef<"li"> & User

export const UserCard: Component<P> = ({
	name,
	email,
	gender,
	userType,
	className,
	...props
}) => {
	const style = useMemo(() => {
		return twMerge(
			"flex px-8 py-4 bg-[#EDEDED] rounded-lg items-center gap-8",
			className
		)
	}, [className])

	return (
		<li className={style} {...props}>
			<div className="rounded-full h-8 w-8 overflow-hidden">
				<Image
					src={UserImage}
					width={32}
					height={32}
					alt="profile picture"
					objectFit="cover"
				/>
			</div>

			<div className="grid grid-cols-5 gap-6 w-full">
				<span className="self-center">{name}</span>
				<span className="col-span-2 self-center">{email}</span>
				<span className="self-center">{gender}</span>
				<span className="self-center">{userType}</span>
			</div>
		</li>
	)
}
