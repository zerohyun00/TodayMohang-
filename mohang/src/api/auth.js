import axios from "axios";
import { BASE_URL } from "../static";
import apiInstance from ".";

export async function HandleLogin(userData) {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, userData);
    sessionStorage.setItem("token", response.data);
    return response;
  } catch (err) {
    console.error("Login Error:", err);
    alert("로그인에 실패했습니다.");
    throw err;
  }
}

export async function getMyProfile() {
  try {
    const response = await apiInstance.get("user/myprofile");
    sessionStorage.setItem("nickname", response.data.nickname);
    sessionStorage.setItem("authenticated", response.data.authenticated);
    console.log(response.data);
    return response;
  } catch (err) {
    console.error("Error fetching profile:", err);
    throw err;
  }
}

export const performLogin = async (userData) => {
  try {
    await HandleLogin(userData);
    await getMyProfile();
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export function HandleUnivLogin(userData) {
  axios
    .post(`${BASE_URL}/user/univcert.com/api/v1/certify`, userData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function HandleUnivcode(userData) {
  axios
    .post(`${BASE_URL}/univcert.com/api/v1/certifycode`, userData, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
