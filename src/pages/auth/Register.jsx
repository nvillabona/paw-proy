import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import logo from "../../assets/pawConnect-no-bg.png";
import useSecurity from "../../hooks/useSecurity";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const Register = () => {
    const initialValues = { username: "", password: "", email: "", name: "" }
    const [info, setInfo] = useState(initialValues);
    const { handleRegister } = useSecurity();
    const submitRegister = (e) => {
        e.preventDefault()
        handleRegister(info)
        .then((res)=>{
            if(res)setInfo(initialValues)})
        .catch(()=>{})
    }
    return (
        <div className="login">
            <img src={logo} alt="logo" className="img" />
            <Card className="card">
                <form onSubmit={submitRegister}>
                    <CardContent
                        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                    >
                        <TextField
                            label="Name"
                            value={info.name}
                            onChange={(({ target }) => setInfo({ ...info, name: target.value }))}
                            required
                        ></TextField>
                        <TextField
                            label="Email"
                            value={info.email}
                            type="email"
                            onChange={(({ target }) => setInfo({ ...info, email: target.value }))}
                            required
                        ></TextField>
                        <TextField
                            label="Username"
                            value={info.username}
                            onChange={(({ target }) => setInfo({ ...info, username: target.value }))}
                            required
                        ></TextField>
                        <TextField
                            label="Password"
                            type="password"
                            value={info.password}
                            onChange={(({ target }) => setInfo({ ...info, password: target.value }))}
                            required
                        >

                        </TextField>
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                        >
                            Register
                        </Button>
                        <Typography variant="body1" color="initial">
							Already have an account? <Link to={routes.login.path} className="color">Login</Link>
						</Typography>
                    </CardContent>
                </form>
            </Card>
        </div>
    );
};

export default Register;
