import React, { useState } from "react";
import { Container, Sidebar, FormContainer, Input, Title } from "./AuthStyles";
import { Button } from "../../UI";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./Background.css";
import SidebarImage from "./caleb-george-5sF6NrB1MEg-unsplash.jpg";

const Login = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginFormHandler = async (e) => {
    e.preventDefault();
    let loginData = {
      email: loginEmail,
      password: loginPassword,
    };
    console.log(loginData);
    // const isValid = await loginSchema.isValid(loginData);
    // if (isValid) {
    //   axios
    //     .post(`${appConstant.baseURL}/login`, loginData)
    //     .then((res) => {
    //       console.log(res);
    //       authenticate(res, () => {
    //         setLoginEmail("");
    //         setLoginPassword("");
    //         message.success(`Hey ${res.data.user.name}, Welcome Back!`);
    //       });
    //       //save info and token to localstorage/cookie
    //     })
    //     .catch((error) => {
    //       message.error(error.response.data.error);
    //     });
    // } else {
    //   message.error("Check Details Again!");
    // }
  };
  return (
    <animated.div style={props}>
      <Container>
        <Sidebar bgImg={SidebarImage} />
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
          <a className="forgot" href="www.facebook.com">
            Forgot Password?
          </a>
          <Button onClick={loginFormHandler}>Login</Button>
          <div className="signup_link">
            Not a member?
            <Link to="/register">Signup</Link>
          </div>
        </FormContainer>
      </Container>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </animated.div>
  );
};

export default Login;
