import React from "react"
import type { NextPage } from "next"
import { Head } from "components/core"
import {
	SignupForm,
	OnboardingBanner,
	FormWrapper,
} from "components/onboarding"

const Signup: NextPage = () => {
	return (
		<>
			<Head title="Sign Up" />

			<main className="h-screen w-full flex bg-background">
				<OnboardingBanner />
				<FormWrapper type="signup" form={SignupForm} />
			</main>
		</>
	)
}

export default Signup
