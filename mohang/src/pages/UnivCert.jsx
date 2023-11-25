import useInput from "../hooks/useInput";
import { Button, Form, Header, Input, Label } from "../styles/login_styles";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useState } from "react";
import backIcon from "../assets/images/back.png";
import beforecheck from "../assets/images/beforecheck.png";
import check from "../assets/images/check.png";
import { HandleUnivLogin, HandleUnivcode } from "../api/auth";

const UnivCert = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [univname, onChangeUnivname] = useInput("");
  const [univpassword, , setUnivPassword] = useInput("");
  const onChangePassword = useCallback(
    (e) => {
      setUnivPassword(e.target.value);
    },
    [setUnivPassword]
  );

  const onSendUnivCert = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        univName: univname,
        univ_email: email,
      };

      await HandleUnivLogin(userData);

      setSignUpSuccess(true);
      setSignUpError(false);
      // navigate('/succesUnivCert');
    } catch (error) {
      setSignUpSuccess(false);
      setSignUpError(true);
    }
  };

  const oncertUnivCode = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        certCode: univpassword,
        univName: univname,
        univ_email: email,
      };

      await HandleUnivcode(userData);

      setSignUpSuccess(true);
      setSignUpError(false);
    } catch (error) {
      setSignUpSuccess(false);
      setSignUpError(true);
    }
  };

  return (
    <div id="container">
      <section className="flex flex-col px-[22px] py-4">
        <Link to="#">
          <img
            src={backIcon}
            alt="backIcon"
            className=" object-cover w-[30px] h-[30px] mt-[10px] "
          />
        </Link>
      </section>
      <Header className="mt-36">대학교 인증</Header>
      <Form>
        <Label id="univname-label" className="relative">
          <div className="flex items-center">
            <Input
              placeholder="학교명"
              type="text"
              id="nickname"
              name="nickname"
              value={univname}
              onChange={onChangeUnivname}
            />
            {univname.includes("대학") ? (
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
            {email.includes("@") ? (
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
        <Button type="submit" onClick={onSendUnivCert}>
          인증번호 전송
        </Button>
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
            {univpassword.length === 4 ? (
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
        <Button type="submit" onClick={oncertUnivCode}>
          대학교 인증 완료하기
        </Button>
      </Form>
    </div>
  );
};

export default UnivCert;
