import React, {
	ComponentPropsWithRef,
	memo,
	NamedExoticComponent,
	useMemo,
	useState,
} from "react"
import { twMerge } from "tailwind-merge"
import { EyeopenIcon, EyecloseIcon } from "components/icons"

type P = ComponentPropsWithRef<"input"> & {
	label?: string
}

export const PasswordInputWithEye: NamedExoticComponent<P> = memo(
	({ label, className, ...props }) => {
		const [show, setShow] = useState(false)

		const style = useMemo(() => {
			return twMerge(
				"h-12 w-full rounded-xl bg-background focus:bg-field-darker p-4 disabled:cursor-not-allowed disabled:opacity-70",
				className
			)
		}, [className])

		function handleShowPassword() {
			setShow((prev) => !prev)
		}

		return (
			<div className="flex flex-col gap-2">
				{label && (
					<label htmlFor={label} className="text-lg cursor-pointer">
						{label}
					</label>
				)}
				<span className="relative">
					<input
						id={label}
						name={label}
						minLength={8}
						maxLength={16}
						type={show ? "text" : "password"}
						className={style}
						required
						{...props}
					/>
					<span
						onClick={handleShowPassword}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 text-icon"
					>
						{show ? <EyeopenIcon /> : <EyecloseIcon />}
					</span>
				</span>
			</div>
		)
	}
)

PasswordInputWithEye.displayName = "Password Input with Eye"
