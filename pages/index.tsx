import React from "react"
import { Head } from "components/core"
import type { NextPage } from "next"
import { signOut, useSession } from "next-auth/react"

const Home: NextPage = () => {
	const session = useSession()
	console.log("SESSION", session)

	return (
		<>
			<Head />

			<main className="p-12">
				<h1 className="text-4xl">Hello World</h1>
				<button
					className="bg-red-400 py-1 px-3 rounded-md text-white"
					onClick={() => signOut()}
				>
					log out
				</button>
			</main>
		</>
	)
}

export default Home
