import React from "react"
import { Head, Wrapper } from "components/core"
import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<Head />
			<Wrapper tab="dashboard">
				<h1>Dashboard content</h1>
			</Wrapper>
		</>
	)
}

export default Home
