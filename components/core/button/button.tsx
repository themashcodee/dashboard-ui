import React, {
	ComponentPropsWithRef,
	memo,
	NamedExoticComponent,
	useMemo,
} from "react"
import { twMerge } from "tailwind-merge"

type P = ComponentPropsWithRef<"button">

export const Button: NamedExoticComponent<P> = memo(
	({ children, className, ...props }) => {
		const style = useMemo(
			() => twMerge("bg-primary text-white font-bold", className),
			[className]
		)

		return (
			<button className={style} {...props}>
				{children}
			</button>
		)
	}
)

Button.displayName = "Default Button"
