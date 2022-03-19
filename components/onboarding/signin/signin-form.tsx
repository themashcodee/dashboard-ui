import React, { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Input, Button } from "components/core"
import toast from "react-hot-toast"

export const SigninForm = () => {
	const [data, setData] = useState({
		email: "suryawigunaa@gmail.com",
		password: "12345678",
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

	function handleForgotPassword() {
		toast.error("We don't support this feature as of now!")
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
			<Input
				data-key="password"
				type="password"
				label="Password"
				minLength={8}
				maxLength={16}
				value={data.password}
				onChange={onDataChange}
			/>
			<span
				className="text-link text-lg select-none cursor-pointer"
				onClick={handleForgotPassword}
			>
				Forgot password?
			</span>
			<Button type="submit" className="py-3 text-lg rounded-xl">
				Sign In
			</Button>
		</form>
	)
}
