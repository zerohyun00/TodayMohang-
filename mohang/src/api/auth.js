import axios from "axios";
import { BASE_URL } from "../static";

export function HandleLogin(userData) {
  axios.post(`${BASE_URL}/user/login`, userData)
  .then((res) => {
    sessionStorage.setItem("token", res.data);
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
}

export function HandleUnivLogin(userData) {
  axios.post(`${BASE_URL}/user/univcert.com/api/v1/certify`, userData)
  .then((res) => {
    console.log(res);     
  })
  .catch((err) => {
    console.log(err);
  });
}

export function HandleUnivcode(userData) {
  axios.post(`${BASE_URL}/univcert.com/api/v1/certifycode`, userData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
    },
  })
  .then((res) => {
    console.log(res);     
  })
  .catch((err) => {
    console.log(err);
  });
}
