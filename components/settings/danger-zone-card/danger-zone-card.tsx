import React from "react"
import { signOut } from "next-auth/react"
import toast from "react-hot-toast"

export const DangerZoneCard = () => {
	function handleDeleteAccount() {
		toast.error("This feature is not implemented yet.")
	}

	function handleLogout() {
		signOut()
	}

	return (
		<div className="flex flex-col bg-white gap-8 px-10 py-8 rounded-xl">
			<h3 className="font-semibold text-lg text-[#AF0000]">Danger Zone</h3>

			<div className="flex flex-col gap-4">
				<button
					className="border border-[#AF0000] text-[#AF0000] font-semibold py-2 rounded-lg"
					onClick={handleDeleteAccount}
				>
					Delete My Account
				</button>
				<button
					className="border border-[#AF0000] text-[#AF0000] font-semibold py-2 rounded-lg"
					onClick={handleLogout}
				>
					Log out
				</button>
			</div>
		</div>
	)
}
