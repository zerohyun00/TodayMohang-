import axios from "axios";
import { BASE_URL } from "../static";

export function HandleRegister() {
  axios
    .post(`${BASE_URL}/auth/register`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function HandleLogin() {
  axios.post(`${BASE_URL}/auth/login`);
}
