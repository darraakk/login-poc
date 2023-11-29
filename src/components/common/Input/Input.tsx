import React, { useEffect, useState, useRef } from "react";

import { InputDefaultProps, InputTypes } from "./Types";
import styles from "./Input.module.scss";

const Input = (props: InputTypes) => {
	const inputRef = useRef<any>();
	const [inputValue, setInputValue] = useState<string | undefined>(props.value);
	
	const onChangeValue = (value: string): void => {
		if (!props.onChangeValidator || props.onChangeValidator(value)) {
			if (props.onChange) {
				props.onChange(value);
			};
			setInputValue(value);
		};
	};

	const onBlurInput = (value: string) => {
		if (props.onBlur) {
			if (props.onBlurValidator) {
				props.onBlurValidator(value);
				props.onBlur(value);
			} else {
				props.onBlur(value);
			};
		};
	};

	useEffect(() => {
		if (props.value !== inputValue) setInputValue(props.value);
	}, [inputValue, props.value]);

	useEffect(() => {
		if (props.resetFlag === undefined) return;
		if (props.resetFlag > 0) inputRef.current.value = "";
	}, [props.resetFlag]);

	return (
		<div
			className={`${
				styles.container}${
				props.classNames?.container ? " " + props.classNames.container : ""
			}`}
			style={props.style?.container}
		>
			{props.label && (
				<div
					className={`${
						styles.label}${
						props.classNames?.label ? " " + props.classNames.label : ""
					}`}
					style={props.style?.label}
				>
					<p className={props.isRequired ? styles.labelRequired : ""}>
						{props.label}
					</p>
				</div>
			)}

			<div
				className={`${
					styles.inputContainer}${
					props.classNames?.inputContainer ? " " + props.classNames.inputContainer : ""
				}`}
			>
				<input
					ref={inputRef}
					className={`${
						styles.input}${
						props.classNames?.input ? " " + props.classNames.input : ""
					}`}
					value={inputValue}
					onChange={(event) => onChangeValue(event.target.value)}
					onBlur={(event) => onBlurInput(event.target.value)}
					style={props.style?.input}
					{...props.inputProps}
				/>

				{props.customChildren && (
					<div className={styles.inputChild}>
						{props.customChildren}
					</div>
				)}
			</div>
		</div>
	);
}

Input.defaultProps = InputDefaultProps;

export default Input;
