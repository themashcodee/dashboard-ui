import { useEffect, useState } from "react"
import { User } from "types/user"

/**
 *
 * This hook is used to fetch users from the API
 * @param filter a query to search the users
 */
export function useUsers(filter?: string): {
	loading: boolean
	users: User[]
	error?: string
	refetch: (refetchFilter?: string) => Promise<void>
} {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string>()
	const [users, setUsers] = useState<User[]>([])

	async function refetch(refetchFilter?: string) {
		try {
			const data = await (
				await fetch(`/api/users?search=${refetchFilter ?? filter ?? ""}`)
			).json()
			setUsers(data)
		} catch (err) {
			setError((err as Object).toString())
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		;(async () => {
			try {
				const data = await (
					await fetch(`/api/users?search=${filter ?? ""}`)
				).json()
				setUsers(data)
			} catch (err) {
				setError((err as Object).toString())
			} finally {
				setLoading(false)
			}
		})()
	}, [filter])

	return { loading, error, users, refetch }
}
