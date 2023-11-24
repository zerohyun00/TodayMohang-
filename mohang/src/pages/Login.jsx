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
import { HandleLogin } from "../api/auth";

const LogIn = () => {
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const navigate = useNavigate();

  

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email : email, 
        password : password,
      };
      navigate('/today');
      await HandleLogin(userData);
      setLogInError(false);

    } catch (error) {
      // 등록 오류 처리
      setLogInError(true);
    }
  };

  return (
    
    <div
      id="container"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-24"
    >
      <img
        src={LogInLogos}
        alt="LogInLogos"
        className="mx-auto my-auto"
      />
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
          {logInError && (
            <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>
          )}
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
