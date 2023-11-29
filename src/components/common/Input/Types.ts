import { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

export type InputTypes = {
	label?: string;
	value?: string;
	isRequired?: boolean;
	customChildren?: ReactNode;
	onChange?: (value: string) => void;
	onChangeValidator?: (value: string) => boolean;
	onBlur?: (value: string) => void;
	onBlurValidator?: (value: string) => boolean;
	classNames?: {
		container?: string,
		label?: string,
		inputContainer?: string,
		input?: string
	};
	style?: {
		container?: CSSProperties,
		label?: CSSProperties,
		input?: CSSProperties
	};
	resetFlag?: number;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export const InputDefaultProps: InputTypes = {
	resetFlag: 0
};
