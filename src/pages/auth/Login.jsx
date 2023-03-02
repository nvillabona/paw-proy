import React,{ useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";
import logo from "../../assets/pawConnect-no-bg.png";
import useSecurity from "../../hooks/useSecurity";

const Login = () => {
	const [login, setLogin] = useState({username: "", password: ""});
	const { submitLogin } = useSecurity();
	return (
		<div className="login">
			<img src={logo} alt="logo" className="img" />
			<Card className="card">
				<CardContent
					sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
				>
					<TextField 
						label="Username"
						value={login.username}
						onChange={(({target}) => setLogin({...login, username: target.value}))}
					></TextField>
					<TextField 
						label="Password" 
						type="password"
						value={login.password}
						onChange={(({target}) => setLogin({...login, password: target.value}))}
					>

					</TextField>
					<Button 
						variant="contained" 
						size="large"
						onClick={()=>submitLogin()}
					>
						Log in
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default Login;
