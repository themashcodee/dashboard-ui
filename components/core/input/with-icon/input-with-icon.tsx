import { SearchIcon } from "components/icons"
import React, {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	memo,
	NamedExoticComponent,
	useMemo,
} from "react"
import { twMerge } from "tailwind-merge"
import { Component } from "types/common"

type P = ComponentPropsWithRef<"input"> & {
	icon: Component<ComponentPropsWithoutRef<"svg">>
	label?: string
}

export const InputWithIcon: NamedExoticComponent<P> = memo(
	({ label, className, icon: Icon, ...props }) => {
		const style = useMemo(() => {
			return twMerge(
				"h-12 w-full rounded-xl bg-background focus:bg-field-darker p-4 disabled:cursor-not-allowed disabled:opacity-70 pr-12",
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
				<span className="relative">
					<input
						id={label}
						name={label}
						type="text"
						className={style}
						required
						{...props}
					/>
					<span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-icon pointer-events-none">
						<Icon />
					</span>
				</span>
			</div>
		)
	}
)

InputWithIcon.displayName = "Search Input"
