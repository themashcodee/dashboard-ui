import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Blue Sky Analytics - Dashboard</title>
				<meta
					name="description"
					content="Dashboard UI Development - Blue Sky Analytics Job Assignment"
				/>
				<link rel="icon" href="/favicon.webp" />
			</Head>

			<main className="p-12">
				<h1 className="text-4xl">Hello World</h1>
			</main>
		</>
	)
}

export default Home
