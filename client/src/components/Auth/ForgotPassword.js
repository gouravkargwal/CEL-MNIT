import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Sidebar,
  FormContainer,
  Input,
  Button,
  Title,
} from "./AuthStyles";
import { forgotPasswordSchema } from "../../Validations/validation";
import { message } from "antd";
import axios from "axios";
import appConstant from "../../Constant/appConstant";
import { Link } from "react-router-dom";
import { authenticate, isAuth } from "./Helpers";

const ForgotPassword = () => {
  const [forgotEmail, setForgotEmail] = useState("");

  const ForgotPasswordFormHandler = async (e) => {
    e.preventDefault();
    const forgotPasswordData = { forgotEmail: forgotEmail };
    const isValid = await forgotPasswordSchema.isValid(forgotPasswordData);
    // if (isValid) {
    //   axios
    //     .post(`${appConstant.baseURL}/forgot-password`, forgotPasswordData)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       message.error(error.response.data.error);
    //     });
    // } else {
    //   message.error("Check Details Again!");
    // }
  };
  return (
    <>
      <Container>
        <Sidebar />
        <FormContainer>
          <Title>Forgot Password</Title>
          <Input
            type="email"
            placeholder="Email..."
            onChange={(e) => setForgotEmail(e.target.value)}
            value={forgotEmail}
          />
          <Button onClick={ForgotPasswordFormHandler}>Send Reset Link</Button>
        </FormContainer>
      </Container>
    </>
  );
};

export default ForgotPassword;
