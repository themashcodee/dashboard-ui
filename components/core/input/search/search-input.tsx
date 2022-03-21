import { SearchIcon } from "components/icons"
import React, {
	ComponentPropsWithRef,
	memo,
	NamedExoticComponent,
	useMemo,
} from "react"
import { twMerge } from "tailwind-merge"

type P = ComponentPropsWithRef<"input">

export const SearchInput: NamedExoticComponent<P> = memo(
	({ className, ...props }) => {
		const style = useMemo(() => {
			return twMerge(
				"h-8 w-full font-light rounded-lg p-4 disabled:cursor-not-allowed disabled:opacity-70 bg-white pr-10 w-48",
				className
			)
		}, [className])

		return (
			<span className="relative">
				<input
					type={"text"}
					placeholder="Search..."
					className={style}
					required
					{...props}
				/>
				<span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-icon pointer-events-none">
					<SearchIcon className="w-[16px] h-[16px]" />
				</span>
			</span>
		)
	}
)

SearchInput.displayName = "Search Input"
