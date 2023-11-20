import useInput from '../../hooks/useInput';
import React, {useCallback, useState}from 'react';
import { Button, Error, Form, Header, Input, Label, LinkContainer } from './styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Icons from '../../components/Icons';

const LogIn = () => {

  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then(() => {
          console.log('success');
        })
        .catch((error) => {
          setLogInError(error.response?.data?.statusCode === 401);
        });
    },
    [email, password],
  );

  // console.log(error, userData);
  // if (!error && userData) {
  //   console.log('로그인됨', userData);
  //   return <Redirect to="/workspace/sleact/channel/일반" />;
  // }

  return (
    <div id="container" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-24" >
      <div className="flex items-center justify-center mb-4">
      <Icons/>
      </div>
      <Header>로그인</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일</span>
          <div>
            <Input placeholder="이메일을 입력하세요" type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input placeholder="비밀번호를 입력하세요" type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup" className='black'>회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;