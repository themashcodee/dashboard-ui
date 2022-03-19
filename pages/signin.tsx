import React from "react"
import type { NextPage } from "next"
import { Head } from "components/core"
import {
	SigninForm,
	OnboardingBanner,
	FormWrapper,
} from "components/onboarding"

const Signin: NextPage = () => {
	return (
		<>
			<Head title="Sign In" />

			<main className="h-screen w-full flex bg-background">
				<OnboardingBanner />
				<FormWrapper type="signin" form={SigninForm} />
			</main>
		</>
	)
}

export default Signin
