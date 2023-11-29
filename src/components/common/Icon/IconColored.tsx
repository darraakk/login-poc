import React, { CSSProperties, useLayoutEffect } from "react";
import { useState } from "react";
import styles from "./Icon.module.scss";
import { IconColorType, IconDefaultProps } from "./Types";

const reqSvgs = require.context("../../../assets/iconsColored", true, /\.svg$/);

const svgs = reqSvgs.keys().reduce((images: any, path: any) => {
	images[path.replace("./", "").replace(".svg", "")] = reqSvgs(path);
	return images;
}, {});

const IconColored = (props: IconColorType) => {
	const [iconName, setIconName] = useState("notFound");

	useLayoutEffect(() => {
		let icon = "";
		if(props.isDisable) {
			icon = svgs[`disable ${props.name}`]?.default !== undefined ? `disable ${props.name}` : "notFound";
		} else {
			icon = svgs[props.name] !== undefined ? props.name : "notFound";
		}
		setIconName(icon);
	}, [props.name, props.isDisable])

	return (
		<div
			className={`${
				styles.iconColor}${
				props.className ? " " + props.className : ""
			}`}
			style={{
				width: props.width ? props.width : (props.aspectRatio ? props.aspectRatio : "1.5rem"),
				height: props.height ? props.height : (props.aspectRatio ? props.aspectRatio : "1.5rem"),
				aspectRatio: props.aspectRatio ? props.aspectRatio : "",
				"--mask-src": "url(" + svgs[iconName] + ")",
				...props.style,
			} as CSSProperties}
		/>
	);
};

IconColored.defaultProps = IconDefaultProps;

export default IconColored;
