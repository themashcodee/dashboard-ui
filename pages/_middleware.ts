import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const unProtectedRoutes = new Set(["/login", "/signup"])

export async function middleware(req: any) {
	const { pathname } = req.nextUrl

	const nextUrl = req.nextUrl
	nextUrl.pathname = "/signin"

	if (pathname.includes("/api/auth")) return NextResponse.next()

	if (!unProtectedRoutes.has(pathname)) {
		const session = await getToken({
			req,
			secret: process.env.SECRET,
			secureCookie: process.env.NODE_ENV === "production",
		})
		if (!session) return NextResponse.rewrite(nextUrl)
	}
	return NextResponse.next()
}
