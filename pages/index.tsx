import React from "react"
import { Head } from "components/core"
import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<Head />

			<main className="p-12">
				<h1 className="text-4xl">Hello World</h1>
			</main>
		</>
	)
}

export default Home
