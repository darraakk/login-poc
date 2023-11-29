import React, { useState } from "react";
import { submitLogin } from "../services/api";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input/Input";
import Icon from "../components/common/Icon/Icon";
import styles from "./Login.module.scss";

const Login = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showPass, setShowPass] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	const handleLogin = () => {
		submitLogin(username, password)
			.then((response) => {
				if (response.status === 200) {
					setMessage(response.data.message);
				}
			}).catch((error) => {
				if (error.response) {
					setMessage(error.response.data.message);
				}
			})
	};

	return (
		<div className={styles.container}>
			<h2>
				خوش آمدید!
			</h2>

			<form>
				<Input
					label="نام کاربری:"
					value={username}
					onChange={(value) => setUsername(value)}
					style={{
						label: {
							fontSize: "1.25rem",
							fontWeight: "bold"
						},
						input: {
							width: "20rem",
							height: "3rem",
							padding: "0 2rem",
							borderRadius: "50rem",
							fontSize: "1.5rem"
						}
					}}
				/>
				<Input
					label="رمز عبور:"
					value={password}
					onChange={(value) => setPassword(value)}
					style={{
						label: {
							fontSize: "1.25rem",
							fontWeight: "bold"
						},
						input: {
							width: "20rem",
							height: "3rem",
							padding: "0 2rem",
							borderRadius: "50rem",
							fontSize: "1.5rem"
						}
					}}
					inputProps={{
						type: showPass ? "text" : "password"
					}}
					customChildren={(
						<div onClick={() => setShowPass(!showPass)}>
							<Icon
								name={showPass ? "eye-off" : "eye-show"}
							/>
						</div>
					)}
				/>
				
				<Button
					color="success"
					expand="full"
					shape="pill"
					title="ورود"
					onClick={handleLogin}
				/>
			</form>
			
			<p>
				{message}
			</p>
		</div>
	);
};

export default Login;
