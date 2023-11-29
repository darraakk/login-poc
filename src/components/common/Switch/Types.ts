import { CSSProperties } from "react";

export type SwitchTypes = {
	onTitle: string;
	offTitle: string;
	isOn: boolean;
	setIsOn: (switchState: boolean) => void;
	flexDirection?: string;
	containerWidth?: string;
	containerHeight?: string;
	justifyContent?: string;
	padding?: string;
	iconLock?: boolean;
	classNames?: string;
	style?: CSSProperties;
	titleStyle?: CSSProperties; 
	grayColor?: boolean;
};

export const SwitcheDefaultProps: SwitchTypes = {
	onTitle: "On",
	offTitle: "Off",
	isOn: true,
	setIsOn: console.log,
	flexDirection: "row",
	containerWidth: "10em",
	justifyContent: "space-between",
	padding: "0.5rem 0",
	iconLock: false,
	grayColor: false,
};