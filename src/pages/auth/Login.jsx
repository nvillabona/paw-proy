import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import logo from "../../assets/pawConnect-no-bg.png";
import useSecurity from "../../hooks/useSecurity";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const Login = () => {
	const [login, setLogin] = useState({ email: "", password: "" });
	const { submitLogin } = useSecurity();
	const handleLogin = (e) => {
		e.preventDefault()
		submitLogin(login)
	}
	return (
		<div className="login">
			<img src={logo} alt="logo" className="img" />
			<Card className="card">
				<form onSubmit={handleLogin}>
					<CardContent
						sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
					>
						<TextField
							label="Email"
							value={login.email}
							onChange={(({ target }) => setLogin({ ...login, email: target.value }))}
							required
						></TextField>
						<TextField
							label="Password"
							type="password"
							value={login.password}
							onChange={(({ target }) => setLogin({ ...login, password: target.value }))}
							required
						>

						</TextField>
						<Button
							variant="contained"
							size="large"
							type="submit"
						>
							Log in
						</Button>
						<Typography variant="body1" color="initial">
							Dont have an account? <Link to={routes.register.path} className="color">Register</Link>
						</Typography>
					</CardContent>
				</form>
			</Card>
		</div>
	);
};

export default Login;
