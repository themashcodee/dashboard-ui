import React, {
	ComponentPropsWithRef,
	memo,
	NamedExoticComponent,
	useMemo,
} from "react"
import { twMerge } from "tailwind-merge"

type P = ComponentPropsWithRef<"input"> & {
	label?: string
}

export const Input: NamedExoticComponent<P> = memo(
	({ label, className, ...props }) => {
		const style = useMemo(() => {
			return twMerge(
				"h-12 w-full rounded-xl bg-background focus:bg-field-darker p-4 disabled:cursor-not-allowed disabled:opacity-70",
				className
			)
		}, [className])

		return (
			<div className="flex flex-col gap-2">
				{label && (
					<label htmlFor={label} className="cursor-pointer">
						{label}
					</label>
				)}
				<input
					id={label}
					name={label}
					type="text"
					maxLength={50}
					className={style}
					required
					{...props}
				/>
			</div>
		)
	}
)

Input.displayName = "Default Input"
