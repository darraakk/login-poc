import React, { CSSProperties } from "react";

import { IconType, IconDefaultProps } from "./Types";

import styles from "./Icon.module.scss";

const reqSvgs = require.context("../../../assets/icons", true, /\.svg$/);

const svgs = reqSvgs.keys().reduce((images: any, path: any) => {
	images[path.replace("./", "").replace(".svg", "")] = reqSvgs(path);
	return images;
}, {});

const Icon = (props: IconType) => {
	return (
		<div
			className={`${
				styles.icon}${
				props.isCircle ? " " + styles.circle : ""}${
				props.className ? " " + props.className : ""
			}`}
			style={{
				width: props.width ? props.width : (props.aspectRatio ? props.aspectRatio : "1.5rem"),
				height: props.height ? props.height : (props.aspectRatio ? props.aspectRatio : "1.5rem"),
				aspectRatio: props.aspectRatio ? props.aspectRatio : "",
				"--mask-color": props.color,
				"--mask-background": props.background,
				"--mask-src": "url(" + svgs[props.name] + ")",
				...props.style,
			} as CSSProperties}
		/>
	);
};

Icon.defaultProps = IconDefaultProps;

export default Icon;
