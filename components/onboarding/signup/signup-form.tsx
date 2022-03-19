import React, { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Input, Button, PasswordInputWithEye } from "components/core"
import toast from "react-hot-toast"

export const SignupForm = () => {
	const [data, setData] = useState({
		email: "suryawigunaa@gmail.com",
		password: "12345678",
		cnfPassword: "12345678",
	})

	const onDataChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const key = e.target.dataset.key ?? ""
		const value = e.target.value
		setData((prev) => ({ ...prev, [key]: value }))
	}, [])

	function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		toast.error(
			"We only support Google Sign In option as of now as per the Assignment Instructions!"
		)
	}

	return (
		<form
			onSubmit={handleFormSubmit}
			className="flex flex-col gap-4 bg-white rounded-2xl p-10"
		>
			<Input
				data-key="email"
				type="email"
				label="Email address"
				value={data.email}
				onChange={onDataChange}
			/>
			<PasswordInputWithEye
				data-key="password"
				label="Password"
				value={data.password}
				onChange={onDataChange}
			/>
			<PasswordInputWithEye
				data-key="cnfPassword"
				label="Confirm Password"
				value={data.cnfPassword}
				onChange={onDataChange}
			/>
			<Button type="submit" className="py-3 text-lg rounded-xl">
				Sign Up
			</Button>
		</form>
	)
}
