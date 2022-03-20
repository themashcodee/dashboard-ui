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

			<main className="lg:h-screen min-h-screen h-auto w-full flex flex-col lg:flex-row bg-background">
				<OnboardingBanner />
				<FormWrapper type="signin" form={SigninForm} />
			</main>
		</>
	)
}

export default Signin
