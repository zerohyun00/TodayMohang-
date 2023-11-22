import useInput from "../hooks/useInput";
import {
  Button,
  Error,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
  Success,
} from "../styles/login_styles";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useCallback, useState } from "react";
import LogInLogos from "../assets/images/LogInLogos.png";
import beforecheck from "../assets/images/beforecheck.png";
import check from "../assets/images/check.png";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
    },
    [passwordCheck, setPassword]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
    },
    [password, setPasswordCheck]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!nickname || !nickname.trim()) {
        return;
      }
      if (!mismatchError) {
        setSignUpError(false);
        setSignUpSuccess(false);
        axios
          .post("/api/users", { nickname, email, password })
          .then(() => {
            setSignUpSuccess(true);
          })
          .catch((error) => {
            setSignUpError(error.response?.data?.statusCode === 403);
          });
      }
    },
    [email, nickname, password, mismatchError]
  );

  return (
    <div
      id="container"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src={LogInLogos}
        alt="LogInLogos"
        className="mx-auto my-auto"
      />
      <Header>회원가입</Header>
      <Form onSubmit={onSubmit}>
        <Label id="nickname-label" className="relative" >
          <div className="flex items-center">
            <Input
              placeholder="닉네임"
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={onChangeNickname}
            />
          </div>
        </Label>
        <Label id="email-label" className="relative">
          <div className="flex items-center">
            <Input
              placeholder="이메일"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
              {email.includes('@') ? (
              <img
                src={check}
                alt="check"
                className="absolute right-2 top-1/3 transform -translate-y-1/2"
              />
            ) : (
              <img
                src={beforecheck}
                alt="beforecheck"
                className="absolute right-2 top-1/3 transform -translate-y-1/2"
              />
            )}       
          </div>
        </Label>
        <Label id="password-label" className="relative">
          <div className="flex items-center">
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
        <Label id="password-check-label" className="relative">
          <div className="flex items-center">
            <Input
              placeholder="비밀번호 확인"
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />{passwordCheck && passwordCheck === password ? (
              <img
                src={check}
                alt="check"
                className="absolute right-2 top-1/3 transform -translate-y-1/2"
              />
            ) : (
              <img
                src={beforecheck}
                alt="beforecheck"
                className="absolute right-2 top-1/3 transform -translate-y-1/2"
              />
            )}            
          </div>
          {signUpError && <Error>이미 가입된 이메일입니다. </Error>}
          {signUpSuccess && (
            <Success>회원가입되었습니다! 로그인해주세요.</Success>
          )}
        </Label>
        <Button type="submit">회원가입 하기</Button>
      </Form>
      <LinkContainer>
        <Link to="/Login" className="black mt-7">
          로그인하러 가기
        </Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
