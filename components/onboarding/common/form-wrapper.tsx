import React from "react"
import Link from "next/link"
import toast from "react-hot-toast"
import { GoogleIcon, AppleIcon } from "components/icons"
import { Component } from "types/common"

type P = {
	type: "signin" | "signup"
	form: () => JSX.Element
}

export const FormWrapper: Component<P> = ({ type, form: Form }) => {
	function handleAppleBtnClick() {
		toast.error(
			"We only support Google Sign In option as of now as per the Assignment Instructions!"
		)
	}

	return (
		<section className="flex flex-col justify-center items-center w-[60%] p-12 overflow-auto">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<h1 className="text-4xl font-bold">
						{type === "signin" ? "Sign In" : "Create an account"}
					</h1>
					<p className="text-lg">
						{type === "signin"
							? "Sign in to your account"
							: "Create an account to use dashboard"}
					</p>
				</div>

				<div className="flex gap-5 justify-between">
					<button className="bg-white px-5 py-2 rounded-2xl flex gap-2 items-center font-light">
						<GoogleIcon />
						<span>{`${
							type === "signin" ? "Sign in" : "Sign up"
						} with Google`}</span>
					</button>
					<button
						className="bg-white px-5 py-2 rounded-2xl flex gap-2 items-center font-light"
						onClick={handleAppleBtnClick}
					>
						<AppleIcon />
						<span>{`${
							type === "signin" ? "Sign in" : "Sign up"
						} with Apple`}</span>
					</button>
				</div>

				<Form />

				<span className="flex gap-2 justify-center text-link">
					<span className="text-secondary-text">
						{type === "signin"
							? "Don't have an account?"
							: "Already have an account?"}
					</span>
					<Link href={type === "signin" ? "/signup" : "/signin"}>
						{type === "signin" ? "Register here" : "Sign in here"}
					</Link>
				</span>
			</div>
		</section>
	)
}
