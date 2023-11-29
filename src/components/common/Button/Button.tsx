import React, { useLayoutEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { ThemeHandler } from "./Theme";
import styles from "./Button.module.scss";
import { ButtonType, ButtonDefaultProps, StylePropertiesType } from "./Types";

const Button = (props: ButtonType) => {

	const [firstStyle, setFirstStyle] = useState<StylePropertiesType>({
		"--color": "",
		"--hover": "",
		"--title": "",
		"--titleHover": "",
		"--borderSize": "",
		"--borderColor": "",
		"--icon": "",
		"--iconHover": "",
	});

  useLayoutEffect(() => {
		if (props.disabled) {
			setFirstStyle({
				...ThemeHandler.disable,
				"--borderSize": props.outLineSize ?? "",
				[props.outlineColor ? "--borderColor" : ""]: props.outlineColor ?? "",
			});
		} else if (props.color !== undefined && props.fill !== undefined) {
			const newTheme = {
				...ThemeHandler[props.fill][props.color],
				"--borderSize": props.fill === "outline" ? props?.outLineSize ?? "2px" : props?.outLineSize ?? "0px",
				[props.outlineColor ? "--borderColor" : ""]: props.outlineColor ?? "",
				[props.iconColor ? "--icon" : ""]: props.iconColor,
				[props.iconHover ? "--iconHover" : ""]: props.iconHover,
				[props.iconColor ? "--circleIconColor" : ""]: props.iconColor,
				[props.iconHover ? "--circleIconHover" : ""]: props.iconHover,
				[props.titleColor ? "--title" : ""]: props.titleColor,
				[props.titleHover ? "--titleHover" : ""]: props.titleHover,
			}
		
			if (props.isBadge) {
				newTheme["--hover"] = ThemeHandler[props.fill][props.color]["--color"];
				newTheme["--titleHover"] = ThemeHandler[props.fill][props.color]["--title"];
				newTheme["--circleHover"] = ThemeHandler[props.fill][props.color]["--circle"];
				newTheme["--circleIconHover"] = ThemeHandler[props.fill][props.color]["--circleIconColor"];
				newTheme["--iconHover"] = ThemeHandler[props.fill][props.color]["--icon"];
			}
		
			if (!props.isIconCircle) {
				delete newTheme["--circle"];
				delete newTheme["--circleHover"];
				delete newTheme["--circleIconColor"];
				delete newTheme["--circleIconHover"];
			}
		
			setFirstStyle(newTheme);
		}
	}, [props]);
    
	return (
		<button
			onClick={props.isBadge ? console.log : props.onClick}
			className={`${
				styles.container} ${
				styles.fill}${
				props.shape ? " " + styles[`shape_${props.shape}`] : ""}${
				props.expand ? " " + styles[`expand_${props.expand}`] : ""}${
				(props.disabled || (props.isBadge)) ? "" : " " + styles.disable}${
				props.centered ? " " + styles.centered : ""}${
				props.direction ? " " + styles[props.direction] : ""}${
				props.isIconCircle ? " " + styles.circleIcon : ""}${
				props.classNames?.container ? " " + props.classNames.container : ""}${
				props.classNames?.icon ? " " + props.classNames.icon : ""
			}`}
			style={{...firstStyle, ...props.style?.container}}
			disabled={props.disabled}
			{...props.otherButtonProps}
		>
			{props.icon && (
				<Icon
					name={props.icon}
					width={props.iconWidth ? props.iconWidth : (props.iconAspectRatio ? props.iconAspectRatio : "1.5rem")}
					height={props.iconHeight ? props.iconHeight : (props.iconAspectRatio ? props.iconAspectRatio : "1.5rem")}
					aspectRatio={props.iconAspectRatio ? props.iconAspectRatio : ""}
					isCircle={props.isIconCircle}
					classNames={`${
						styles.icon}${
						props.classNames?.icon ? " " + props.classNames?.icon : ""
					}`}
					style={props.style?.icon}
				/>
			)}
			{props.title && (
				<section
					className={props.classNames?.section}
					style={props.style?.section}
				>
					{props.title}
				</section>
			)}
		</button>
	);
};

Button.defaultProps = ButtonDefaultProps;

export default Button;
