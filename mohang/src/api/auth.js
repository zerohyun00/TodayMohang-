import axios from "axios";
import { BASE_URL } from "../static";

export function HandleRegister(userData) {
  axios
    .post(`${BASE_URL}/user/signup`, userData )
    .then((res) => {
      console.log(res);    
    })
    .catch((err) => {
      console.log(err);
    });
}

export function HandleLogin(userData) {
  axios.post(`${BASE_URL}/user/login`, userData)
  .then((res) => {
    console.log(res);     
  })
  .catch((err) => {
    console.log(err);
  });
}
