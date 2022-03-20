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

			<main className="lg:h-screen min-h-screen h-auto w-full flex flex-col lg:flex-row bg-background">
				<OnboardingBanner />
				<FormWrapper type="signup" form={SignupForm} />
			</main>
		</>
	)
}

export default Signup
