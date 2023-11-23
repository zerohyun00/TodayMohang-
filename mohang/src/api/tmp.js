import axios from "axios";
import { BASE_URL } from "../static";

export function HandleSignup() {
  axios
    .post(`${BASE_URL}/user/signup`, {
      email: "finnbishoe@naver.com",
      nickname: "testuser2",
      password: "a123123@",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function HandleLogin() {
  axios
    .post(`${BASE_URL}/user/login`, {
      email: "finnbishoe@naver.com",
      password: "a123123@",
    })
    .then((res) => {
      console.log(res);
      sessionStorage.setItem("token", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
