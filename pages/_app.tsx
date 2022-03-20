import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
				<Toaster />
			</SessionProvider>
		</>
	)
}

export default MyApp
