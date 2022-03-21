import React, { FormEvent } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import UserImage from "assets/user.jpg"
import { Button, Input, InputWithIcon } from "components/core"
import toast from "react-hot-toast"
import { CalendarIcon } from "components/icons"

export const ProfileCard = () => {
	const session = useSession()

	function handleUpdateProfile(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		toast.error("This feature is not yet implemented.")
	}

	return (
		<div className="flex flex-col w-[60%] max-w-[600px] bg-white gap-8 px-10 py-8 rounded-xl">
			<h3 className="font-semibold text-lg">Profile</h3>

			<div className="flex gap-12">
				<div className="flex">
					<div className="flex flex-col gap-3 items-center">
						<span className="rounded-full h-24 w-24 overflow-hidden">
							<Image
								src={session.data?.user?.image ?? UserImage}
								width={96}
								height={96}
								alt="profile picture"
								objectFit="cover"
							/>
						</span>
						<button className="border py-1 px-2 max-w-max border-secondary-text rounded-md font-medium text-secondary-text text-sm">
							Change
						</button>
					</div>
				</div>

				<form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
					<span className="flex gap-6">
						<Input
							label="First Name"
							defaultValue={session.data?.user?.name?.split(" ")[0] ?? "Surya"}
						/>
						<Input
							label="Last Name"
							defaultValue={session.data?.user?.name?.split(" ")[1] ?? "Wiguna"}
						/>
					</span>
					<InputWithIcon
						label="Date of Birth"
						type="date"
						defaultValue="1996-02-28"
						icon={CalendarIcon}
					/>
					<Input
						label="Phone Number"
						maxLength={12}
						type="tel"
						defaultValue="+1283716291"
					/>
					<Input
						label="Address"
						defaultValue="323 Fifth Ave. Canandaigua, NY"
					/>
					<Button
						type="submit"
						className="bg-secondary py-2 px-6 max-w-max self-end rounded-lg"
					>
						Save
					</Button>
				</form>
			</div>
		</div>
	)
}
