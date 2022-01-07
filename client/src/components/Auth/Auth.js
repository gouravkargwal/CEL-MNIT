import React, { useState } from "react";
import {
  Container,
  Sidebar,
  FormContainer,
  Input,
  Button,
  Title,
} from "./AuthStyles";

const Auth = () => {
  const [authForm, setAuthForm] = useState("login");

  //---Login Data And Handling States Start---//
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginFormHandler = async (e) => {
    e.preventDefault();
    let loginData = {
      email: loginEmail,
      password: loginPassword,
    };
  };
  //---Login Data And Handling States End---//

  //---Register Data And Handling States Start---//
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const registerFormHandler = async (e) => {
    e.preventDefault();
    let registerData = {
      email: registerEmail,
      password: registerPassword,
      cpassword: registerConfirmPassword,
    };
  };
  //---Register Data And Handling States End---//

  return (
    <Container>
      <Sidebar />
      {authForm === "signup" && (
        <FormContainer>
          <Title>Login</Title>
          <Input
            type="email"
            placeholder="Email..."
            onChange={(e) => setLoginEmail(e.target.value)}
            value={loginEmail}
          />
          <Input
            type="password"
            placeholder="Password..."
            onChange={(e) => setLoginPassword(e.target.value)}
            value={loginPassword}
          />
          <a className="forgot">Forgot Password?</a>
          <Button onClick={loginFormHandler}>Login</Button>
          <div className="signup_link">
            Not a member? <a onClick={() => setAuthForm("login")}>Signup</a>
          </div>
        </FormContainer>
      )}
      {authForm === "login" && (
        <FormContainer>
          <Title>Register</Title>
          <Input
            type="email"
            placeholder="Email..."
            onChange={(e) => setRegisterEmail(e.target.value)}
            value={registerEmail}
          />
          <Input
            type="password"
            placeholder="Password..."
            onChange={(e) => setRegisterPassword(e.target.value)}
            value={registerPassword}
          />
          <Input
            type="password"
            placeholder="Confirm Password..."
            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            value={registerConfirmPassword}
          />
          <Button onClick={registerFormHandler}>SignUp</Button>
          <div className="signup_link">
            Already a member? <a onClick={() => setAuthForm("signup")}>Login</a>
          </div>
        </FormContainer>
      )}
    </Container>
  );
};

export default Auth;
