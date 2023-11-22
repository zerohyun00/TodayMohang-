import useInput from "../hooks/useInput";
import {
  Button,
  Form,
  Header,
  Input,
  Label,
} from "../styles/login_styles";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import backIcon from "../assets/images/back.png";
import beforecheck from "../assets/images/beforecheck.png";
import check from "../assets/images/check.png";

const UnivCert = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [univname, onChangeUnivname] = useInput("");
  const [univpassword, , setUnivPassword] = useInput("");
  const [univpasswordCheck, , setUnivPasswordCheck] = useInput("");

  const onChangePassword = useCallback(
    (e) => {
      setUnivPassword(e.target.value);
    },
    [setUnivPassword]
  );

  const onChangeUnivPasswordCheck = useCallback(
    (e) => {
      setUnivPasswordCheck(e.target.value);
    },
    [univpassword, setUnivPasswordCheck]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!univname || !univname.trim()) {
        return;
      }
        axios
          .post("/api/users", { univname, email })
          .then(() => {
            setSignUpSuccess(true);
          })
          .catch((error) => {
            setSignUpError(error.response?.data?.statusCode === 403);
          });
      },
    [email, univname]
  );

  return (
    <section className="flex flex-col px-[22px] py-4 h-[100vh]">
    <div id="container">
      <Link>
      <img
        src={backIcon}
        alt="backIcon"
        className=" object-cover w-[30px] h-[30px] mt-[10px]"
      />
      </Link>
      <Header className="mt-36">대학교 인증</Header>
      <Form onSubmit={onSubmit}>
        <Label id="univname-label" className="relative" >
          <div className="flex items-center">
            <Input
              placeholder="학교명"
              type="text"
              id="nickname"
              name="nickname"
              value={univname}
              onChange={onChangeUnivname}
            />
            {univname.includes('대학교') ? (
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
        <Label id="email-label" className="relative">
          <div className="flex items-center">
            <Input
              placeholder="학교 이메일"
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
        <Button type="submit">인증번호 전송</Button>
        <Label id="password-label" className="relative">
          <div className="flex items-center">
            <Input
              placeholder="인증 번호"
              type="univpassword"
              id="univpassword"
              name="univpassword"
              value={univpassword}
              onChange={onChangePassword}
            />
            <img
                src={beforecheck}
                alt="beforecheck"
                className="absolute right-2 top-1/3 transform -translate-y-1/2"
              />
          </div>
        </Label>
        <Button type="submit">대학교 인증 완료하기</Button>
      </Form>
    </div>
    </section>
  );
};

export default UnivCert;
