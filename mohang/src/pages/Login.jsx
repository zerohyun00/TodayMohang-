import useInput from "../hooks/useInput";
import React, { useState } from "react";
import {
  Button,
  Error,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
} from "../styles/login_styles";
import { Link, useNavigate } from "react-router-dom";
import LogInLogos from "../assets/images/LogInLogos.png";
import { HandleLogin, performLogin } from "../api/auth";
import useScrollToTop from "../hooks/useScrollTop";

const LogIn = () => {
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  useScrollToTop();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLogInError(true);
      return;
    }

    try {
      const userData = {
        email: email,
        password: password,
      };
      await HandleLogin(userData);
      setLogInError(false);
      navigate("/loginMiddleware");
    } catch (error) {
      setLogInError(true);
      console.error("Login error:", error);
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[100vh] overflow-hidden">
      <img src={LogInLogos} alt="LogInLogos" />
      <Header>로그인</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <div>
            <Input
              placeholder="이메일"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
        </Label>
        <Label id="password-label">
          <div>
            <Input
              placeholder="비밀번호"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </Label>
        <Button type="submit">로그인 하기</Button>
      </Form>
      <LinkContainer>
        <Link to="/signup" className="black mt-7">
          회원가입하기
        </Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
