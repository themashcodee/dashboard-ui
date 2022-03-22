import { useRef } from "react"

interface InputType<P> {
	callback: (param: P) => void
	delay: number
}

/**
 *
 * This hooks runs a function after a delay. It basically used to reduce the number of requests to the server or a particular event.
 * @param { callback } - The function to be called after the delay.
 * @param { delay } - The delay in milliseconds
 * @returns a function that can be called to fire the callback
 */

export function useDebounce<Params>({ callback, delay }: InputType<Params>) {
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

	return (params: Params) => {
		if (timer.current) {
			clearTimeout(timer.current)
		}
		timer.current = setTimeout(() => {
			callback(params)
		}, delay)
	}
}
