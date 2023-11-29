import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { SvgsNames } from "../Icon/IconName";

const btnShape = [
	"pill",
	"round",
	"square",
] as const;

export type BtnShape = typeof btnShape[number];

export type StylePropertiesType = {
	"--color": string;
	"--hover": string;
	"--title": string;
	"--titleHover"?: string;
	"--circle"?: string;
	"--circleHover"?: string;
	"--circleIconColor"?: string;
	"--borderColor": string;
	"--circleIconHover"?: string;
	"--icon": string;
	"--iconHover"?: string;
	"--borderSize"?: string;
};

type ThemeTypes<T> = {
	primary: T;
	secondary: T;
	tertiary: T;
	success: T;
	danger: T;
	gray: T;
	white: T;
};

export type BtnColor = keyof ThemeTypes<string>;

const btnExpand = [
	"block" ,
	"full",
	"default",
	"equilateral",
] as const;

const btnDirection = [
	"column",
	"row",
	"column_reverse",
	"row_reverse",
] as const;

export type BtnExpand = typeof btnExpand[number];

type BtnDirection = typeof btnDirection[number];

export type FillTypes = {
	disable: StylePropertiesType;
	outline: ThemeTypes<StylePropertiesType>;
	info: ThemeTypes<StylePropertiesType>;
	light: ThemeTypes<StylePropertiesType>;
	basic: ThemeTypes<StylePropertiesType>;
	transparent: ThemeTypes<StylePropertiesType>;
};

export type BtnFill = keyof Omit<FillTypes, "disable">;

export type ButtonType = {
	title?: ReactNode;
	fill?: BtnFill;
	shape?: BtnShape;
	icon?: SvgsNames;
	expand?: BtnExpand;
	color?: BtnColor;
	centered?: boolean;
	iconWidth?: string;
	iconHeight?: string;
	iconAspectRatio?: string;
	isIconCircle?: boolean;
	iconColor?: string;
	classNames?: {
		container?: string;
		icon?: string;
		section?: string;
	};
	style?: {
		container?: CSSProperties;
		icon?: CSSProperties;
		section?: CSSProperties;
	};
	onClick?: (args?: any) => void;

	disabled?: boolean;
	outlineColor?: string;
	outLineSize?: string;
	direction?: BtnDirection;
	titleColor?: string;
	titleHover?: string;
	iconHover?: string;
	isBadge?: boolean;
	otherButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export const ButtonDefaultProps: ButtonType = {
	isBadge: false,
	disabled: false,
	color: "primary",
	isIconCircle: false,
	fill: "basic",
	shape: "round",
	expand: "default",
	direction: "row",
};
