import React, { CSSProperties } from "react";
import { SwitchTypes, SwitcheDefaultProps } from "./Types";
import styles from "./Switch.module.scss";

const Switch = (props: SwitchTypes) => {
	const onclick = (switchState: boolean) => props.setIsOn(switchState);

	return (
		<div
			className={`${styles.container} ${props.classNames}`}
			style={{
				width: props.containerWidth,
				height: props.containerHeight,
				flexDirection: props.flexDirection,
				justifyContent: props.justifyContent,
				padding: props.padding,
				...props.style
			} as CSSProperties}
			onClick={() => {if(!props.iconLock) onclick(!props.isOn)}}
		>
			<div
				className={`${
					styles.Switch} ${
					!props.isOn && styles.SwitchOff} ${
					props.grayColor && styles.switchGrayColor
				}`}
			>
				<div
					className={`${
						styles.handle} ${
						!props.isOn && styles.handleOff} ${
						props.iconLock && styles.iconLock
					}`}
				/>
			</div>
			<p
				className={`${
					styles.active} ${
					!props.isOn && styles.deactive} ${
					props.grayColor && styles.textGrayColor
				}`}
				style={props.titleStyle}
			>
				{props.isOn ? props.onTitle : props.offTitle}
			</p>
		</div>
	);
};

Switch.defaultProps = SwitcheDefaultProps;

export default Switch;
