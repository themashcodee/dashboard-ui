import { Button, Input, PasswordInputWithEye } from "components/core"
import { useSession } from "next-auth/react"
import React, { FormEvent } from "react"
import toast from "react-hot-toast"

export const AccountCard = () => {
	const session = useSession()

	function handleUpdateAccount(e: FormEvent) {
		e.preventDefault()
		toast.error(
			"We only support Google Sign In option as of now as per the Assignment Instructions!"
		)
	}

	return (
		<div className="flex flex-col bg-white gap-8 px-10 py-8 rounded-xl">
			<h3 className="font-semibold text-lg">Account</h3>

			<form onSubmit={handleUpdateAccount} className="flex flex-col gap-4">
				<Input
					label="Email address"
					defaultValue={session.data?.user?.email ?? "suryawigunaa@gmail.com"}
				/>
				<PasswordInputWithEye
					label="Current Password"
					minLength={8}
					maxLength={16}
					defaultValue="123456788"
				/>
				<PasswordInputWithEye
					label="New Password"
					minLength={8}
					maxLength={16}
					defaultValue="123456788"
				/>
				<Button
					type="submit"
					className="bg-secondary py-2 px-6 max-w-max self-end rounded-lg"
				>
					Save
				</Button>
			</form>
		</div>
	)
}
