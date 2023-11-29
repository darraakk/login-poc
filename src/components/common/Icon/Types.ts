import { CSSProperties, PropsWithChildren } from "react";
import { SvgsNames } from "./IconName";
import { SvgsColorNames } from "./IconColoredName";

interface BasicIconType extends PropsWithChildren<any> {
	width?: string;
	height?: string;
	aspectRatio?: string;
	color?: string;
	className?: string;
	style?: CSSProperties;
};

export interface IconType extends BasicIconType {
	name: SvgsNames;
	isCircle?: boolean;
	background?: string;
};
  
export interface IconColorType extends BasicIconType {
	name: SvgsColorNames;
};
  
export const IconDefaultProps: IconType = {
	name: "ok-mark",
	color: "black",
	isCircle: false,
};
