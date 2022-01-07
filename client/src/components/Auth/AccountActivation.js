import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";
import { TitleContainer } from "../UI/TitleStyles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import appConstant from "../../Constant/appConstant";
import { message } from "antd";
import { isAuth } from "./Helpers";

const AccountActivation = ({ match }) => {
  console.log(match);
  useEffect(() => {
    console.log("State change");
    console.log(match.params.token);
    let token = match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);

  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  const { name, token } = values;

  const activationHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${appConstant.baseURL}/account-activation`, { token: token })
      .then((res) => {
        console.log(res);
        message.success(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data.error);
      });
  };

  return (
    <>
      {isAuth() ? (
        <Redirect to="/login" />
      ) : (
        <Stack
          spacing={4}
          alignItems="center"
          justifyContent="center"
          height="80vh"
        >
          <TitleContainer>
            Hey {name}! Are you ready to activate your account?
          </TitleContainer>
          <Button onClick={activationHandler} variant="outlined">
            Click to activate
          </Button>
        </Stack>
      )}
    </>
  );
};

export default AccountActivation;
