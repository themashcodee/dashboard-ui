import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const { GOOGLE_CLIENT_ID = "", GOOGLE_CLIENT_SECRET = "", SECRET } = process.env

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: SECRET,
	pages: {
		signIn: "/signin",
		signOut: "/",
		newUser: "/signup",
	},
})
